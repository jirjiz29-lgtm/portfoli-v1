import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { projects } from "@/data/projects";
import { WorkProjectList } from "@/components/work/WorkProjectList";

export const metadata: Metadata = {
  title: "Case Studies & Work Systems",
  description:
    "Explore case studies and system architectures engineered by Jirjis: AI social media content generation, automated lead follow-up, n8n business workflows, GypsyCircle travel operations, and performance marketing frameworks.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl border-b border-[var(--border)] pb-8 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[var(--accent)]">[ WORK ]</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
              Case Studies &amp; Architectures
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Systems over shortcuts.
          </h1>
          <p className="text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
            Every project below represents a real business bottleneck dissected and solved through performance marketing strategy, automation pipelines, or applied AI models.
          </p>
        </div>

        {/* Interactive Filterable Projects List */}
        <WorkProjectList projects={projects} />
      </div>
    </div>
  );
}
