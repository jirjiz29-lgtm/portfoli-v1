"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { contactFormSchema, ContactFormData } from "@/lib/contact-schema";
import { Send, AlertCircle, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: siteConfig.serviceOptions[0]?.value || "performance_marketing",
    budget: siteConfig.budgetOptions[0]?.value || "starter",
    details: "",
    _hp: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "dev_mode" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error upon editing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});

    // Client-side Zod validation
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const key = issue.path[0]?.toString();
        if (key && !errors[key]) {
          errors[key] = issue.message;
        }
      });
      setFieldErrors(errors);
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields below.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setStatusMessage(data.error || "Failed to submit. Please email directly.");
        if (data.issues) {
          const mapped: Record<string, string> = {};
          Object.keys(data.issues).forEach((k) => {
            mapped[k] = data.issues[k][0];
          });
          setFieldErrors(mapped);
        }
        return;
      }

      if (data.isDevMode) {
        setStatus("dev_mode");
        setStatusMessage(data.message);
      } else {
        setStatus("success");
        setStatusMessage(data.message || "Thank you. Your project inquiry has been received.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again or reach out directly via email.");
    }
  };

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10 shadow-xl">
      {/* Dev Mode Alert Banner */}
      {status === "dev_mode" && (
        <div className="mb-6 rounded-lg border border-amber-600/50 bg-amber-950/30 p-4 text-xs font-mono text-amber-200">
          <div className="flex items-start gap-2.5">
            <Info className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-300 mb-1">Dev mode: not delivered</p>
              <p className="leading-relaxed text-amber-200/90">{statusMessage}</p>
              <p className="mt-2 text-[11px] text-amber-300/80">
                To receive live email alerts, add <code className="bg-amber-900/60 px-1 py-0.5 rounded">RESEND_API_KEY</code> and <code className="bg-amber-900/60 px-1 py-0.5 rounded">CONTACT_NOTIFICATION_EMAIL</code> in <code className="bg-amber-900/60 px-1 py-0.5 rounded">.env.local</code>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Live Success Banner */}
      {status === "success" && (
        <div className="mb-6 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-muted)] p-5 text-xs text-white">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm text-[var(--accent)] mb-1">Inquiry Dispatched Successfully</p>
              <p className="leading-relaxed text-[var(--foreground-muted)]">{statusMessage}</p>
              <p className="mt-3 font-mono text-[11px] text-[var(--foreground-subtle)]">
                Jirjis typically reviews inquiries within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* General Error Banner */}
      {status === "error" && statusMessage && (
        <div className="mb-6 rounded-lg border border-red-500/40 bg-red-950/20 p-4 text-xs font-mono text-red-300">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
            <p>{statusMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Anti-bot Honeypot field (hidden from screen and CSS) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="_hp">Do not fill this</label>
          <input
            id="_hp"
            type="text"
            name="_hp"
            tabIndex={-1}
            autoComplete="off"
            value={formData._hp}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs font-semibold uppercase tracking-wider text-white mb-2"
            >
              Your Name <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alex Sharma"
              className={`w-full rounded border bg-[var(--background)] px-4 py-3 text-sm text-white placeholder-[var(--foreground-subtle)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] ${
                fieldErrors.name ? "border-red-500" : "border-[var(--border)]"
              }`}
            />
            {fieldErrors.name && (
              <p className="mt-1.5 font-mono text-xs text-red-400">{fieldErrors.name}</p>
            )}
          </div>

          {/* Work Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs font-semibold uppercase tracking-wider text-white mb-2"
            >
              Work Email <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@company.com"
              className={`w-full rounded border bg-[var(--background)] px-4 py-3 text-sm text-white placeholder-[var(--foreground-subtle)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] ${
                fieldErrors.email ? "border-red-500" : "border-[var(--border)]"
              }`}
            />
            {fieldErrors.email && (
              <p className="mt-1.5 font-mono text-xs text-red-400">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        {/* Company / Website */}
        <div>
          <label
            htmlFor="company"
            className="block font-mono text-xs font-semibold uppercase tracking-wider text-white mb-2"
          >
            Company or Website <span className="text-[var(--foreground-subtle)] font-normal lowercase">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Acme Studio / acme.co"
            className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-white placeholder-[var(--foreground-subtle)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Service Needed */}
          <div>
            <label
              htmlFor="service"
              className="block font-mono text-xs font-semibold uppercase tracking-wider text-white mb-2"
            >
              Service Needed <span className="text-[var(--accent)]">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-white transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            >
              {siteConfig.serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[var(--surface)] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Tier */}
          <div>
            <label
              htmlFor="budget"
              className="block font-mono text-xs font-semibold uppercase tracking-wider text-white mb-2"
            >
              Budget Range <span className="text-[var(--accent)]">*</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-white transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            >
              {siteConfig.budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[var(--surface)] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label
            htmlFor="details"
            className="block font-mono text-xs font-semibold uppercase tracking-wider text-white mb-2"
          >
            Project Details &amp; Business Bottleneck <span className="text-[var(--accent)]">*</span>
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            required
            value={formData.details}
            onChange={handleChange}
            placeholder="Tell me what you're trying to achieve: current customer acquisition bottleneck, manual data workflows you want to automate, or your timeline..."
            className={`w-full rounded border bg-[var(--background)] px-4 py-3 text-sm text-white placeholder-[var(--foreground-subtle)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] ${
              fieldErrors.details ? "border-red-500" : "border-[var(--border)]"
            }`}
          />
          {fieldErrors.details && (
            <p className="mt-1.5 font-mono text-xs text-red-400">{fieldErrors.details}</p>
          )}
        </div>

        {/* Submit Button & Privacy Notice */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded bg-[var(--accent)] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-foreground)] shadow-[0_0_20px_rgba(212,249,51,0.2)] hover:bg-[var(--accent-hover)] transition-all disabled:opacity-50"
          >
            <span>{status === "loading" ? "Dispatching..." : "Send Project Brief"}</span>
            <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

          <p className="text-[11px] font-mono text-[var(--foreground-subtle)] text-center sm:text-right">
            Zero spam. Protected by rate limiting. See{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
