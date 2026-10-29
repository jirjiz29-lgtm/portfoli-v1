import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function ContactCtaSection() {
  const isBookingConfigured =
    siteConfig.contact.bookingUrl && !siteConfig.contact.bookingUrl.includes("TODO_");

  return (
    <section className="py-20 lg:py-28 bg-[var(--surface-raised)] border-b border-[var(--border)] relative overflow-hidden">
      <div className="tech-dots absolute inset-0 opacity-20 pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] px-3 py-1 text-xs font-mono text-[var(--accent)] mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>START A CONVERSATION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          Have a business problem worth solving?
        </h2>

        <p className="mx-auto max-w-2xl text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed mb-10">
          Tell me what you&apos;re trying to improve. I&apos;ll help identify the right combination of marketing strategy, automation, and technology.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[var(--accent-foreground)] shadow-[0_0_25px_rgba(212,249,51,0.25)] hover:bg-[var(--accent-hover)] transition-all"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {isBookingConfigured ? (
            <a
              href={siteConfig.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded border border-[var(--border-strong)] bg-[var(--background)] px-6 py-3.5 text-sm font-medium text-white hover:border-[var(--accent)] transition-colors"
            >
              <Calendar className="h-4 w-4 text-[var(--accent)]" />
              <span>Book a Strategy Call</span>
            </a>
          ) : (
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded border border-[var(--border-strong)] bg-[var(--background)] px-6 py-3.5 text-sm font-medium text-white hover:border-[var(--accent)] transition-colors"
            >
              <Calendar className="h-4 w-4 text-[var(--accent)]" />
              <span>Schedule Initial Briefing</span>
            </Link>
          )}
        </div>

        <p className="mt-8 text-xs font-mono text-[var(--foreground-subtle)]">
          Direct email: {siteConfig.contact.email} • Responding within 24 business hours
        </p>
      </div>
    </section>
  );
}
