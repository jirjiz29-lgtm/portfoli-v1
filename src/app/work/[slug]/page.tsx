import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site-config";
import { ProjectWorkflowDiagram } from "@/components/work/ProjectWorkflowDiagram";
import { SocialGeneratorDemo } from "@/components/work/SocialGeneratorDemo";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.url}/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study | Jirjis`,
      description: project.summary,
      url: `${siteConfig.url}/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isPrototype = project.status === "Prototype" || project.status === "Concept";
  const relatedProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-xs text-[var(--foreground-muted)] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to all case studies</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="border-b border-[var(--border)] pb-10 mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">
              {project.eyebrow}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)]">
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-[var(--foreground-muted)] leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Tools & Tech Chips */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[var(--foreground-subtle)] mr-2">
              Technologies Deployed:
            </span>
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="font-mono text-xs rounded bg-[var(--surface)] border border-[var(--border)] px-3 py-1 text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </header>

        {/* 1. Business Problem & Bottleneck */}
        <section className="mb-14 space-y-6">
          <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
            <span className="font-mono text-xs text-[var(--accent)]">[ 01 ]</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Business Problem &amp; Bottleneck
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-2">
              <h3 className="text-sm font-bold text-white uppercase font-mono">The Challenge</h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {project.existingBottleneck && (
              <div className="rounded-lg border border-red-500/30 bg-red-950/10 p-6 space-y-2">
                <h3 className="text-sm font-bold text-red-400 uppercase font-mono">
                  Existing Bottleneck
                </h3>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {project.existingBottleneck}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 2. Goals & Constraints */}
        {project.goalsAndConstraints && (
          <section className="mb-14 space-y-6">
            <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 02 ]</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                Goals &amp; System Constraints
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.goalsAndConstraints.map((gc, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 flex items-start gap-3 text-xs leading-relaxed text-[var(--foreground)]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{gc}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Strategy & Architecture Diagram */}
        <section className="mb-14 space-y-6">
          <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
            <span className="font-mono text-xs text-[var(--accent)]">[ 03 ]</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Strategy &amp; System Architecture
            </h2>
          </div>

          <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
            {project.architectureOverview}
          </p>

          {/* Custom SVG Architecture Workflow */}
          <div className="my-6">
            <ProjectWorkflowDiagram slug={project.slug} />
          </div>

          {/* Workflow Sequence Steps */}
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="font-mono text-xs uppercase text-[var(--accent)] font-semibold mb-4">
              Execution Sequence (Step-by-Step):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.workflowSteps.map((step) => (
                <div key={step.step} className="border-l-2 border-[var(--border-strong)] pl-3 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-white">
                    <span className="text-[var(--accent)]">{step.step}.</span>
                    <span>{step.label}</span>
                  </div>
                  <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Interactive Demo or Implementation Table */}
        {project.interactiveDemoType === "social-generator" && (
          <section className="mb-14 space-y-6">
            <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 04 ]</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                Interactive Prototype Playground
              </h2>
            </div>
            <SocialGeneratorDemo />
          </section>
        )}

        {/* Manual vs Automated Matrix */}
        {project.manualVsAutomated && (
          <section className="mb-14 space-y-6">
            <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 04 ]</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                Manual Process vs. Automated Architecture
              </h2>
            </div>
            <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="border-b border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-subtle)] uppercase">
                  <tr>
                    <th className="p-3.5">Operational Dimension</th>
                    <th className="p-3.5 text-red-400">Manual / Legacy Process</th>
                    <th className="p-3.5 text-[var(--accent)]">Automated System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-muted)] bg-[var(--background)]">
                  {project.manualVsAutomated.map((row, i) => (
                    <tr key={i} className="hover:bg-[var(--surface)]/40 transition-colors">
                      <td className="p-3.5 font-bold text-white">{row.dimension}</td>
                      <td className="p-3.5 text-[var(--foreground-muted)]">{row.manual}</td>
                      <td className="p-3.5 text-[var(--foreground)] font-semibold">{row.automated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Implemented vs Planned Features (Honesty rule requirement) */}
        {(project.implementedFeatures || project.plannedFeatures) && (
          <section className="mb-14 space-y-6">
            <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 05 ]</span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                Feature Roadmap &amp; Integration Status
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.implementedFeatures && (
                <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-bold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>IMPLEMENTED &amp; OPERATIONAL</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[var(--foreground)]">
                    {project.implementedFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-mono">&gt;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.plannedFeatures && (
                <div className="rounded-lg border border-[var(--border-muted)] bg-[var(--background)] p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground-subtle)] font-bold">
                    <Clock className="h-4 w-4" />
                    <span>PLANNED INTEGRATIONS</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[var(--foreground-muted)]">
                    {project.plannedFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--foreground-subtle)] font-mono">&gt;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 5. Results & Expected Benefits (No invented metrics!) */}
        <section className="mb-14 space-y-6">
          <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
            <span className="font-mono text-xs text-[var(--accent)]">[ 06 ]</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Business Outcomes &amp; Expected Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.resultsOrBenefits.map((res, i) => (
              <div
                key={i}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-2"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] block">
                  {res.isMeasuredMetric ? "VERIFIED OUTCOME" : "EXPECTED BENEFIT"}
                </span>
                <h3 className="text-base font-bold text-white">{res.title}</h3>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  {res.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Limitations & Lessons Learned */}
        <section className="mb-14 space-y-6">
          <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
            <span className="font-mono text-xs text-[var(--accent)]">[ 07 ]</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Limitations &amp; Strategic Lessons
            </h2>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] p-6 space-y-3">
            {project.limitationsAndLessons.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-xs leading-relaxed text-[var(--foreground)]">
                <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Next Steps */}
        <section className="mb-16 space-y-6">
          <div className="flex items-center gap-2 border-b border-[var(--border-muted)] pb-2">
            <span className="font-mono text-xs text-[var(--accent)]">[ 08 ]</span>
            <h2 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Next Iteration Milestones
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.nextSteps.map((step, i) => (
              <div
                key={i}
                className="rounded border border-[var(--border)] bg-[var(--surface)] p-4 flex items-start gap-2 text-xs text-[var(--foreground-muted)]"
              >
                <span className="font-mono text-[var(--accent)] font-bold">&gt;</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Box: Discuss similar project */}
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center space-y-4 mb-16">
          <h3 className="text-2xl font-bold text-white">
            Need a similar system for your business?
          </h3>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
            Whether you need to automate inbound lead qualification, fix slow marketing handoffs, or build intelligent prompt pipelines, let&apos;s map out the architecture.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-[var(--accent)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] transition-all"
            >
              <span>Discuss a Similar Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Related Projects Links */}
        <div className="border-t border-[var(--border)] pt-10">
          <h4 className="font-mono text-xs uppercase text-[var(--foreground-subtle)] tracking-wider mb-6">
            Related Case Studies:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/work/${rel.slug}`}
                className="group rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--accent)]"
              >
                <span className="font-mono text-[10px] text-[var(--accent)] block mb-1">
                  {rel.category}
                </span>
                <p className="text-sm font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {rel.title}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[var(--foreground-subtle)]">
                  <span>View Breakdown</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
