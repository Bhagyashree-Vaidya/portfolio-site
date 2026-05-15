import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhagyashree Vaidya | AI-Enabled Product Manager",
  description:
    "AI-enabled product manager with 6+ years building ML systems, scaling infrastructure, and driving $10M+ revenue growth. Expert in product strategy, AI/ML, and technical execution.",
  metadataBase: new URL("https://bhagyashree-portfolio.vercel.app"),
  openGraph: {
    title: "Bhagyashree Vaidya | AI-Enabled Product Manager",
    description:
      "AI-enabled product manager specializing in ML systems, infrastructure scaling, and product strategy.",
    url: "https://bhagyashree-portfolio.vercel.app",
    siteName: "Bhagyashree Vaidya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhagyashree Vaidya | AI-Enabled Product Manager",
    description:
      "AI-enabled product manager with expertise in ML systems and product strategy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-bg text-gray-100">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
