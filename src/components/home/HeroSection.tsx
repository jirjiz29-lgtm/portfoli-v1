import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { HeroWorkflowGraphic } from "./HeroWorkflowGraphic";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Background technical accents */}
      <div className="tech-grid absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-[rgba(212,249,51,0.03)] blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow & Status */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)] border-l-2 border-[var(--accent)] pl-2">
                DIGITAL GROWTH × AI SYSTEMS
              </span>
              {siteConfig.availability.isAvailable && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-0.5 font-mono text-[11px] text-[var(--foreground-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  {siteConfig.availability.statusText}
                </span>
              )}
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              I build marketing systems that drive growth.
            </h1>

            {/* Subheading */}
            <p className="text-lg font-medium text-[var(--foreground)] leading-relaxed">
              From performance marketing to AI-powered automation, I turn business problems into practical, scalable systems.
            </p>

            {/* Narrative Body */}
            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed max-w-xl">
              I&apos;m Jirjis — a digital marketing strategist exploring the intersection of performance marketing, automation, and applied AI. I help businesses improve acquisition, streamline repetitive work, and build smarter digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent-foreground)] transition-all hover:bg-[var(--accent-hover)] hover:shadow-[0_0_20px_rgba(212,249,51,0.25)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="#projects"
                className="group flex items-center gap-2 rounded border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="h-4 w-4 text-[var(--accent)] transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Location & Focus Meta Pill */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[var(--foreground-subtle)] border-t border-[var(--border-muted)]">
              <span>Location: {siteConfig.location.region}</span>
              <span>•</span>
              <span>Available for Global Remote &amp; On-Site Sprints</span>
            </div>
          </div>

          {/* Right Column: Interactive System Flow Visualizer */}
          <div className="lg:col-span-6 lg:pl-4">
            <HeroWorkflowGraphic />
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-12 hidden md:flex items-center justify-center">
          <a
            href="#expertise"
            aria-label="Scroll to Expertise section"
            className="group flex flex-col items-center gap-2 text-[var(--foreground-subtle)] hover:text-white transition-colors"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">System Layers</span>
            <div className="h-6 w-3.5 rounded-full border border-[var(--border)] flex items-start justify-center p-0.5">
              <div className="h-1.5 w-1 rounded-full bg-[var(--accent)] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
