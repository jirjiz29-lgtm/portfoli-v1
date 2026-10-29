import { experienceData } from "@/data/experience";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="border-b border-[var(--border)] py-16 lg:py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 07 ]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                Trajectory &amp; Practice
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Experience &amp; Learning Timeline
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-[var(--foreground-muted)] border-l-2 border-[var(--border-strong)] pl-3">
            A chronological timeline of marketing practice, venture operations, and continuous technical development.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[var(--border-strong)] ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--border-strong)] bg-[var(--background)] transition-all group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]" />

              <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-6 transition-all hover:border-[var(--border-strong)]">
                {/* Period & Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-muted)] pb-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--foreground-subtle)] border border-[var(--border-muted)] px-2 py-0.5 rounded bg-[var(--surface)]">
                    {exp.type}
                  </span>
                </div>

                {/* Role & Org */}
                <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--foreground-muted)] mb-4">
                  <span className="font-semibold text-[var(--foreground)]">{exp.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[var(--accent)]" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul className="mb-4 space-y-1.5 text-xs text-[var(--foreground)]">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] font-mono text-[10px] mt-0.5">&gt;</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Takeaway */}
                <div className="rounded border border-[var(--border-muted)] bg-[var(--surface)] p-3 text-[11px] font-mono text-[var(--foreground-subtle)]">
                  <span className="text-[var(--accent)] font-semibold block mb-0.5">
                    CORE TAKEAWAY:
                  </span>
                  {exp.keyTakeaways}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
