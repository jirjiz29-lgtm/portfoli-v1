interface Step {
  number: string;
  name: string;
  tagline: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    name: "Understand",
    tagline: "Unpack the business model",
    description: "Deep-dive into unit economics, profit margins, and current customer acquisition realities.",
  },
  {
    number: "02",
    name: "Diagnose",
    tagline: "Pinpoint where data leaks",
    description: "Audit ad attribution, lead latency, and repetitive manual operations causing friction.",
  },
  {
    number: "03",
    name: "Design",
    tagline: "Architect the solution",
    description: "Map the exact funnel, n8n automation nodes, and data schemas before touching code or ad spend.",
  },
  {
    number: "04",
    name: "Build & Execute",
    tagline: "Deploy robust systems",
    description: "Launch disciplined creative testing, configure webhook pipelines, and connect integrations.",
  },
  {
    number: "05",
    name: "Measure & Improve",
    tagline: "Refine based on truth",
    description: "Track verified business contribution margin and iterate based on factual performance data.",
  },
];

export function HowIWorkSection() {
  return (
    <section className="border-b border-[var(--border)] py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 04 ]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                Methodology
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              How I Work: From diagnosis to scalable systems.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--foreground-muted)] leading-relaxed">
            No guessing. No premature optimization. A structured five-phase cycle connecting strategy directly with technical execution.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical on Mobile */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[var(--border-strong)] z-0" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)]"
              >
                {/* Step Marker */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--background)] font-mono text-xs font-bold text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                    {step.number}
                  </div>
                  <span className="font-mono text-[10px] text-[var(--foreground-subtle)] uppercase">
                    PHASE {idx + 1}
                  </span>
                </div>

                {/* Step Title & Details */}
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {step.name}
                </h3>
                <p className="font-mono text-[11px] text-[var(--accent)] mb-3">
                  {step.tagline}
                </p>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed mt-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
