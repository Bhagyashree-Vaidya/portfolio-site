import { ReactNode } from "react";

export type Slide = {
  id: string;
  title: string;
  imageSrc?: string;
  context?: {
    heading: string;
    description: string;
  };
  metrics?: { label: string; value: string }[];
  cta?: { label: string; url: string; type: "primary" | "secondary" }[];
};

export type CaseStudy = {
  id: string;
  name: string;
  logo: ReactNode;
  accentColor: string;
  slides: Slide[];
};

export const caseStudiesData: CaseStudy[] = [
  {
    id: "zomato",
    name: "Zomato",
    logo: "🍔",
    accentColor: "#E23744", // Red
    slides: [
      { id: "slide-1", title: "Slide 1", imageSrc: "/images/case-studies/pdf2/slide-1.jpg" },
      { id: "slide-2", title: "Slide 2", imageSrc: "/images/case-studies/pdf2/slide-2.jpg" },
      { id: "slide-3", title: "Slide 3", imageSrc: "/images/case-studies/pdf2/slide-3.jpg" },
      { id: "slide-4", title: "Slide 4", imageSrc: "/images/case-studies/pdf2/slide-4.jpg" },
      { id: "slide-5", title: "Slide 5", imageSrc: "/images/case-studies/pdf2/slide-5.jpg" },
      { id: "slide-6", title: "Slide 6", imageSrc: "/images/case-studies/pdf2/slide-6.jpg" },
      { id: "slide-7", title: "Slide 7", imageSrc: "/images/case-studies/pdf2/slide-7.jpg" },
    ]
  },
  {
    id: "amazon",
    name: "Amazon",
    logo: "📦",
    accentColor: "#D69E2E", // Orange/Yellow
    slides: [
      { id: "slide-1", title: "Slide 1", imageSrc: "/images/case-studies/pdf3/slide-1.jpg" },
      { id: "slide-2", title: "Slide 2", imageSrc: "/images/case-studies/pdf3/slide-2.jpg" },
      { id: "slide-3", title: "Slide 3", imageSrc: "/images/case-studies/pdf3/slide-3.jpg" },
    ]
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "🎵",
    accentColor: "#1DB954", // Green
    slides: [
      {
        id: "overview",
        title: "Overview",
        imageSrc: "https://placehold.co/1200x800/C6F6D5/38A169?text=Spotify+Overview",
      }
    ]
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "🏠",
    accentColor: "#FF5A5F", // Airbnb Red
    slides: [
      {
        id: "overview",
        title: "Overview",
        imageSrc: "https://placehold.co/1200x800/FED7D7/E53E3E?text=Airbnb+Overview",
      }
    ]
  },
  {
    id: "netflix",
    name: "Netflix",
    logo: "🎬",
    accentColor: "#E50914", // Netflix Red
    slides: [
      {
        id: "overview",
        title: "Overview",
        imageSrc: "https://placehold.co/1200x800/FED7D7/E53E3E?text=Netflix+Overview",
      }
    ]
  }
];
