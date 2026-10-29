import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function AboutPreviewSection() {
  return (
    <section className="border-b border-[var(--border)] py-16 lg:py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Credentials Slot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-xl border border-[var(--border)] bg-[var(--background)] p-6">
              {/* Portrait Box */}
              <div className="relative aspect-[4/5] w-full rounded-lg border border-[var(--border-strong)] bg-[var(--surface-raised)] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <div className="h-16 w-16 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] font-mono text-2xl font-bold mb-3">
                  J.
                </div>
                <h4 className="text-base font-bold text-white mb-1">{siteConfig.name}</h4>
                <p className="font-mono text-xs text-[var(--foreground-muted)] mb-4">
                  {siteConfig.location.city}, {siteConfig.location.state}
                </p>
                <div className="w-full rounded border border-dashed border-[var(--border-strong)] p-2.5 bg-[var(--background)]/80 text-[11px] font-mono text-[var(--foreground-subtle)]">
                  PORTRAIT_PLACEHOLDER
                  <span className="block text-[10px] text-[var(--accent)] mt-0.5">
                    Save photo to /public/images/jirjis-portrait.jpg
                  </span>
                </div>
              </div>

              {/* Technical Facts Card */}
              <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border-muted)] text-xs font-mono">
                <div className="rounded border border-[var(--border)] bg-[var(--surface)] p-2.5">
                  <span className="text-[10px] text-[var(--foreground-subtle)] block">LOCATION</span>
                  <span className="text-white font-semibold">{siteConfig.location.region}</span>
                </div>
                <div className="rounded border border-[var(--border)] bg-[var(--surface)] p-2.5">
                  <span className="text-[10px] text-[var(--foreground-subtle)] block">EXPERIENCE</span>
                  <span className="text-white font-semibold">TODO_YEARS_OF_EXPERIENCE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 05 ]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                Philosophy &amp; Background
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Part marketer. Part systems thinker.
            </h2>

            <div className="space-y-4 text-sm leading-relaxed text-[var(--foreground-muted)]">
              <p>
                I&apos;m Jirjis, a digital marketer with hands-on experience across marketing strategy, content, paid acquisition, and digital business operations. My interest has expanded beyond individual campaigns into the systems behind them: how businesses attract customers, how data moves between tools, and how automation can eliminate repetitive work. I explore practical applications of AI, workflow orchestration, and digital experiences to connect strategy with execution. I value clear thinking, useful technology, and solutions that address real business constraints.
              </p>
              <p>
                My background in tourism and operating GypsyCircle (an experiential group travel business) provided a real-world crucible for this philosophy. Managing real tour budgets, coordinating complex ground logistics, and feeling the direct pain of dropped customer inquiries taught me what textbooks rarely mention: marketing interest is worthless without seamless operational follow-through. Those transferable disciplines now shape every acquisition funnel, n8n webhook, and AI workflow I engineer.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border)]">
              <Link
                href="/about"
                className="group flex items-center gap-2 rounded bg-[var(--surface-raised)] border border-[var(--border-strong)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              >
                <span>Read Full Background</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Show download resume button ONLY if configured */}
              {siteConfig.contact.hasResumeFile && (
                <a
                  href={siteConfig.contact.resumePath}
                  download
                  className="flex items-center gap-2 rounded border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-xs font-medium text-[var(--foreground)] hover:text-white hover:border-[var(--border-strong)] transition-colors"
                >
                  <Download className="h-3.5 w-3.5 text-[var(--accent)]" />
                  <span>Download Resume (PDF)</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
