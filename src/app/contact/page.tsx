import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/contact/ContactForm";
import { Calendar, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Start a Project",
  description:
    "Get in touch with Jirjis — Digital Marketing Strategist & AI Automation Specialist based in Calicut, Kerala. Discuss performance marketing funnels, n8n automation, and applied AI systems.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const isBookingConfigured =
    siteConfig.contact.bookingUrl && !siteConfig.contact.bookingUrl.includes("TODO_");

  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[var(--accent)]">[ CONTACT ]</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
              Direct Engagement
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Have a business problem worth solving?
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Tell me what you&apos;re trying to improve. I&apos;ll help identify the right combination of marketing strategy, automation, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Sidebar Column: Direct Call & Expectations */}
          <div className="lg:col-span-5 space-y-6">
            {/* Strategy Call Card */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-3 mb-4">
                <span className="font-mono text-xs uppercase text-[var(--accent)] font-semibold">
                  01 / LIVE CONSULTATION
                </span>
                <span className="font-mono text-[10px] text-[var(--foreground-subtle)]">30 MIN</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Book a Strategy Call</h2>
              <p className="text-xs text-[var(--foreground-muted)] leading-relaxed mb-6">
                Prefer to talk through your bottleneck directly? Grab a slot on my calendar for an initial diagnostic conversation.
              </p>

              {isBookingConfigured ? (
                <a
                  href={siteConfig.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-2 rounded border border-[var(--accent)] bg-[var(--accent)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Open Diagnostic Calendar</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              ) : (
                <div className="rounded border border-dashed border-[var(--border-strong)] bg-[var(--background)] p-3 text-center">
                  <p className="font-mono text-xs text-[var(--foreground-muted)] mb-1">
                    CALENDAR_SLOT: Not configured yet
                  </p>
                  <p className="text-[11px] text-[var(--foreground-subtle)]">
                    Please use the project form or direct email below.
                  </p>
                </div>
              )}
            </div>

            {/* Direct Channels Card */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[var(--foreground-muted)] font-semibold block border-b border-[var(--border-muted)] pb-3">
                02 / DIRECT CHANNELS
              </span>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--foreground-subtle)] block">Direct Email:</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-mono text-white hover:text-[var(--accent)] transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--foreground-subtle)] block">Operating Base:</span>
                    <span className="text-white">
                      {siteConfig.location.region}, India (IST / UTC+5:30)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--foreground-subtle)] block">Response SLA:</span>
                    <span className="text-white">Within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Principles */}
            <div className="rounded-xl border border-[var(--border-muted)] bg-[var(--background)] p-6 text-xs text-[var(--foreground-muted)] space-y-2">
              <span className="font-mono text-[11px] uppercase text-[var(--accent)] font-semibold block">
                Engagement Standards
              </span>
              <p className="leading-relaxed">
                • I work exclusively on outcome-focused systems, not low-budget vanity tasks.
              </p>
              <p className="leading-relaxed">
                • Clear communication, realistic scoping, and transparent technical architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
