import type { Metadata } from "next";
import { Geist, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";

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
  title: "Bhagyashree Vaidya | Portfolio",
  description: "Product Manager crafting impactful, data-driven products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${ibmPlexMono.variable} h-full antialiased font-sans text-text-primary bg-bg-primary`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden selection:bg-accent-secondary/30 selection:text-accent-secondary">
        <Cursor />
        <Navigation />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
