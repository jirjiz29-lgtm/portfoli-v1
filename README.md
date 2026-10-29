# Jirjis (withjirjis.com) — Portfolio & Systems Architecture

> Production-ready, high-converting portfolio website for **Jirjis** — Digital Marketing Strategist & AI Automation Specialist based in Calicut / Kozhikode, Kerala.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Zod validation, and responsive SVG workflow visualizers. Adheres to strict **data honesty rules** — no fabricated client reviews, no vanity follower numbers, and no phantom ROAS metrics.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Run lint checks
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

---

## 📋 Jirjis Fill-In Checklist

All configurable personal and professional details are centralized in `src/data/` with unambiguous `TODO_` placeholders. Complete the checklist below to personalize your production launch:

### 1. Site Configuration (`src/data/site-config.ts`)
- [ ] **Contact Email**: Update `contact.email` with your real work email (e.g. `hello@withjirjis.com`).
- [ ] **Booking URL**: Update `contact.bookingUrl` with your Calendly or Cal.com scheduling link.
- [ ] **LinkedIn URL**: Update `contact.linkedInUrl` with your LinkedIn profile link.
- [ ] **GitHub URL**: Update `contact.githubUrl` with your GitHub profile (or set to `""` if not needed).
- [ ] **Instagram**: Verify `contact.instagramUrl` (`https://instagram.com/jirjiiss`).
- [ ] **Availability Status**: Adjust `availability.isAvailable` and `availability.statusText` (e.g. `"Available for Q1 Projects"`).

### 2. Resume PDF (`public/documents/`)
- [ ] Place your PDF resume in `/public/documents/jirjis-resume.pdf`.
- [ ] Open `src/data/site-config.ts` and set:
  ```ts
  hasResumeFile: true,
  ```
  *(The download button is automatically hidden until this is set to true)*.

### 3. Portrait Photo (`public/images/`)
- [ ] Save your portrait photo as `/public/images/jirjis-portrait.jpg` (recommended: 800x1000px portrait or 600x600px square).
- [ ] In `AboutPreviewSection.tsx` and `/about/page.tsx`, the slot will cleanly display your portrait once placed.

### 4. Experience & Education (`src/data/experience.ts`)
- [ ] Update `period` dates for each entry (e.g., replace `TODO_YEAR_START` with real calendar years).
- [ ] Replace `TODO_INSTITUTION_NAME` with your actual tourism college or university name.
- [ ] Replace `TODO_YEARS_OF_EXPERIENCE` in `AboutPreviewSection.tsx` and `src/app/about/page.tsx` with your actual experience count.
- [ ] Add your verified marketing certifications (Google, Meta, HubSpot) to the certifications item.

### 5. Client Testimonials (`src/data/testimonials.ts`)
- [ ] **Honesty Rule**: The testimonials section is **100% hidden by default**.
- [ ] Only add reviews from real clients with written permission. Set `verified: true` once verified, and the section will automatically render.

### 6. Email Notifications & API Keys (`.env.local`)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in the variables:
```env
# Optional: Resend API for live email alerts.
# If left blank, the contact form runs in "Dev Mode" and logs inquiries to the terminal.
RESEND_API_KEY="re_..."
CONTACT_NOTIFICATION_EMAIL="your-email@example.com"

# Optional: Google Analytics 4 (disabled by default until configured)
NEXT_PUBLIC_GA4_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GSC_VERIFICATION=""
```

---

## 🏗️ Architecture & Project Structure

```
edapt/
├── public/
│   ├── documents/
│   │   ├── README.md
│   │   └── jirjis-resume.pdf        <-- Add your resume here
│   └── images/
│       ├── README.md
│       └── jirjis-portrait.jpg      <-- Add your portrait photo here
├── src/
│   ├── app/
│   │   ├── about/page.tsx           <-- Full narrative & GypsyCircle background
│   │   ├── api/contact/route.ts     <-- Contact handler with rate limiting & dev mode
│   │   ├── contact/page.tsx         <-- Contact form & consultation booking
│   │   ├── privacy/page.tsx         <-- Privacy policy
│   │   ├── work/page.tsx            <-- Filterable case studies index
│   │   ├── work/[slug]/page.tsx     <-- In-depth case study template
│   │   ├── globals.css              <-- Charcoal dark design system & CSS variables
│   │   ├── layout.tsx               <-- Root layout with fonts, JSON-LD, navbar, footer
│   │   ├── not-found.tsx            <-- Custom 404 page
│   │   ├── opengraph-image.tsx      <-- Dynamic OpenGraph social card
│   │   ├── robots.ts                <-- Robots.txt generator
│   │   └── sitemap.ts               <-- XML Sitemap generator
│   ├── components/
│   │   ├── analytics/               <-- Consent-safe GA4 tracker
│   │   ├── contact/                 <-- Zod-validated contact form
│   │   ├── home/                    <-- Hero, Expertise, Projects, Timeline, Skills
│   │   ├── layout/                  <-- SkipLink, Navbar (mobile menu), Footer
│   │   ├── seo/                     <-- JSON-LD schema (Person & ProfessionalService)
│   │   └── work/                    <-- SVG Workflow diagrams & Interactive prototype
│   ├── data/
│   │   ├── site-config.ts           <-- Central personal config & TODO placeholders
│   │   ├── projects.ts              <-- 5 documented systems & case studies
│   │   ├── experience.ts            <-- Chronological career timeline
│   │   ├── skills.ts                <-- Established vs Developing skills
│   │   └── testimonials.ts          <-- Conditional verified endorsements
│   └── lib/
│       └── contact-schema.ts        <-- Zod validation schema
├── .env.example
├── next.config.ts
├── postcss.config.mjs
└── tailwind.config.ts
```

---

## 🚀 Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio implementation"
   git push origin main
   ```
2. Import the project on [Vercel](https://vercel.com).
3. Set environment variables in the Vercel Dashboard (`RESEND_API_KEY`, `CONTACT_NOTIFICATION_EMAIL`, etc.).
4. Add your custom domain `withjirjis.com` in Vercel Project Settings > Domains.
5. Deploy! SSL certificates, edge CDN, and dynamic OpenGraph cards will be configured automatically.
