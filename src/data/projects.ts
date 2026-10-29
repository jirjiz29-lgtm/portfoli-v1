import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-social-media-content-generator",
    title: "AI Social Media Content Generator",
    eyebrow: "Generative AI × Marketing Automation",
    category: "Generative AI / Marketing Automation",
    status: "Prototype",
    summary:
      "A strategic content generation engine that transforms a raw business brief into platform-tailored copy, carousel scripts, and video hooks through structured LLM prompt chains.",
    featured: true,
    order: 1,
    tools: ["Next.js", "TypeScript", "Anthropic Claude API", "Structured JSON", "n8n Webhooks"],
    problem:
      "Most AI content tools output generic, fluffy copy because they jump straight from a single prompt to final text without understanding business objectives, audience constraints, or platform-specific narrative structures.",
    solution:
      "Engineered a multi-phase generation pipeline: Brief ingestion → Audience & hook analysis → Angle selection → Platform formatting (Instagram caption, LinkedIn thought piece, Reel script, Carousel breakdown, Ad copy) → Automated calendar dispatch.",
    existingBottleneck:
      "Founders and marketing leads spend 8–15 hours weekly manually adapting core marketing messages across disparate formats, often producing low-engagement, homogenous posts.",
    goalsAndConstraints: [
      "Constraint: Must enforce brand tone parameters and forbid buzzwords.",
      "Goal: Output structured, ready-to-schedule copy across 5 platform formats from one brief.",
      "Constraint: Strict JSON schemas to prevent LLM hallucinations or broken formatting.",
      "Goal: Sub-15 second end-to-end generation and parsing.",
    ],
    architectureOverview:
      "The system uses a sequential prompt pipeline. The first stage deconstructs the core value proposition and pinpoints high-converting angles. The second stage applies platform-native layout rules (character counts, line breaks, hook timing for video, CTA placement) into deterministic JSON outputs.",
    implementationHighlights: [
      "Modular prompt templates separating marketing angle generation from editorial styling.",
      "Schema-validated outputs using Zod ensuring consistent headings, hooks, and body copy.",
      "Multi-platform formatters: Instagram Reels (3-second hook + scene direction), LinkedIn (narrative + discussion question), Meta Ad Copy (Primary text + Headline + CTA).",
      "Interactive input/output playground for real-time editorial adjustments before scheduling.",
    ],
    workflowSteps: [
      { step: "01", label: "Business Brief", detail: "Product features, target pain point, core objective, tone" },
      { step: "02", label: "Angle & Hook Analysis", detail: "Extracts 3 high-leverage psychological angles & scroll-stopping hooks" },
      { step: "03", label: "Platform Adaptation", detail: "Applies native heuristics for Instagram, LinkedIn, Ads, and Reels" },
      { step: "04", label: "CTA & Delivery", detail: "Injects tailored conversion drivers and exports to calendar or webhook" },
    ],
    interactiveDemoType: "social-generator",
    resultsOrBenefits: [
      {
        isMeasuredMetric: false,
        title: "Expected Benefit: 80% Reduction in Drafting Time",
        description:
          "Enables marketing strategists to focus on campaign angles and validation while the machine handles cross-format drafting and boilerplate adaptation.",
      },
      {
        isMeasuredMetric: false,
        title: "Expected Benefit: Platform-Native Quality",
        description:
          "Replaces bland single-shot prompts with tailored structural constraints for each social algorithm.",
      },
    ],
    limitationsAndLessons: [
      "Lesson: LLMs struggle with concise video pacing without strict time-stamped cues; structured schemas for reel beats resolved this.",
      "Limitation: Prototype relies on manual review of generated output before live publishing to maintain brand voice integrity.",
    ],
    nextSteps: [
      "Connect automated image asset generation via Fal.ai or Stable Diffusion.",
      "Integrate automated social publishing webhook directly into Buffer or Metricool.",
    ],
  },
  {
    slug: "automated-lead-management-followup",
    title: "Automated Lead Management & Follow-Up Pipeline",
    eyebrow: "AI Automation × Sales Operations",
    category: "AI Automation / Sales Ops",
    status: "Live",
    summary:
      "An automated event-driven pipeline that catches inbound ad leads, validates payloads, synchronizes with Google Sheets, and triggers instant WhatsApp follow-up with intelligent triage.",
    featured: true,
    order: 2,
    tools: ["n8n", "Google Sheets API", "Meta Webhooks", "WhatsApp Cloud API", "REST APIs"],
    problem:
      "Ad conversion rates plunge by over 70% when lead response time exceeds 15 minutes. Manual copy-pasting of leads from Meta Ads Manager into spreadsheets created dropped leads, unassigned sales reps, and zero attribution visibility.",
    solution:
      "Constructed a high-reliability webhook consumer in n8n that captures lead payloads instantaneously, scrubs and normalizes contact formats, checks for deduplication, writes to a clean ledger, and dispatches a contextual WhatsApp greeting.",
    existingBottleneck:
      "Lead data sat isolated in ad platforms until someone manually exported CSVs at the end of the day, leaving high-intent prospects waiting for hours.",
    goalsAndConstraints: [
      "Response Time Target: Under 60 seconds from ad form submission to WhatsApp initial contact.",
      "Zero Data Loss: Fallback error routing with instant administrative notification if APIs time out.",
      "Clean Data Hygiene: E.164 phone normalization and lowercase email sanitation.",
    ],
    architectureOverview:
      "Meta Ads Webhook → n8n Secure Ingestion Node → Data Sanitizer (E.164 phone formatting & name extraction) → Deduplication Check → Google Sheets Master Database sync → WhatsApp Business API Dispatcher → Notification ping to sales Slack/Telegram.",
    implementationHighlights: [
      "Custom regex and formatting expressions in n8n ensuring regional Indian phone numbers (handling missing +91 or leading zeros) are correctly normalized.",
      "Safe idempotency keys preventing duplicate greetings if ad platforms retry webhook deliveries.",
      "Two-tier routing separating immediate automated acknowledgment from high-tier priority leads requiring human sales calls.",
    ],
    workflowSteps: [
      { step: "01", label: "Lead Capture", detail: "Meta Lead Ad / Web Form fires instant JSON webhook payload" },
      { step: "02", label: "Normalization & Validation", detail: "Sanitizes phone, email, strips whitespaces, and checks uniqueness" },
      { step: "03", label: "Central Ledger Sync", detail: "Appends timestamped row with UTM tags into master Google Sheet" },
      { step: "04", label: "Instant WhatsApp Ping", detail: "Dispatches personalized greeting with relevant brochure/itinerary link" },
      { step: "05", label: "Sales Rep Alert", detail: "Pings rep with prospect details and direct WhatsApp chat link" },
    ],
    implementedFeatures: [
      "Instant Meta Webhook listener with secret verification.",
      "Phone normalization for Indian (+91) and international numbers.",
      "Real-time Google Sheets database logging with UTM attribution tracking.",
      "Automated WhatsApp message dispatch via official API.",
      "Error handling branch with Telegram notification on delivery failures.",
    ],
    plannedFeatures: [
      "Bidirectional CRM synchronization (HubSpot / Zoho).",
      "AI qualification agent to converse and classify intent before human handoff.",
      "Automated appointment scheduling link integration.",
    ],
    resultsOrBenefits: [
      {
        isMeasuredMetric: false,
        title: "Expected Benefit: Sub-60 Second Response Time",
        description:
          "Drastically reduces lead latency from hours to seconds, meeting the prospect while intent is at its peak.",
      },
      {
        isMeasuredMetric: false,
        title: "Expected Benefit: Complete Attribution Visibility",
        description:
          "Preserves UTM parameters, campaign IDs, and ad set names through the entire lifecycle for ROI analysis.",
      },
    ],
    limitationsAndLessons: [
      "Lesson: Meta webhook tokens expire or require re-authentication; built automated health-check pings to alert of token deprecations.",
      "Limitation: WhatsApp template messages must be pre-approved by Meta before they can be deployed in automated campaigns.",
    ],
    nextSteps: [
      "Implement multi-agent scoring algorithm based on answers to lead form questions.",
      "Deploy automated re-engagement triggers for prospects who don't reply within 24 hours.",
    ],
  },
  {
    slug: "ai-assisted-business-workflow-automation",
    title: "AI-Assisted Business Workflow Automation",
    eyebrow: "Workflow Engineering × Operational Efficiency",
    category: "Workflow Engineering",
    status: "Completed",
    summary:
      "A modular workflow architecture that ingests unstructured inquiries, invoices, or customer briefs, extracts structured data using LLMs, and orchestrates backend business tools without manual intervention.",
    featured: true,
    order: 3,
    tools: ["n8n", "LLM Structured Outputs", "Webhooks", "JSON Schema", "Cloud Functions"],
    problem:
      "Businesses suffer from 'swivel-chair operations' — employees manually reading incoming emails or messages, copying data into ERPs or spreadsheets, drafting basic reply emails, and forwarding tasks to colleagues. This creates delays and compounding human error.",
    solution:
      "Built an autonomous document and inquiry pipeline in n8n. The system receives raw incoming payloads, calls an LLM with strict JSON schemas to extract intent and entities, validates output against business rules, and updates downstream operational tools.",
    existingBottleneck:
      "Customer inquiry classification and documentation intake required 1–2 hours of manual sorting per day, slowing response times during peak demand.",
    goalsAndConstraints: [
      "Accuracy: Zero tolerance for hallucinated key business data; fallback to human review if confidence score < 85%.",
      "Cost: Use compact models (GPT-4o-mini / Claude 3.5 Haiku) to keep per-execution cost under $0.005.",
      "Security: Scrub PII prior to external API ingestion.",
    ],
    architectureOverview:
      "Raw Data Intake (Email/Webhook) → PII Redaction Filter → Schema-Constrained LLM Extraction Node → Confidence Scoring → Automated Routing Decision (If High Confidence: execute database write & draft reply; If Low: assign to human queue).",
    implementationHighlights: [
      "Strict schema enforcement using function calling / JSON mode to eliminate output parsing errors.",
      "Built-in human-in-the-loop fallback mechanism when customer request is ambiguous or high-value.",
      "Comprehensive execution audit log capturing input tokens, latency, and status.",
    ],
    workflowSteps: [
      { step: "01", label: "Payload Ingestion", detail: "Captures raw inquiry, form data, or text transcript" },
      { step: "02", label: "Semantic Extraction", detail: "LLM extracts intent, entities, urgency, and customer requirements" },
      { step: "03", label: "Rule Evaluation", detail: "Validates against predefined operational criteria and budget boundaries" },
      { step: "04", label: "Action Dispatch", detail: "Routes to appropriate team, updates records, and queues response" },
    ],
    manualVsAutomated: [
      {
        dimension: "Processing Latency",
        manual: "2 to 6 hours during business hours; next day over weekends.",
        automated: "< 30 seconds, 24/7/365 continuous availability.",
      },
      {
        dimension: "Data Entry Accuracy",
        manual: "Prone to typos in phone numbers, emails, and budget amounts (~5-10% error rate).",
        automated: "100% syntactic precision via regex validation and JSON schema enforcement.",
      },
      {
        dimension: "Team Utilization",
        manual: "Senior staff spend 10–15 hours weekly on repetitive clerical triage.",
        automated: "Team handles only edge cases and high-value strategic conversations.",
      },
      {
        dimension: "Auditability",
        manual: "Scattered across personal email inboxes and unlogged chat threads.",
        automated: "Centralized execution logs with timestamped trace data.",
      },
    ],
    resultsOrBenefits: [
      {
        isMeasuredMetric: false,
        title: "Expected Benefit: Elimination of Repetitive Clerical Friction",
        description:
          "Frees operating teams from manual transcription, letting them focus on customer satisfaction and sales closing.",
      },
      {
        isMeasuredMetric: false,
        title: "Expected Benefit: Standardized Customer Experience",
        description:
          "Ensures every inquiry receives immediate, consistent, and structured attention regardless of submission time.",
      },
    ],
    limitationsAndLessons: [
      "Lesson: Never allow LLMs to take irreversible financial or deletion actions autonomously; always require human approval for destructive steps.",
      "Limitation: Highly nuanced multi-part questions still require human review for empathetic client handling.",
    ],
    nextSteps: [
      "Incorporate vector search (RAG) over company policy documents for higher-fidelity inquiry resolution.",
      "Add voice-transcription webhook for processing audio notes sent via WhatsApp.",
    ],
  },
  {
    slug: "travel-business-digital-systems-gypsycircle",
    title: "Travel Business Digital Systems — GypsyCircle",
    eyebrow: "Digital Marketing × Operations Architecture",
    category: "Digital Operations / Real Venture",
    status: "Operational",
    summary:
      "The real-world laboratory that forged Jirjis's systems approach: turning group travel marketing into an integrated engine of targeted acquisition, automated enquiry workflows, and booking logistics.",
    featured: true,
    order: 4,
    tools: ["Meta Ads Manager", "WhatsApp Business", "Google Workspace", "Canva / Adobe Suite", "Analytics"],
    problem:
      "Running a group travel venture (GypsyCircle) revealed the stark reality of the tourism business: organic social media excitement doesn't equal booked seats. High inquiry volume in DMs created chaos, delayed itinerary dispatches, double bookings, and lost customer deposits.",
    solution:
      "Designed and deployed a unified marketing-to-operations system: targeted destination campaigns on Meta Ads driving to structured WhatsApp landing flows, rapid enquiry categorization, automated itinerary sharing, and a visual booking operations board.",
    existingBottleneck:
      "Handling 50+ inquiries per tour across fragmented channels led to slow response times, lost bookings to competitors, and chaotic manual tracking of seat reservations.",
    goalsAndConstraints: [
      "Maintain authentic, warm traveler relationships while eliminating operational chaos.",
      "Zero private customer or internal proprietary data exposure.",
      "Optimize ad spend around high-intent group travelers rather than casual price-shoppers.",
    ],
    architectureOverview:
      "Destination Creative (Instagram Reels / Carousel Ads) → Click-to-WhatsApp Flow with pre-filled tour identifiers → Quick-reply qualification → Itinerary dispatch → Reservation hold tracker → Pre-departure communication broadcast.",
    implementationHighlights: [
      "Structured ad campaigns highlighting specific itinerary highlights, dates, and group culture.",
      "Created standardized itinerary PDF packages with clear inclusions, pricing tiers, and cancellation terms.",
      "Built operational checklists for ground operations, vendor coordination, and participant safety.",
      "Integrated post-trip feedback loops to gather organic photo assets for subsequent campaign cycles.",
    ],
    workflowSteps: [
      { step: "01", label: "Destination Campaign", detail: "Meta Ads target adventure-seeking travelers with date-specific itineraries" },
      { step: "02", label: "Direct Inflow", detail: "Directs travelers into organized WhatsApp communication channel" },
      { step: "03", label: "Structured Qualification", detail: "Quick assessment of group size, dates, fitness requirements, and budget" },
      { step: "04", label: "Itinerary & Confirmation", detail: "Dispatches PDF guide, payment terms, and reservation ledger update" },
      { step: "05", label: "Trip Operations", detail: "Ground execution, logistics checklist, and traveler onboarding" },
    ],
    resultsOrBenefits: [
      {
        isMeasuredMetric: false,
        title: "Strategic Impact: Practical Business Grounding",
        description:
          "Operating GypsyCircle provided real founder experience: managing real budgets, feeling the pain of lead leakage, and understanding that marketing must connect to operational fulfillment.",
      },
      {
        isMeasuredMetric: false,
        title: "Operational Impact: Streamlined Tour Coordination",
        description:
          "Transformed erratic DM inquiries into predictable booking cycles with clear traveler communication at every milestone.",
      },
    ],
    limitationsAndLessons: [
      "Key Takeaway: The best ad campaign fails if operational follow-up is slow. Automation is not a luxury; it is the bridge between marketing interest and actual revenue.",
      "Lesson: Group dynamics require clear boundary setting and proactive communication before travelers ever board the bus.",
    ],
    nextSteps: [
      "Deploy self-service web booking portal for upcoming seasonal departures.",
      "Automate post-trip review requests and user-generated content aggregation.",
    ],
  },
  {
    slug: "performance-marketing-digital-growth-framework",
    title: "Performance Marketing & Digital Growth Framework",
    eyebrow: "Performance Marketing × Funnel Engineering",
    category: "Performance Marketing / Strategy Framework",
    status: "Completed",
    summary:
      "A battle-tested, repeatable framework for paid acquisition campaigns: connecting customer intent, audience segmentation, creative testing protocols, and full-funnel attribution.",
    featured: true,
    order: 5,
    tools: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "Tag Manager", "Looker Studio"],
    problem:
      "Businesses often burn marketing budgets on isolated ads without a cohesive funnel strategy, testing random creatives without hypotheses, and failing to track post-click conversion events properly.",
    solution:
      "Formulated a rigorous 5-phase growth framework: Business Discovery → Audience & Offer Definition → Creative Testing Matrix → Tracking & Attribution Infrastructure → Scaled Optimization Cadence.",
    existingBottleneck:
      "Lack of systematic creative testing and attribution leads to premature campaign cancellations and inaccurate cost-per-acquisition evaluations.",
    goalsAndConstraints: [
      "Focus on true business contribution margin rather than vanity clicks or impressions.",
      "Transparent reporting structure without invented ROAS claims.",
      "Server-side conversion tracking readiness for iOS privacy resiliency.",
    ],
    architectureOverview:
      "Top of Funnel (Problem-aware creative angles, Meta Broad / Google Search intent) → Middle of Funnel (Solution validation, social proof, feature breakdowns) → Bottom of Funnel (Offer specific, urgency, direct conversion) → Retention/Referral triggers.",
    implementationHighlights: [
      "Structured Creative Matrix testing 3 distinct hooks against 2 offer angles before scaling spend.",
      "Full tracking taxonomy: standardized UTM naming conventions for cross-channel clarity.",
      "Landing page conversion optimization checklist addressing page speed, mobile hierarchy, and friction points.",
    ],
    workflowSteps: [
      { step: "01", label: "Diagnostic Audit", detail: "Review past ad data, conversion tracking hygiene, and competitor positioning" },
      { step: "02", label: "Offer & Audience Architecture", detail: "Define ideal customer profiles and value propositions" },
      { step: "03", label: "Testing Sprint", detail: "Launch controlled creative test across defined spend guardrails" },
      { step: "04", label: "Data-Driven Scaling", detail: "Consolidate budget into winning creative angles and expand audience reach" },
      { step: "05", label: "Continuous Optimization", detail: "Weekly creative refreshes, landing page CRO, and bid adjustments" },
    ],
    resultsOrBenefits: [
      {
        isMeasuredMetric: false,
        title: "Strategic Benefit: Predictable Customer Acquisition",
        description:
          "Replaces guesswork with a hypothesis-driven testing methodology that identifies repeatable winners.",
      },
      {
        isMeasuredMetric: false,
        title: "Operational Benefit: Zero-Leakage Attribution",
        description:
          "Provides business owners with clear visibility into which specific ads and keywords drove actual inquiries.",
      },
    ],
    limitationsAndLessons: [
      "Rule: If client metrics or budget data are confidential or unverified, never invent fake ROAS figures. Focus on methodology, architecture, and execution rigor.",
      "Lesson: Great ads cannot fix a weak offer or a confusing landing page. Marketing begins with the product-market match.",
    ],
    nextSteps: [
      "Incorporate predictive LTV modeling for subscription and repeat-purchase business models.",
      "Build automated Slack alerting for sudden ad account performance anomalies.",
    ],
  },
];
