import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand & Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:opacity-90"
            >
              <span className="font-mono text-[var(--accent)]">&gt;</span>
              <span>{siteConfig.wordmark}</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--foreground-muted)]">
              Building better growth systems. Connecting performance marketing, n8n workflow automation, and applied AI to solve real business bottlenecks.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground-subtle)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>Based in {siteConfig.location.region}, India</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Start a Project
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span className="font-mono text-xs text-[var(--accent)]">&gt;</span>
                  <span>Email: {siteConfig.contact.email}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span className="font-mono text-xs text-[var(--accent)]">&gt;</span>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span className="font-mono text-xs text-[var(--accent)]">&gt;</span>
                  <span>Instagram (@jirjiiss)</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span className="font-mono text-xs text-[var(--accent)]">&gt;</span>
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with technical timestamps and copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-muted)] pt-6 sm:flex-row text-xs font-mono text-[var(--foreground-subtle)]">
          <p>© {currentYear} Jirjis. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Precision Marketing Systems</span>
            <span className="text-[var(--border-strong)]">|</span>
            <span>Applied AI Automation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
