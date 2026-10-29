import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/data/site-config";

// Simple in-memory rate limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification & Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submissions. Please wait 10 minutes or email directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please correct the highlighted fields.",
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, service, budget, details, _hp } = result.data;

    // 3. Honeypot Anti-Bot Filter
    if (_hp && _hp.length > 0) {
      // Quiet rejection for bots
      return NextResponse.json({ success: true, isDevMode: false });
    }

    // 4. Check for Resend API Key
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || siteConfig.contact.email;

    if (!resendApiKey) {
      // Dev mode: logs the submission server-side and informs client
      console.log("\n================ [DEV MODE FORM SUBMISSION] ================");
      console.log(`Timestamp: ${new Date().toISOString()}`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Company / Website: ${company || "Not provided"}`);
      console.log(`Service Requested: ${service}`);
      console.log(`Budget Tier: ${budget}`);
      console.log(`Project Details:\n${details}`);
      console.log("Status: Logged to console. No email sent because RESEND_API_KEY is not configured.");
      console.log("============================================================\n");

      return NextResponse.json(
        {
          success: true,
          isDevMode: true,
          message:
            "Dev mode: not delivered. Your inquiry was logged to the server console because RESEND_API_KEY is not configured in the environment.",
        },
        { status: 200 }
      );
    }

    // 5. Send via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Inquiry <onboarding@resend.dev>",
        to: notificationEmail,
        reply_to: email,
        subject: `New Project Inquiry: ${name} (${service})`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nService: ${service}\nBudget: ${budget}\n\nProject Details:\n${details}`,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Resend API error:", errText);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to dispatch email notification. Please email directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      isDevMode: false,
      message: "Thank you. Your message has been delivered directly to Jirjis.",
    });
  } catch (err: unknown) {
    console.error("Contact handler error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
