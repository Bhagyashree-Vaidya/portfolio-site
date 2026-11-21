import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy URL still indexed by Google; the case study now lives on the homepage.
      {
        source: "/case-studies/vwo-conversion-optimization",
        destination: "/#case-studies",
        permanent: true,
      },
      // The Vercel production alias serves a duplicate copy of the site.
      {
        source: "/:path*",
        has: [{ type: "host", value: "portfolio-site-mu-swart.vercel.app" }],
        destination: "https://www.shreevaidya.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" }
        ],
      },
    ];
  },
};

export default nextConfig;
