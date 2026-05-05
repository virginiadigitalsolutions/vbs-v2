import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #14b8a6 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.88,
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              backgroundColor: "#99f6e4",
            }}
          />
          Virginia Business Solutions
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 70,
              lineHeight: 1.05,
              fontWeight: 800,
              maxWidth: 900,
            }}
          >
            Clear digital career guidance for India.
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 880,
            }}
          >
            Digital skills, courses, certifications, and career paths for students and working professionals.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 24,
            color: "#dbeafe",
          }}
        >
          <div>Digital Skills</div>
          <div>Courses</div>
          <div>Career Guides</div>
        </div>
      </div>
    ),
    size
  );
}
