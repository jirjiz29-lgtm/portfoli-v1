import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ArrowUpRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About Jirjis — Digital Marketing Strategist & Systems Thinker",
  description:
    "Learn about Jirjis, a digital marketing strategist based in Calicut, Kerala. Background across performance marketing, tourism operations at GypsyCircle, and applied AI automation.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Narrative & Portrait Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[var(--border)] pb-16 mb-16">
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
              {/* Portrait container */}
              <div className="relative aspect-[4/5] w-full rounded-lg border border-[var(--border-strong)] bg-[var(--surface-raised)] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <div className="h-20 w-20 rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] font-mono text-3xl font-bold mb-4">
                  J.
                </div>
                <h2 className="text-xl font-bold text-white mb-1">{siteConfig.name}</h2>
                <p className="font-mono text-xs text-[var(--foreground-muted)] mb-4">
                  Digital Marketing Strategist &amp; Automation Specialist
                </p>
                <div className="w-full rounded border border-dashed border-[var(--border-strong)] p-3 bg-[var(--background)]/80 text-[11px] font-mono text-[var(--foreground-subtle)]">
                  PORTRAIT_SLOT
                  <span className="block text-[10px] text-[var(--accent)] mt-1">
                    Save your portrait to /public/images/jirjis-portrait.jpg
                  </span>
                </div>
              </div>

              {/* Quick Details Table */}
              <div className="mt-6 space-y-2.5 text-xs font-mono border-t border-[var(--border-muted)] pt-4">
                <div className="flex justify-between py-1 border-b border-[var(--border-muted)]">
                  <span className="text-[var(--foreground-subtle)]">Base Location:</span>
                  <span className="text-white">{siteConfig.location.region}, India</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border-muted)]">
                  <span className="text-[var(--foreground-subtle)]">Focus Area:</span>
                  <span className="text-white">Growth Systems × n8n × AI</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border-muted)]">
                  <span className="text-[var(--foreground-subtle)]">Experience:</span>
                  <span className="text-white font-semibold">TODO_YEARS_OF_EXPERIENCE</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--border-muted)]">
                  <span className="text-[var(--foreground-subtle)]">Availability:</span>
                  <span className="text-[var(--accent)]">{siteConfig.availability.statusText}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-2.5">
                {siteConfig.contact.hasResumeFile && (
                  <a
                    href={siteConfig.contact.resumePath}
                    download
                    className="flex items-center justify-center gap-2 rounded bg-[var(--surface-raised)] border border-[var(--border-strong)] px-4 py-2.5 text-xs font-mono font-semibold text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Download className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>Download Resume (PDF)</span>
                  </a>
                )}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded bg-[var(--accent)] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ ABOUT ]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                The Thinking Behind The Systems
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Part marketer. Part systems thinker.
            </h1>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-[var(--foreground-muted)]">
              <p>
                I&apos;m Jirjis, a digital marketer with hands-on experience across marketing strategy, content, paid acquisition, and digital business operations. My interest has expanded beyond individual campaigns into the systems behind them: how businesses attract customers, how data moves between tools, and how automation can eliminate repetitive work. I explore practical applications of AI, workflow orchestration, and digital experiences to connect strategy with execution. I value clear thinking, useful technology, and solutions that address real business constraints.
              </p>

              <p>
                My educational background in tourism and hands-on experience operating GypsyCircle — an experiential group travel venture — served as the real-world proving ground for this approach. Operating tours in South India quickly exposed the vulnerability of standalone marketing: running compelling social campaigns meant nothing if fifty incoming inquiries were scattered across WhatsApp chats without qualification, delayed itinerary dispatch, or broken booking ledgers. Building the operational pipelines to service that demand shaped my core conviction: marketing without systems is merely an expensive way to generate chaos.
              </p>

              <p>
                Today, I operate at that exact intersection. Whether architecting a multi-channel Meta Ads sprint, deploying server-side conversion tracking, configuring n8n webhooks to automate lead handoffs under sixty seconds, or structuring LLM prompt chains for platform-native content creation, I focus strictly on tangible business results.
              </p>
            </div>

            {/* Operating Principles */}
            <div className="pt-6 border-t border-[var(--border)]">
              <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
                Operating Principles:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded border border-[var(--border)] bg-[var(--surface)] p-4">
                  <span className="font-mono text-xs text-[var(--accent)] block font-bold mb-1">
                    01 / Honesty First
                  </span>
                  <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                    No fabricated ROAS claims, vanity metrics, or buzzword bingo. Clear, verifiable problem-solving.
                  </p>
                </div>
                <div className="rounded border border-[var(--border)] bg-[var(--surface)] p-4">
                  <span className="font-mono text-xs text-[var(--accent)] block font-bold mb-1">
                    02 / Friction Removal
                  </span>
                  <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                    Automate the repetitive and mechanical so humans can focus on creative strategy and relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills System embedded */}
        <SkillsSection />

        {/* Experience & Trajectory embedded */}
        <ExperienceSection />
      </div>
    </div>
  );
}
