import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[var(--background)]">
      <div className="max-w-md w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-muted)] text-[var(--accent)]">
          <Terminal className="h-6 w-6" />
        </div>

        <div>
          <span className="font-mono text-xs text-[var(--accent)] font-bold tracking-widest uppercase">
            ERROR 404
          </span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white">
            System Route Not Found
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
            The requested endpoint does not exist or has been relocated.
          </p>
        </div>

        <div className="rounded border border-[var(--border-muted)] bg-[var(--background)] p-3 text-left font-mono text-xs text-[var(--foreground-subtle)] space-y-1">
          <p>&gt; status: 404_NOT_FOUND</p>
          <p>&gt; check: URL path spelling</p>
          <p>&gt; fallback: return to index</p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded bg-[var(--accent)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
