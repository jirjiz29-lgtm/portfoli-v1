import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="border-b border-[var(--border)] py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 06 ]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                Technical Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Skills &amp; Technologies
            </h2>
          </div>
          <div className="max-w-md text-xs font-mono text-[var(--foreground-muted)] border-l-2 border-[var(--border-strong)] pl-3">
            <span className="text-[var(--accent)] font-semibold">Honesty Principle:</span> No arbitrary skill bars or 5-star ratings. I separate established execution skills from actively developing disciplines.
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const isDeveloping = cat.tier === "developing";

            return (
              <div
                key={cat.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[var(--foreground-subtle)]">
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
                        isDeveloping
                          ? "bg-amber-950/40 text-amber-300 border border-amber-800/40"
                          : "bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]"
                      }`}
                    >
                      {isDeveloping ? "Developing / Applied" : "Established Skill"}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-xs text-[var(--foreground-muted)] leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Plain text tags / chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 font-mono text-xs text-[var(--foreground)] transition-colors hover:border-[var(--accent-border)] hover:text-white"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
