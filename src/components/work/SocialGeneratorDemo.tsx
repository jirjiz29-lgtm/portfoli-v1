"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

type OutputTabKey = "instagram" | "reelScript" | "linkedIn" | "adCopy" | "carousel" | "analysis";

interface SampleBrief {
  id: string;
  name: string;
  industry: string;
  product: string;
  targetAudience: string;
  objective: string;
  tone: string;
  outputs: {
    analysis: {
      coreAngle: string;
      primaryHook: string;
      painPoint: string;
    };
    instagram: {
      caption: string;
      tags: string;
    };
    reelScript: {
      hook: string;
      beats: { time: string; visual: string; audio: string }[];
      cta: string;
    };
    linkedIn: string;
    adCopy: {
      primary: string;
      headline: string;
      cta: string;
    };
    carousel: { slide: number; heading: string; body: string }[];
  };
}

const sampleBriefs: SampleBrief[] = [
  {
    id: "travel",
    name: "Kerala Group Travel (GypsyCircle Style)",
    industry: "Experiential Tourism",
    product: "4-Day Wayanad Rainforest Camping & Trekking Expedition",
    targetAudience: "Working professionals in Bangalore & Kochi (age 24-34) craving offline escape",
    objective: "Fill 14 remaining seats for upcoming long weekend departure",
    tone: "Raw, adventure-forward, authentic, non-touristy",
    outputs: {
      analysis: {
        coreAngle: "Urban exhaustion vs. waking up above mist clouds with genuine strangers.",
        primaryHook: "Stop spending your long weekend trapped in the same Bangalore traffic.",
        painPoint: "Solo travelers wanting adventure without the logistics headache of planning alone.",
      },
      instagram: {
        caption:
          "Four days without Slack pings or spreadsheet deadlines. Just 14 strangers around a campfire in the Wayanad mist, sharing meals and summit sunrises.\n\nWe coordinate all ground logistics, private permits, camp equipment, and local guides — you just pack a backpack.\n\nDeparture: Next Friday | 14 slots remaining.",
        tags: "#WayanadTrek #KeralaTravel #GroupTravelIndia #WeekendGetaway #TravelKarnataka",
      },
      reelScript: {
        hook: "What if you gave your brain a hard reset next weekend?",
        beats: [
          { time: "0:00 - 0:03", visual: "POV walking through dense rain mist in Chembra peak", audio: "Stop spending your long weekend in the exact same cafes." },
          { time: "0:03 - 0:08", visual: "Campfire embers at dusk, travelers laughing over hot chai", audio: "We take 14 people who start as strangers and end as family." },
          { time: "0:08 - 0:15", visual: "Sunrise over Western Ghats ridge line", audio: "Permits, tents, transport — entirely handled. All you bring is curiosity." },
        ],
        cta: "Comment 'WAYANAD' or tap link in bio for itinerary & seat availability.",
      },
      linkedIn:
        "The fastest way to overcome decision fatigue isn't another self-help book — it's taking your nervous system into the rainforest.\n\nWhen we run GypsyCircle expeditions, the biggest transformation isn't physical fitness. It's watching founders, engineers, and creatives disconnect from notifications for 72 hours.\n\nModern work demands continuous responsiveness. Great strategic thinking demands deep stillness.\n\nHow do you reset your creative focus before high-stakes quarters?",
      adCopy: {
        primary: "Tired of repetitive weekend routines? Join an intimate group of 14 curious travelers for a 4-day mist trek through Wayanad. Complete logistics, safety, and curated stays included.",
        headline: "4 Days in the Mist. 14 Curated Seats.",
        cta: "Check Itinerary & Pricing",
      },
      carousel: [
        { slide: 1, heading: "The 72-Hour Reset", body: "Why your mind needs a physical escape from routine." },
        { slide: 2, heading: "The Trail", body: "Untouched Western Ghats ridge lines away from tourist crowds." },
        { slide: 3, heading: "The Camp", body: "Safe, vetted high-altitude campsite with freshly cooked Kerala meals." },
        { slide: 4, heading: "The Crew", body: "Solo travelers & small groups seeking respectful adventure." },
        { slide: 5, heading: "Next Steps", body: "Limited to 14 slots. Grab the complete itinerary in bio." },
      ],
    },
  },
  {
    id: "saas",
    name: "B2B SaaS Automation Tool",
    industry: "Workflow Software",
    product: "AI-Powered Inbound Lead Routing Engine",
    targetAudience: "B2B sales leaders and agency founders losing leads to slow response times",
    objective: "Book free audit calls to demonstrate response time reduction",
    tone: "Direct, metric-driven, authoritative, practical",
    outputs: {
      analysis: {
        coreAngle: "Speed-to-lead latency: Why 15 minutes of delay kills 70% of conversion probability.",
        primaryHook: "Your sales team doesn't have a lead quality problem. They have a response-latency problem.",
        painPoint: "High ad spend wasted because inbound leads sit untouched in inboxes for hours.",
      },
      instagram: {
        caption:
          "If a prospect fills your ad form and waits 2 hours for a reply, you didn't lose the deal to pricing. You lost it to momentum.\n\nWe build automated event listeners that validate lead data and ping WhatsApp/Slack within 45 seconds.\n\nSwipe to see the exact n8n webhook architecture.",
        tags: "#LeadGen #B2BSales #MarketingAutomation #SalesOps #n8nWorkflows",
      },
      reelScript: {
        hook: "Here is why your Meta ad leads are ghosting you.",
        beats: [
          { time: "0:00 - 0:03", visual: "Split screen: Lead submits form at 2:15 PM; clock ticks to 5:45 PM", audio: "You spent $40 to get this lead. And then left them waiting for 3 hours." },
          { time: "0:03 - 0:08", visual: "n8n workflow node lighting up in green", audio: "By automating validation and sending an instant WhatsApp brochure, conversion doubles." },
          { time: "0:08 - 0:15", visual: "Terminal showing live 42s execution time", audio: "Under 60 seconds from ad click to sales handoff. That's system thinking." },
        ],
        cta: "DM 'PIPELINE' for our open-source n8n blueprint.",
      },
      linkedIn:
        "Most marketing teams treat lead generation as an ad problem.\nIn reality, 60% of lost revenue happens AFTER the click:\n\n1. Lead submits form at 11:30 AM.\n2. CSV sits in Meta Ads Manager until 5:00 PM.\n3. Sales rep calls next morning.\n4. Prospect: 'Who is this again?'\n\nSpeed-to-lead is an operational discipline. If your workflow doesn't route leads within 90 seconds, you're paying ad taxes for your competitors.\n\nHow fast does your team respond to cold inbound leads?",
      adCopy: {
        primary: "Stop losing inbound leads to slow response times. Our automated pipeline routes, qualifies, and engages Meta ad leads on WhatsApp in under 60 seconds.",
        headline: "Cut Lead Latency from 4 Hours to 45 Seconds",
        cta: "Request Pipeline Blueprint",
      },
      carousel: [
        { slide: 1, heading: "The Speed-to-Lead Decay", body: "Why conversion falls by 80% after 15 minutes." },
        { slide: 2, heading: "The Broken Handoff", body: "Where data leaks between Ads Manager and CRM." },
        { slide: 3, heading: "The Automated Fix", body: "Meta Webhooks → n8n Sanitizer → Instant Ping." },
        { slide: 4, heading: "Attribution Intact", body: "Preserving UTM source through to final deal close." },
        { slide: 5, heading: "Implementation", body: "How to set up the system in under 48 hours." },
      ],
    },
  },
];

