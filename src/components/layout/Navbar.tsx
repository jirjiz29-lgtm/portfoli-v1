"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile drawer on route change without triggering cascading effect renders
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90 focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
          aria-label="Jirjis Portfolio Home"
        >
          <span className="font-mono tracking-tighter text-[var(--accent)]">&gt;</span>
          <span className="tracking-tight">{siteConfig.wordmark}</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-transform group-hover:scale-150" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 text-sm font-medium text-[var(--foreground-muted)]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 transition-colors hover:text-white ${
                  isActive ? "text-white font-semibold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--accent)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Availability Pill */}
        <div className="hidden md:flex items-center gap-4">
          {siteConfig.availability.isAvailable && (
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--foreground-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-[11px] text-white">
                {siteConfig.availability.statusText}
              </span>
            </div>
          )}
          <Link
            href="/contact"
            className="group flex items-center gap-1.5 rounded border border-[var(--accent)] bg-[var(--accent)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-foreground)] transition-all hover:bg-[var(--accent-hover)] hover:shadow-[0_0_15px_rgba(212,249,51,0.2)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/contact"
            className="flex items-center gap-1 rounded bg-[var(--accent)] px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent-foreground)]"
          >
            <span>Start</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
            className="rounded p-2 text-[var(--foreground-muted)] hover:bg-[var(--surface-raised)] hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-50 flex flex-col justify-between border-t border-[var(--border)] bg-[var(--background)] px-6 py-8 md:hidden"
        >
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.startsWith("/#")
                  ? false
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between border-b border-[var(--border-muted)] pb-3 text-lg font-medium transition-colors ${
                    isActive ? "text-[var(--accent)] font-semibold" : "text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[var(--foreground-subtle)]">
                    /0{navLinks.indexOf(link) + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="space-y-4 pt-6 border-t border-[var(--border)]">
            {siteConfig.availability.isAvailable && (
              <div className="flex items-center gap-2 rounded border border-[var(--border)] bg-[var(--surface)] p-3 text-xs text-[var(--foreground-muted)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="font-mono">{siteConfig.availability.statusText}</span>
              </div>
            )}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded bg-[var(--accent)] py-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent-foreground)]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
