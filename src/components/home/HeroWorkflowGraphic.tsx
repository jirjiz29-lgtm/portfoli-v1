"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface NodeInfo {
  id: string;
  number: string;
  title: string;
  tag: string;
  summary: string;
  details: string[];
}

const workflowNodes: NodeInfo[] = [
  {
    id: "marketing",
    number: "01",
    title: "Performance Marketing",
    tag: "ACQUISITION",
    summary: "Targeted Meta & Google campaigns drive high-intent prospect traffic.",
    details: ["Meta Ads / Search Intent", "Audience Segmentation", "UTM Attribution Tracking"],
  },
  {
    id: "data",
    number: "02",
    title: "Data Capture & Hygiene",
    tag: "INGESTION",
    summary: "Instant webhooks capture, sanitize, and validate incoming lead payloads.",
    details: ["Zero Data Leakage", "E.164 Phone Normalization", "Real-Time Sheet / DB Sync"],
  },
  {
    id: "automation",
    number: "03",
    title: "Workflow Automation",
    tag: "ORCHESTRATION",
    summary: "n8n engines route data, trigger alerts, and assign immediate follow-ups.",
    details: ["Sub-60s Response Time", "WhatsApp / CRM Hand-off", "Error-Proof Routing"],
  },
  {
    id: "ai",
    number: "04",
    title: "Applied AI Systems",
    tag: "INTELLIGENCE",
    summary: "LLMs classify intent, summarize documents, and generate tailored outputs.",
    details: ["Structured JSON Outputs", "Semantic Triage", "Operational Scalability"],
  },
];

export function HeroWorkflowGraphic() {
  const [activeNodeId, setActiveNodeId] = useState<string>("automation");
  const activeNode = workflowNodes.find((n) => n.id === activeNodeId) || workflowNodes[0];

  return (
    <div className="relative flex flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 shadow-2xl">
      {/* Top Bar with technical status */}
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
            System Architecture
          </span>
        </div>
        <span className="font-mono text-[11px] text-[var(--foreground-subtle)]">
          FLOW: 01 → 02 → 03 → 04
        </span>
      </div>

      {/* Interactive Workflow Node Diagram */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 mb-5">
        {workflowNodes.map((node) => {
          const isActive = node.id === activeNodeId;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNodeId(node.id)}
              className={`group relative flex flex-col text-left rounded border p-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--surface-raised)] shadow-[0_0_12px_rgba(212,249,51,0.1)]"
                  : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--border-strong)]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-mono text-xs font-bold ${
                    isActive ? "text-[var(--accent)]" : "text-[var(--foreground-subtle)]"
                  }`}
                >
                  {node.number}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border-muted)] text-[var(--foreground-muted)]">
                  {node.tag}
                </span>
              </div>
              <p className="text-xs font-semibold text-white leading-tight mb-1">
                {node.title}
              </p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-[10px] text-[var(--foreground-subtle)] group-hover:text-white transition-colors">
                  {isActive ? "Viewing details" : "Inspect"}
                </span>
                <ArrowRight
                  className={`h-3 w-3 transition-transform ${
                    isActive
                      ? "text-[var(--accent)] translate-x-0.5"
                      : "text-[var(--foreground-subtle)] group-hover:translate-x-0.5"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div className="rounded border border-[var(--border)] bg-[var(--surface-raised)] p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-muted)] pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">
              [{activeNode.number}]
            </span>
            <h4 className="text-sm font-semibold text-white">{activeNode.title}</h4>
          </div>
          <span className="font-mono text-[10px] text-[var(--foreground-muted)]">
            Stage {activeNode.number} of 04
          </span>
        </div>
        <p className="text-xs text-[var(--foreground-muted)] mb-3 leading-relaxed">
          {activeNode.summary}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {activeNode.details.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 rounded bg-[var(--background)] px-2.5 py-1.5 border border-[var(--border)]"
            >
              <CheckCircle2 className="h-3 w-3 text-[var(--accent)] shrink-0" />
              <span className="font-mono text-[11px] text-[var(--foreground)] truncate">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Slot for Jirjis Portrait Card with clean, non-stock presentation */}
      <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--background)]/60 rounded p-3">
        <div className="flex items-center gap-3">
          {/* Portrait Slot */}
          <div className="relative h-12 w-12 shrink-0 rounded border border-[var(--border-strong)] bg-[var(--surface)] flex items-center justify-center overflow-hidden">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">J.</span>
            <div className="absolute inset-0 border border-dashed border-[var(--accent-border)] opacity-60 pointer-events-none" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Jirjis</p>
            <p className="text-[11px] text-[var(--foreground-muted)]">
              Digital Marketing Strategist & AI Specialist
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[var(--foreground-subtle)] border border-[var(--border)] px-2 py-1 rounded">
            PORTRAIT_SLOT: /images/jirjis-portrait.jpg
          </span>
        </div>
      </div>
    </div>
  );
}
