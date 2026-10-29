import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling practices for withjirjis.com.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs text-[var(--foreground-muted)] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        <div className="border-b border-[var(--border)] pb-8 mb-10">
          <span className="font-mono text-xs text-[var(--accent)]">[ LEGAL &amp; DATA ]</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2 mb-4">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-[var(--foreground-subtle)]">
            Last Updated: October 2026 • withjirjis.com
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-[var(--foreground-muted)]">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono uppercase">
              1. Information Collection &amp; Purpose
            </h2>
            <p>
              When you submit an inquiry through the project form on this website, we collect your name, work email address, company or website URL, requested service category, estimated budget, and the project description you voluntarily provide.
            </p>
            <p>
              This information is used strictly to evaluate your business inquiry, assess strategic fit, and communicate directly with you regarding your project.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono uppercase">
              2. Data Protection &amp; Third Parties
            </h2>
            <p>
              Your contact details are never sold, rented, leased, or distributed to any third-party marketing brokers. Data transmission through our forms is secured using industry-standard TLS encryption.
            </p>
            <p>
              Project briefs may be transmitted via authenticated email APIs (e.g., Resend) to deliver your message securely to Jirjis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono uppercase">
              3. Analytics &amp; Cookies
            </h2>
            <p>
              This website prioritizes privacy. Analytics (such as Google Analytics 4) are strictly disabled by default until valid configuration and consent mechanisms are applied. We do not use third-party behavioral tracking cookies or invasive cross-site profiling scripts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono uppercase">
              4. Data Retention &amp; Rights
            </h2>
            <p>
              Inquiry submissions are retained only as long as necessary to conduct professional business discussions. You may request the deletion or correction of your submitted contact information at any time by emailing{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[var(--accent)] underline hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-mono uppercase">
              5. Contact Information
            </h2>
            <p>
              For any questions regarding this policy or data handling practices, please contact Jirjis directly at{" "}
              <span className="font-mono text-white">{siteConfig.contact.email}</span>, Calicut, Kerala, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
