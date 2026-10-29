import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Performance & Growth Marketing",
    description: "Core discipline: generating qualified demand, designing funnels, and optimizing customer acquisition unit economics.",
    tier: "established",
    skills: [
      { name: "Meta Ads (Facebook & Instagram)" },
      { name: "Google Ads (Search & Performance Max)" },
      { name: "Full-Funnel Campaign Architecture" },
      { name: "Audience Research & ICP Mapping" },
      { name: "Conversion Rate Optimization (CRO)" },
      { name: "Search Engine Optimization (SEO)" },
      { name: "Social & Content Strategy" },
      { name: "Web Analytics & UTM Attribution" },
    ],
  },
  {
    title: "Workflow Automation & Operations",
    description: "System engineering: connecting fragmented tools, eliminating repetitive manual work, and streamlining business data.",
    tier: "established",
    skills: [
      { name: "n8n Workflow Automation" },
      { name: "Webhook Ingestion & Routing" },
      { name: "REST API Integrations" },
      { name: "Google Sheets & Airtable Workflows" },
      { name: "Lead Capture & Sales Hand-off Pipelines" },
      { name: "WhatsApp Business API Automation" },
      { name: "Data Sanitization & Deduplication" },
      { name: "Error Handling & Administrative Alerting" },
    ],
  },
  {
    title: "Applied AI & Intelligent Systems",
    description: "Emerging practice: integrating Large Language Models into real business processes with structured validation.",
    tier: "developing",
    skills: [
      { name: "LLM Prompt Engineering & System Prompts" },
      { name: "Structured JSON Output Schemas" },
      { name: "AI-Assisted Content Generation Chains" },
      { name: "Rule-Based & Semantic Chatbot Workflows" },
      { name: "RAG (Retrieval-Augmented Generation) Concepts" },
      { name: "AI Agent Workflows & Tool Use" },
      { name: "Semantic Data Extraction & Classification" },
    ],
  },
  {
    title: "Digital Experiences & Web Engineering",
    description: "Building fast, high-converting digital storefronts, landing pages, and API-connected web interfaces.",
    tier: "established",
    skills: [
      { name: "Shopify Storefront Setup & Customization" },
      { name: "Conversion-Focused Landing Pages" },
      { name: "Next.js & React Web Interfaces" },
      { name: "TypeScript & Semantic HTML" },
      { name: "API-Connected Web Applications" },
      { name: "Clean Systems & Responsive Web Design" },
    ],
  },
];
