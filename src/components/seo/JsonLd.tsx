import { siteConfig } from "@/data/site-config";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Digital Marketing Strategist & AI Automation Specialist",
    url: siteConfig.url,
    sameAs: [
      siteConfig.contact.linkedInUrl,
      siteConfig.contact.instagramUrl,
      siteConfig.contact.githubUrl,
    ].filter((url) => !url.includes("TODO_")),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
    knowsAbout: [
      "Digital Marketing Strategy",
      "Performance Marketing",
      "Meta Ads",
      "Google Ads",
      "AI Workflow Automation",
      "n8n",
      "Generative AI",
      "Shopify Development",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jirjis — Growth Systems & AI Automation",
    image: `${siteConfig.url}/og-image.png`,
    url: siteConfig.url,
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.2588",
      longitude: "75.7804",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Calicut",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kerala",
      },
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Country",
        name: "Worldwide (Remote)",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
