interface ExpertiseBlock {
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  technicalDetail: {
    label: string;
    value: string;
    codeSnippet?: string;
  };
}

const expertiseBlocks: ExpertiseBlock[] = [
  {
    number: "01",
    title: "Performance Marketing",
    category: "PAID ACQUISITION & ATTRIBUTION",
    description:
      "Campaign strategy and full-funnel paid advertising across Meta and Google Ads, engineered with precision audience targeting and disciplined conversion rate optimization.",
    capabilities: [
      "Meta Ads (Feed, Stories, Reels)",
      "Google Search & Performance Max",
      "Audience Segmentation & Lookalikes",
      "Conversion Rate Optimization (CRO)",
      "Server-Side CAPI & UTM Attribution",
    ],
    technicalDetail: {
      label: "Attribution Setup",
      value: "First-party event routing with server-side CAPI validation",
      codeSnippet: "event_source: 'server' | pixel_id: validated",
    },
  },
  {
    number: "02",
    title: "Marketing Strategy",
    category: "POSITIONING & SYSTEMS",
    description:
      "Holistic growth planning that unifies organic search, scalable content distribution frameworks, positioning clarity, and multi-channel customer journeys.",
    capabilities: [
      "Technical & Editorial SEO Strategy",
      "Content Distribution Frameworks",
      "Brand Positioning & Messaging",
      "Customer Lifecycle & Retention",
      "Competitor Gap Analysis",
    ],
    technicalDetail: {
      label: "Strategic Heuristic",
      value: "Multi-touch intent mapping from cold discovery to repurchase",
      codeSnippet: "TOFU (Awareness) → MOFU (Consideration) → BOFU (Action)",
    },
  },
  {
    number: "03",
    title: "AI & Workflow Automation",
    category: "OPERATIONAL INTEGRATION",
    description:
      "Event-driven n8n workflows, intelligent webhook pipelines, semantic document triage, and schema-constrained LLM integrations that eradicate manual clerical delays.",
    capabilities: [
      "n8n Workflow Engineering",
      "Webhook Ingestion & Data Hygiene",
      "Structured LLM Output Schemas",
      "WhatsApp & CRM Auto-Routing",
      "RAG & Agent Concepts",
    ],
    technicalDetail: {
      label: "Execution SLA",
      value: "<60s latency from webhook trigger to WhatsApp confirmation",
      codeSnippet: "trigger: webhook.post → schema.parse() → route()",
    },
  },
  {
    number: "04",
    title: "Digital Experiences",
    category: "STOREFRONTS & CONVERSION",
    description:
      "Fast, friction-free digital storefronts, Shopify customizations, high-converting landing pages, and API-connected web interfaces tailored for maximum conversion.",
    capabilities: [
      "Shopify Setup & Theme Engineering",
      "Conversion Landing Pages",
      "Next.js & TypeScript Interfaces",
      "Mobile-First Responsive Layouts",
      "Core Web Vitals Optimization",
    ],
    technicalDetail: {
      label: "Performance Benchmark",
      value: "Sub-second LCP, zero layout shifts, accessible semantic markup",
      codeSnippet: "CWV: 95+ Mobile | semantic HTML5 hierarchy",
    },
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-[var(--border)] py-16 lg:py-24 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border)] pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[var(--accent)]">[ 02 ]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                Core Disciplines
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Capabilities built for measurable impact.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--foreground-muted)] leading-relaxed">
            I connect the dots between how customers discover your brand and how your internal systems service their demand.
          </p>
        </div>

        {/* 4 Expertise Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseBlocks.map((block) => (
            <div
              key={block.number}
              className="group relative flex flex-col justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 transition-all hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)]"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border-muted)] pb-4 mb-5">
                  <span className="font-mono text-xl font-bold text-[var(--accent)]">
                    {block.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--foreground-subtle)] border border-[var(--border-muted)] px-2 py-0.5 rounded bg-[var(--background)]">
                    {block.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {block.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-6">
                  {block.description}
                </p>

                {/* Capabilities checklist */}
                <div className="mb-6 space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--foreground-subtle)] block mb-1">
                    Key Execution Areas:
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-[var(--foreground)]">
                    {block.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical / Visual Detail Footer */}
              <div className="pt-4 border-t border-[var(--border-muted)] mt-auto bg-[var(--background)]/50 -mx-2 -mb-2 p-3 rounded">
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--foreground-subtle)] mb-1">
                  <span>{block.technicalDetail.label}</span>
                  <span className="text-[var(--accent)]">SPEC</span>
                </div>
                <p className="text-xs font-mono text-white mb-1.5">
                  {block.technicalDetail.value}
                </p>
                {block.technicalDetail.codeSnippet && (
                  <code className="block rounded bg-[#090b0d] border border-[var(--border)] px-2 py-1 text-[10px] font-mono text-[var(--foreground-muted)] overflow-x-auto">
                    {block.technicalDetail.codeSnippet}
                  </code>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
