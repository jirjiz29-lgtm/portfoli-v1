import React from "react";

interface ProjectWorkflowDiagramProps {
  slug: string;
  className?: string;
}

export function ProjectWorkflowDiagram({ slug, className = "" }: ProjectWorkflowDiagramProps) {
  switch (slug) {
    case "ai-social-media-content-generator":
      return (
        <div className={`w-full overflow-hidden rounded border border-[var(--border)] bg-[#0b0d10] p-4 ${className}`}>
          <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-2 mb-3">
            <span className="font-mono text-[10px] uppercase text-[var(--accent)] tracking-wider">
              AI Generation Architecture
            </span>
            <span className="font-mono text-[10px] text-[var(--foreground-subtle)]">5-Format Engine</span>
          </div>
          <svg viewBox="0 0 520 120" className="w-full h-auto text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connecting lines */}
            <path d="M100 60 H 150" stroke="#323a45" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M230 60 H 280" stroke="#323a45" strokeWidth="2" />
            <path d="M370 60 H 410" stroke="#323a45" strokeWidth="2" strokeDasharray="3 3" />
            
            {/* Step 1: Raw Brief */}
            <rect x="10" y="30" width="90" height="60" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="55" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Brief Input</text>
            <text x="55" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">Goal &amp; Tone</text>

            {/* Step 2: Psychological Angle Analysis */}
            <rect x="150" y="30" width="80" height="60" rx="4" fill="#161c24" stroke="#2a323d" strokeWidth="1.5" />
            <text x="190" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Angle Engine</text>
            <text x="190" y="72" fill="#d4f933" fontSize="9" textAnchor="middle">Hook Analysis</text>

            {/* Step 3: LLM Schema Validation */}
            <rect x="280" y="24" width="90" height="72" rx="4" fill="#182013" stroke="#d4f933" strokeWidth="1.5" />
            <text x="325" y="52" fill="#d4f933" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">LLM Pipeline</text>
            <text x="325" y="68" fill="#ededed" fontSize="9" textAnchor="middle">Structured JSON</text>
            <text x="325" y="82" fill="#8c94a0" fontSize="8" textAnchor="middle">Platform Heuristics</text>

            {/* Step 4: Multi-Channel Output */}
            <rect x="410" y="15" width="100" height="90" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="460" y="35" fill="#ededed" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="monospace">Outputs</text>
            <text x="460" y="52" fill="#8c94a0" fontSize="8" textAnchor="middle">Instagram &amp; Reels</text>
            <text x="460" y="67" fill="#8c94a0" fontSize="8" textAnchor="middle">LinkedIn Posts</text>
            <text x="460" y="82" fill="#8c94a0" fontSize="8" textAnchor="middle">Ad Headlines</text>
            <text x="460" y="96" fill="#d4f933" fontSize="8" textAnchor="middle">Content Matrix</text>
          </svg>
        </div>
      );

    case "automated-lead-management-followup":
      return (
        <div className={`w-full overflow-hidden rounded border border-[var(--border)] bg-[#0b0d10] p-4 ${className}`}>
          <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-2 mb-3">
            <span className="font-mono text-[10px] uppercase text-[var(--accent)] tracking-wider">
              Lead Dispatch Architecture
            </span>
            <span className="font-mono text-[10px] text-[var(--foreground-subtle)]">&lt;60s SLA</span>
          </div>
          <svg viewBox="0 0 520 120" className="w-full h-auto text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95 60 H 135" stroke="#323a45" strokeWidth="2" />
            <path d="M225 60 H 265" stroke="#323a45" strokeWidth="2" />
            <path d="M355 60 H 395" stroke="#323a45" strokeWidth="2" />
            
            {/* Meta Ingestion */}
            <rect x="10" y="30" width="85" height="60" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="52" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Meta Webhook</text>
            <text x="52" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">Instant Capture</text>

            {/* n8n Sanitizer */}
            <rect x="135" y="30" width="90" height="60" rx="4" fill="#161c24" stroke="#2a323d" strokeWidth="1.5" />
            <text x="180" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">n8n Sanitizer</text>
            <text x="180" y="72" fill="#d4f933" fontSize="9" textAnchor="middle">E.164 + Dedupe</text>

            {/* Google Sheets Sync */}
            <rect x="265" y="30" width="90" height="60" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="310" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Sheets DB</text>
            <text x="310" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">UTM Tracking</text>

            {/* WhatsApp API Hand-off */}
            <rect x="395" y="24" width="115" height="72" rx="4" fill="#182013" stroke="#d4f933" strokeWidth="1.5" />
            <text x="452" y="52" fill="#d4f933" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">WhatsApp Ping</text>
            <text x="452" y="68" fill="#ededed" fontSize="9" textAnchor="middle">Instant Brochure</text>
            <text x="452" y="82" fill="#8c94a0" fontSize="8" textAnchor="middle">Sales Rep Assigned</text>
          </svg>
        </div>
      );

    case "ai-assisted-business-workflow-automation":
      return (
        <div className={`w-full overflow-hidden rounded border border-[var(--border)] bg-[#0b0d10] p-4 ${className}`}>
          <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-2 mb-3">
            <span className="font-mono text-[10px] uppercase text-[var(--accent)] tracking-wider">
              Operational Automation Flow
            </span>
            <span className="font-mono text-[10px] text-[var(--foreground-subtle)]">Document &amp; Triage</span>
          </div>
          <svg viewBox="0 0 520 120" className="w-full h-auto text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 60 H 145" stroke="#323a45" strokeWidth="2" />
            <path d="M235 60 H 280" stroke="#323a45" strokeWidth="2" />
            <path d="M370 60 H 415" stroke="#323a45" strokeWidth="2" />
            
            {/* Raw Documents */}
            <rect x="10" y="30" width="90" height="60" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="55" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Raw Intake</text>
            <text x="55" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">Email / Invoices</text>

            {/* PII & Schema */}
            <rect x="145" y="30" width="90" height="60" rx="4" fill="#161c24" stroke="#2a323d" strokeWidth="1.5" />
            <text x="190" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">PII Filter</text>
            <text x="190" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">Data Sanitization</text>

            {/* LLM Extraction Node */}
            <rect x="280" y="24" width="90" height="72" rx="4" fill="#182013" stroke="#d4f933" strokeWidth="1.5" />
            <text x="325" y="52" fill="#d4f933" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">LLM Triage</text>
            <text x="325" y="68" fill="#ededed" fontSize="9" textAnchor="middle">Entity Extraction</text>
            <text x="325" y="82" fill="#8c94a0" fontSize="8" textAnchor="middle">Confidence &gt; 85%</text>

            {/* Downstream Actions */}
            <rect x="415" y="24" width="95" height="72" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="462" y="52" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Automated Sync</text>
            <text x="462" y="68" fill="#d4f933" fontSize="9" textAnchor="middle">ERP / Team Alert</text>
            <text x="462" y="82" fill="#8c94a0" fontSize="8" textAnchor="middle">Draft Reply Ready</text>
          </svg>
        </div>
      );

    case "travel-business-digital-systems-gypsycircle":
      return (
        <div className={`w-full overflow-hidden rounded border border-[var(--border)] bg-[#0b0d10] p-4 ${className}`}>
          <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-2 mb-3">
            <span className="font-mono text-[10px] uppercase text-[var(--accent)] tracking-wider">
              GypsyCircle Tour Operations Engine
            </span>
            <span className="font-mono text-[10px] text-[var(--foreground-subtle)]">Real Venture Systems</span>
          </div>
          <svg viewBox="0 0 520 120" className="w-full h-auto text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 60 H 145" stroke="#323a45" strokeWidth="2" />
            <path d="M235 60 H 280" stroke="#323a45" strokeWidth="2" />
            <path d="M370 60 H 415" stroke="#323a45" strokeWidth="2" />
            
            {/* Meta Destination Ads */}
            <rect x="10" y="30" width="90" height="60" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="55" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Destination Ads</text>
            <text x="55" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">Targeted Reach</text>

            {/* Click-to-WhatsApp Funnel */}
            <rect x="145" y="30" width="90" height="60" rx="4" fill="#161c24" stroke="#2a323d" strokeWidth="1.5" />
            <text x="190" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Direct Inflow</text>
            <text x="190" y="72" fill="#d4f933" fontSize="9" textAnchor="middle">WhatsApp Chats</text>

            {/* Structured Qualification */}
            <rect x="280" y="30" width="90" height="60" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="325" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Triage &amp; Pack</text>
            <text x="325" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">Instant Itinerary</text>

            {/* Tour Logistics & Ground Execution */}
            <rect x="415" y="24" width="95" height="72" rx="4" fill="#182013" stroke="#d4f933" strokeWidth="1.5" />
            <text x="462" y="52" fill="#d4f933" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">Booking Board</text>
            <text x="462" y="68" fill="#ededed" fontSize="9" textAnchor="middle">Deposit Verified</text>
            <text x="462" y="82" fill="#8c94a0" fontSize="8" textAnchor="middle">Ground Operations</text>
          </svg>
        </div>
      );

    case "performance-marketing-digital-growth-framework":
      return (
        <div className={`w-full overflow-hidden rounded border border-[var(--border)] bg-[#0b0d10] p-4 ${className}`}>
          <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-2 mb-3">
            <span className="font-mono text-[10px] uppercase text-[var(--accent)] tracking-wider">
              5-Stage Campaign Framework
            </span>
            <span className="font-mono text-[10px] text-[var(--foreground-subtle)]">Attribution &amp; Scale</span>
          </div>
          <svg viewBox="0 0 520 120" className="w-full h-auto text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95 60 H 135" stroke="#323a45" strokeWidth="2" />
            <path d="M225 60 H 265" stroke="#323a45" strokeWidth="2" />
            <path d="M355 60 H 395" stroke="#323a45" strokeWidth="2" />
            
            {/* Audit & ICP */}
            <rect x="10" y="30" width="85" height="60" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="52" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Diagnostic</text>
            <text x="52" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">Funnel Audit</text>

            {/* Creative Matrix */}
            <rect x="135" y="30" width="90" height="60" rx="4" fill="#161c24" stroke="#2a323d" strokeWidth="1.5" />
            <text x="180" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Creative Matrix</text>
            <text x="180" y="72" fill="#8c94a0" fontSize="9" textAnchor="middle">Angle Testing</text>

            {/* Tracking Rigor */}
            <rect x="265" y="30" width="90" height="60" rx="4" fill="#13171d" stroke="#2a323d" strokeWidth="1.5" />
            <text x="310" y="55" fill="#ededed" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="monospace">Attribution</text>
            <text x="310" y="72" fill="#d4f933" fontSize="9" textAnchor="middle">Server-Side CAPI</text>

            {/* Controlled Scale */}
            <rect x="395" y="24" width="115" height="72" rx="4" fill="#182013" stroke="#d4f933" strokeWidth="1.5" />
            <text x="452" y="52" fill="#d4f933" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace">Budget Scaling</text>
            <text x="452" y="68" fill="#ededed" fontSize="9" textAnchor="middle">Winning Angles</text>
            <text x="452" y="82" fill="#8c94a0" fontSize="8" textAnchor="middle">Weekly Iterations</text>
          </svg>
        </div>
      );

    default:
      return null;
  }
}
