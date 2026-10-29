"use client";

import Script from "next/script";
import { siteConfig } from "@/data/site-config";

// Global window declaration for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Safe event tracker that only logs or dispatches when GA4 is configured.
 * Event types:
 * - cta_click
 * - form_submission
 * - case_study_view
 * - strategy_call_click
 */
export function trackEvent(
  eventName: "cta_click" | "form_submission" | "case_study_view" | "strategy_call_click",
  eventParams?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.gtag && siteConfig.analytics.enabled) {
    window.gtag("event", eventName, eventParams);
  }
}

export function AnalyticsProvider() {
  const gaId = siteConfig.analytics.ga4Id;
  const isEnabled = siteConfig.analytics.enabled && gaId && !gaId.includes("TODO");

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
