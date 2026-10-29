import { testimonials, hasVerifiedTestimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  // HONESTY RULE:
  // Hide this entire section if there are no verified testimonials with client permission.
  if (!hasVerifiedTestimonials) {
    return null;
  }

  const verifiedTestimonials = testimonials.filter((t) => t.verified);

  return (
    <section className="border-b border-[var(--border)] py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 08 ]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                Verified Endorsements
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Client Feedback &amp; Colleague Reviews
            </h2>
          </div>
          <p className="max-w-md text-xs font-mono text-[var(--foreground-muted)]">
            Verified with explicit client permission to publish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedTestimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col justify-between"
            >
              <div className="space-y-4 mb-6">
                <Quote className="h-6 w-6 text-[var(--accent)] opacity-80" />
                <p className="text-sm italic text-[var(--foreground)] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border-muted)]">
                <p className="text-xs font-bold text-white">{t.name}</p>
                <p className="text-[11px] text-[var(--foreground-muted)]">
                  {t.role}, {t.company}
                </p>
                <span className="font-mono text-[10px] text-[var(--accent)] mt-1 block">
                  Project: {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
