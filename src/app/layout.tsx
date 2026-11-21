import type { Metadata } from "next";
import { Geist, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";
import { META_DESCRIPTION, PERSON, SITE_URL } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shree Vaidya | Senior Product Manager, AI & Search | Seattle",
    template: "%s | Shree Vaidya",
  },
  description: META_DESCRIPTION,
  applicationName: "Shree Vaidya",
  authors: [{ name: PERSON.displayName, url: SITE_URL }],
  creator: PERSON.displayName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "profile",
    siteName: "Shree Vaidya",
    locale: "en_US",
    url: "/",
    title: "Shree Vaidya | Senior Product Manager, AI & Search",
    description:
      "Seattle Senior Product Manager building AI agents, search and personalization for e-commerce.",
    firstName: "Bhagyashree",
    lastName: "Vaidya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Vaidya | Senior Product Manager, AI & Search",
    description:
      "Seattle Senior Product Manager building AI agents, search and personalization for e-commerce.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geist.variable} ${ibmPlexMono.variable} h-full antialiased font-sans text-text-primary bg-bg-primary`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col overflow-x-hidden selection:bg-accent-secondary/30 selection:text-accent-secondary">
        <Cursor />
        <Navigation />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
