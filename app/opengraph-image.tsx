import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Danish Shahzad — Agentic AI Engineer & Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "72px", color: "white", background: "linear-gradient(135deg, #111827 0%, #581c87 55%, #1e3a8a 100%)" }}>
      <div style={{ display: "flex", fontSize: 32, color: "#d8b4fe", marginBottom: 24 }}>Danish Shahzad</div>
      <div style={{ display: "flex", fontSize: 66, fontWeight: 800, lineHeight: 1.08 }}>Agentic AI Engineer &amp; Data Scientist</div>
      <div style={{ display: "flex", fontSize: 28, color: "#d1d5db", marginTop: 30 }}>RAG systems · AI agents · Machine learning · Analytics</div>
      <div style={{ display: "flex", fontSize: 22, color: "#c4b5fd", marginTop: 48 }}>danishshahzadai.com</div>
    </div>,
    size,
  );
}
