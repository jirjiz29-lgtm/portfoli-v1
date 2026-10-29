import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Jirjis",
  wordmark: "JIRJIS.",
  title: "Jirjis — Digital Marketing Strategist & AI Automation Specialist",
  tagline: "I build marketing systems that drive growth.",
  metaDescription:
    "Calicut-based Digital Marketing Strategist & AI Automation Specialist. Combining performance marketing, n8n workflow automation, and applied AI systems to solve real business challenges.",
  domain: "withjirjis.com",
  url: "https://withjirjis.com",
  location: {
    city: "Calicut",
    state: "Kerala",
    country: "India",
    region: "Kozhikode, Kerala",
  },
  contact: {
    // Fill-in placeholders clearly marked with TODO_
    email: "TODO_YOUR_EMAIL@withjirjis.com",
    bookingUrl: "TODO_CALENDLY_OR_CALCOM_URL",
    linkedInUrl: "TODO_LINKEDIN_PROFILE_URL",
    instagramUrl: "https://instagram.com/jirjiiss",
    githubUrl: "TODO_GITHUB_PROFILE_URL",
    resumePath: "/documents/jirjis-resume.pdf",
    hasResumeFile: false, // Set to true once public/documents/jirjis-resume.pdf is added
  },
  availability: {
    // Driven by config value: never claim availability unless configured
    isAvailable: true,
    statusText: "Available for Q1/Q2 Projects",
    note: "Currently taking on select marketing systems and automation builds.",
  },
  budgetOptions: [
    {
      value: "starter",
      label: "Under $1,500 / ₹1,00,000 (Audit, Single Workflow, or Campaign Setup)",
    },
    {
      value: "growth",
      label: "$1,500 – $3,500 / ₹1L – ₹2.8L (Full Funnel & Automation Pipeline)",
    },
    {
      value: "scale",
      label: "$3,500 – $6,000 / ₹2.8L – ₹5L (Custom AI Systems & Multi-Channel Ops)",
    },
    {
      value: "enterprise",
      label: "$6,000+ / ₹5L+ (End-to-End Strategic Transformation / Retainer)",
    },
    {
      value: "exploring",
      label: "Exploring / Scoping Phase (Flexible)",
    },
  ],
  serviceOptions: [
    { value: "performance_marketing", label: "Performance Marketing & Paid Acquisition" },
    { value: "marketing_strategy", label: "Digital Marketing Strategy & Funnel Architecture" },
    { value: "seo_content", label: "SEO & Scalable Content Systems" },
    { value: "ai_automation", label: "AI & n8n Workflow Automation" },
    { value: "chatbots_ai_apps", label: "Custom Chatbots & Applied AI Interfaces" },
    { value: "web_shopify", label: "Website or Shopify Conversion Engineering" },
    { value: "other", label: "Other / Strategic Consultation" },
  ],
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
    googleSiteVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
    enabled: Boolean(process.env.NEXT_PUBLIC_GA4_ID && process.env.NEXT_PUBLIC_GA4_ID.trim() !== ""),
  },
};
