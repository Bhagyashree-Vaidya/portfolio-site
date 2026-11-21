import { ImageResponse } from "next/og";

export const alt = "Shree Vaidya, Senior Product Manager, AI and Search, Seattle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #FFF1EA 0%, #FFDCE5 100%)",
          color: "#2A1A20",
        }}
      >
        <div style={{ fontSize: 34, color: "#9C2F55", letterSpacing: 4, textTransform: "uppercase" }}>
          shreevaidya.com
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24 }}>Shree Vaidya</div>
        <div style={{ fontSize: 44, marginTop: 16 }}>Senior Product Manager · AI agents, search & personalization</div>
        <div style={{ fontSize: 32, marginTop: 32, color: "#5A4048" }}>Seattle, WA · UW M.S. Information Management · PMP</div>
      </div>
    ),
    size,
  );
}
