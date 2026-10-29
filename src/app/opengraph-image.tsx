import { ImageResponse } from "next/og";

export const alt = "Jirjis — Digital Marketing Strategist & AI Automation Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#090b0d",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid background simulation */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "#d4f933", fontSize: "36px", fontFamily: "monospace", fontWeight: 700 }}>
              &gt;
            </span>
            <span style={{ color: "#ffffff", fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em" }}>
              JIRJIS.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              borderRadius: "9999px",
              backgroundColor: "#111417",
              border: "1px solid #22272e",
              color: "#d4f933",
              fontSize: "14px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Digital Growth × AI Systems
          </div>
        </div>

        {/* Center H1 Message */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "950px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            I build marketing systems that drive growth.
          </div>
          <div
            style={{
              color: "#8c94a0",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            Performance Marketing • n8n Workflow Automation • Applied AI Architecture
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #22272e",
            paddingTop: "24px",
          }}
        >
          <div style={{ color: "#5a626e", fontSize: "16px", fontFamily: "monospace" }}>
            withjirjis.com • Calicut, Kerala
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#d4f933",
              fontSize: "16px",
              fontFamily: "monospace",
            }}
          >
            <span>Available for Select Projects ↗</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
