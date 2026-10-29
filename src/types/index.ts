export type ProjectStatus =
  | "Live"
  | "Completed"
  | "Prototype"
  | "In Progress"
  | "Concept"
  | "Operational";

export interface ProjectWorkflowStep {
  step: string;
  label: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  featured: boolean;
  order: number;
  tools: string[];
  problem: string;
  solution: string;
  existingBottleneck?: string;
  goalsAndConstraints?: string[];
  architectureOverview: string;
  implementationHighlights: string[];
  workflowSteps: ProjectWorkflowStep[];
  implementedFeatures?: string[];
  plannedFeatures?: string[];
  manualVsAutomated?: {
    dimension: string;
    manual: string;
    automated: string;
  }[];
  interactiveDemoType?: "social-generator" | "lead-pipeline" | "workflow-compare";
  resultsOrBenefits: {
    isMeasuredMetric: boolean;
    title: string;
    description: string;
  }[];
  limitationsAndLessons: string[];
  nextSteps: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  tier: "established" | "developing";
  skills: {
    name: string;
    note?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: "marketing" | "business" | "automation" | "education";
  description: string;
  responsibilities: string[];
  keyTakeaways: string;
  isPlaceholder?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  project: string;
  verified: boolean;
}

export interface SiteConfig {
  name: string;
  wordmark: string;
  title: string;
  tagline: string;
  metaDescription: string;
  domain: string;
  url: string;
  location: {
    city: string;
    state: string;
    country: string;
    region: string;
  };
  contact: {
    email: string;
    bookingUrl: string;
    linkedInUrl: string;
    instagramUrl: string;
    githubUrl: string;
    resumePath: string;
    hasResumeFile: boolean;
  };
  availability: {
    isAvailable: boolean;
    statusText: string;
    note: string;
  };
  budgetOptions: {
    value: string;
    label: string;
  }[];
  serviceOptions: {
    value: string;
    label: string;
  }[];
  analytics: {
    ga4Id: string;
    googleSiteVerification: string;
    enabled: boolean;
  };
}