export function SocialGeneratorDemo() {
  const [selectedBriefId, setSelectedBriefId] = useState<string>("travel");
  const [activeOutputTab, setActiveOutputTab] = useState<OutputTabKey>("reelScript");
  const [copied, setCopied] = useState(false);

  const currentBrief = sampleBriefs.find((b) => b.id === selectedBriefId) || sampleBriefs[0];

  const getCurrentOutputText = () => {
    switch (activeOutputTab) {
      case "reelScript":
        return `Hook: ${currentBrief.outputs.reelScript.hook}\n\nBeats:\n${currentBrief.outputs.reelScript.beats.map((b) => `${b.time} [${b.visual}] -> ${b.audio}`).join("\n")}\n\nCTA: ${currentBrief.outputs.reelScript.cta}`;
      case "instagram":
        return `${currentBrief.outputs.instagram.caption}\n\n${currentBrief.outputs.instagram.tags}`;
      case "linkedIn":
        return currentBrief.outputs.linkedIn;
      case "adCopy":
        return `Primary: ${currentBrief.outputs.adCopy.primary}\nHeadline: ${currentBrief.outputs.adCopy.headline}\nCTA: ${currentBrief.outputs.adCopy.cta}`;
      case "carousel":
        return currentBrief.outputs.carousel.map((s) => `Slide ${s.slide}: ${s.heading} - ${s.body}`).join("\n");
      case "analysis":
        return `Core Angle: ${currentBrief.outputs.analysis.coreAngle}\nPain Point: ${currentBrief.outputs.analysis.painPoint}\nHook: ${currentBrief.outputs.analysis.primaryHook}`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentOutputText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4 mb-5">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-[var(--accent)]" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Interactive Prototype: Structured Content Pipeline
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] rounded bg-[var(--surface-raised)] border border-[var(--border)] px-2 py-0.5 text-[var(--accent)]">
            STATUS: PROTOTYPE
          </span>
        </div>
      </div>

      {/* Preset brief selection */}
      <div className="mb-5">
        <label className="block font-mono text-xs text-[var(--foreground-muted)] mb-2">
          Select Business Brief Context:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sampleBriefs.map((brief) => {
            const isSelected = brief.id === selectedBriefId;
            return (
              <button
                key={brief.id}
                type="button"
                onClick={() => setSelectedBriefId(brief.id)}
                className={`text-left rounded border p-3 transition-colors ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--surface-raised)]"
                    : "border-[var(--border)] bg-[var(--background)] hover:border-[var(--border-strong)]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-white">{brief.name}</span>
                  <span className="font-mono text-[9px] text-[var(--accent)]">{brief.industry}</span>
                </div>
                <p className="text-[11px] text-[var(--foreground-muted)] line-clamp-1">
                  {brief.product}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Structured Brief Snapshot */}
      <div className="mb-5 rounded border border-[var(--border-muted)] bg-[var(--background)] p-3 text-xs space-y-1.5 font-mono">
        <div className="flex flex-col sm:flex-row sm:justify-between text-[11px]">
          <span className="text-[var(--foreground-subtle)]">Audience:</span>
          <span className="text-[var(--foreground)]">{currentBrief.targetAudience}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between text-[11px]">
          <span className="text-[var(--foreground-subtle)]">Objective:</span>
          <span className="text-[var(--foreground)]">{currentBrief.objective}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between text-[11px]">
          <span className="text-[var(--foreground-subtle)]">Tone Constraints:</span>
          <span className="text-[var(--accent)]">{currentBrief.tone}</span>
        </div>
      </div>

      {/* Output Format Selector Tabs */}
      <div className="border-b border-[var(--border)] mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {[
            { key: "reelScript" as OutputTabKey, label: "Reel Script" },
            { key: "instagram" as OutputTabKey, label: "Instagram Caption" },
            { key: "linkedIn" as OutputTabKey, label: "LinkedIn Post" },
            { key: "adCopy" as OutputTabKey, label: "Meta Ad Copy" },
            { key: "carousel" as OutputTabKey, label: "Carousel Breakdown" },
            { key: "analysis" as OutputTabKey, label: "Strategy Angle" },
          ].map((tab) => {
            const isActive = activeOutputTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveOutputTab(tab.key)}
                className={`px-3 py-2 text-xs font-mono transition-colors border-b-2 -mb-[1px] ${
                  isActive
                    ? "border-[var(--accent)] text-white font-bold bg-[var(--surface-raised)]"
                    : "border-transparent text-[var(--foreground-muted)] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface-raised)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--foreground-muted)] hover:border-[var(--accent)] hover:text-white transition-colors"
          title="Copy output to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
              <span className="text-[var(--accent)]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Output Display Canvas */}
      <div className="relative rounded border border-[var(--border)] bg-[#090b0d] p-4 text-xs font-mono text-[var(--foreground)] min-h-[220px]">
        {activeOutputTab === "reelScript" && (
          <div className="space-y-4">
            <div className="border-b border-[var(--border-muted)] pb-2">
              <span className="text-[10px] text-[var(--foreground-subtle)] block">HOOK (0-3s):</span>
              <p className="text-white font-bold text-sm text-[var(--accent)]">
                &ldquo;{currentBrief.outputs.reelScript.hook}&rdquo;
              </p>
            </div>
            <div className="space-y-2">
              {currentBrief.outputs.reelScript.beats.map((beat, i) => (
                <div key={i} className="rounded border border-[var(--border-muted)] p-2 bg-[var(--surface)] text-[11px]">
                  <div className="flex justify-between text-[10px] text-[var(--accent)] mb-1">
                    <span>{beat.time}</span>
                    <span>VISUAL: {beat.visual}</span>
                  </div>
                  <p className="text-white">VOICEOVER: &ldquo;{beat.audio}&rdquo;</p>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[var(--border-muted)] text-[11px] text-[var(--foreground-muted)]">
              <span className="text-[var(--accent)]">CTA:</span> {currentBrief.outputs.reelScript.cta}
            </div>
          </div>
        )}

        {activeOutputTab === "instagram" && (
          <div className="space-y-3">
            <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-white">
              {currentBrief.outputs.instagram.caption}
            </pre>
            <p className="font-mono text-[11px] text-[var(--accent)]">
              {currentBrief.outputs.instagram.tags}
            </p>
          </div>
        )}

        {activeOutputTab === "linkedIn" && (
          <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed text-white">
            {currentBrief.outputs.linkedIn}
          </pre>
        )}

        {activeOutputTab === "adCopy" && (
          <div className="space-y-3">
            <div>
              <span className="text-[10px] text-[var(--foreground-subtle)] block">PRIMARY TEXT:</span>
              <p className="text-white font-sans text-xs leading-relaxed">
                {currentBrief.outputs.adCopy.primary}
              </p>
            </div>
            <div className="rounded border border-[var(--border)] p-2.5 bg-[var(--surface)]">
              <span className="text-[10px] text-[var(--foreground-subtle)] block">HEADLINE:</span>
              <p className="text-white font-bold text-sm">{currentBrief.outputs.adCopy.headline}</p>
              <div className="mt-2 flex justify-between items-center text-[10px]">
                <span className="text-[var(--foreground-muted)]">Action:</span>
                <span className="rounded bg-[var(--accent)] text-[var(--accent-foreground)] px-2 py-0.5 font-bold">
                  {currentBrief.outputs.adCopy.cta}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeOutputTab === "carousel" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {currentBrief.outputs.carousel.map((slide) => (
              <div key={slide.slide} className="rounded border border-[var(--border)] bg-[var(--surface)] p-2.5">
                <span className="text-[10px] text-[var(--accent)] block font-mono">SLIDE 0{slide.slide}</span>
                <p className="font-bold text-white text-xs mb-1">{slide.heading}</p>
                <p className="text-[11px] text-[var(--foreground-muted)] leading-tight">{slide.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeOutputTab === "analysis" && (
          <div className="space-y-3">
            <div>
              <span className="text-[10px] text-[var(--accent)] uppercase">Identified Psychological Angle:</span>
              <p className="text-white text-xs mt-1">{currentBrief.outputs.analysis.coreAngle}</p>
            </div>
            <div>
              <span className="text-[10px] text-[var(--foreground-subtle)] uppercase">Target Pain Point:</span>
              <p className="text-[var(--foreground-muted)] text-xs mt-1">{currentBrief.outputs.analysis.painPoint}</p>
            </div>
            <div>
              <span className="text-[10px] text-[var(--foreground-subtle)] uppercase">Primary Hook Thesis:</span>
              <p className="text-white text-xs mt-1 font-semibold">{currentBrief.outputs.analysis.primaryHook}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-[var(--foreground-subtle)] font-mono">
        <span>Deterministic JSON Schema Validation Enabled</span>
        <span>Generated via Structured Prompts</span>
      </div>
    </div>
  );
}
