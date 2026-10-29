import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectWorkflowDiagram } from "@/components/work/ProjectWorkflowDiagram";

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="border-b border-[var(--border)] py-16 lg:py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 03 ]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                Selected Work &amp; Systems
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Real problem solving. Proven system architecture.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            <span>View all 5 Case Studies</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          {featured.map((project, index) => {
            const isPrototype = project.status === "Prototype" || project.status === "Concept";

            return (
              <div
                key={project.slug}
                className="group rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8 lg:p-10 transition-all hover:border-[var(--border-strong)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Context, Problem, Solution */}
                  <div className="lg:col-span-6 space-y-5">
                    {/* Status & Eyebrow */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-[var(--accent)]">
                        PROJECT 0{index + 1}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)]">
                        {project.category}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded ${
                          isPrototype
                            ? "bg-amber-950/40 text-amber-300 border border-amber-800/40"
                            : "bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]"
                        }`}
                      >
                        STATUS: {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                      <Link href={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    {/* Problem Statement */}
                    <div className="rounded border-l-2 border-red-500/40 bg-[var(--surface)] p-3 text-xs leading-relaxed text-[var(--foreground-muted)]">
                      <span className="font-mono text-[10px] uppercase font-bold text-red-400 block mb-0.5">
                        The Business Problem:
                      </span>
                      {project.problem}
                    </div>

                    {/* Solution Statement */}
                    <div className="rounded border-l-2 border-[var(--accent)] bg-[var(--surface)] p-3 text-xs leading-relaxed text-[var(--foreground)]">
                      <span className="font-mono text-[10px] uppercase font-bold text-[var(--accent)] block mb-0.5">
                        Engineered Solution:
                      </span>
                      {project.solution}
                    </div>

                    {/* Tools stack */}
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--foreground-subtle)] block mb-2">
                        Stack &amp; Technologies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-[11px] rounded bg-[var(--surface-raised)] border border-[var(--border)] px-2.5 py-1 text-[var(--foreground-muted)]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link to Case Study */}
                    <div className="pt-2">
                      <Link
                        href={`/work/${project.slug}`}
                        className="group/link inline-flex items-center gap-2 rounded border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                      >
                        <span>View In-Depth Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Distinctive SVG Workflow Diagram */}
                  <div className="lg:col-span-6 space-y-4">
                    <ProjectWorkflowDiagram slug={project.slug} />

                    {/* Key takeaway or workflow milestone */}
                    <div className="rounded border border-[var(--border-muted)] bg-[var(--surface)] p-3.5 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[var(--foreground-subtle)] mb-2">
                        <span>WORKFLOW STAGES</span>
                        <span>01 TO 0{project.workflowSteps.length}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        {project.workflowSteps.slice(0, 4).map((step, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="font-mono text-[10px] text-[var(--accent)] font-bold shrink-0">
                              {step.step}
                            </span>
                            <span className="text-[var(--foreground-muted)] leading-tight">
                              {step.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to view all */}
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded border border-[var(--border-strong)] bg-[var(--surface-raised)] px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <span>Explore All 5 Projects &amp; Frameworks</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
