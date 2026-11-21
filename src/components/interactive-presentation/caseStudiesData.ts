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
    name: "Zomato teardown",
    logo: "🍔",
    accentColor: "#E23744", // Red
    slides: [
      { id: "slide-1", title: "Zomato app notifications teardown, slide 1", imageSrc: "/images/case-studies/pdf2/slide-1.jpg" },
      { id: "slide-2", title: "Zomato app notifications teardown, slide 2", imageSrc: "/images/case-studies/pdf2/slide-2.jpg" },
      { id: "slide-3", title: "Zomato app notifications teardown, slide 3", imageSrc: "/images/case-studies/pdf2/slide-3.jpg" },
      { id: "slide-4", title: "Zomato app notifications teardown, slide 4", imageSrc: "/images/case-studies/pdf2/slide-4.jpg" },
      { id: "slide-5", title: "Zomato app notifications teardown, slide 5", imageSrc: "/images/case-studies/pdf2/slide-5.jpg" },
      { id: "slide-6", title: "Zomato app notifications teardown, slide 6", imageSrc: "/images/case-studies/pdf2/slide-6.jpg" },
      { id: "slide-7", title: "Zomato app notifications teardown, slide 7", imageSrc: "/images/case-studies/pdf2/slide-7.jpg" },
    ]
  },
  {
    id: "rufus",
    name: "Rufus teardown",
    logo: "💬",
    accentColor: "#F29B05",
    slides: [
      { id: "slide-1", title: "Amazon Rufus AI shopping assistant teardown, slide 1", imageSrc: "/images/case-studies/rufus/slide-1.jpg" },
      { id: "slide-2", title: "Amazon Rufus AI shopping assistant teardown, slide 2", imageSrc: "/images/case-studies/rufus/slide-2.jpg" },
      { id: "slide-3", title: "Amazon Rufus AI shopping assistant teardown, slide 3", imageSrc: "/images/case-studies/rufus/slide-3.jpg" },
      { id: "slide-4", title: "Amazon Rufus AI shopping assistant teardown, slide 4", imageSrc: "/images/case-studies/rufus/slide-4.jpg" },
      { id: "slide-5", title: "Amazon Rufus AI shopping assistant teardown, slide 5", imageSrc: "/images/case-studies/rufus/slide-5.jpg" },
      { id: "slide-6", title: "Amazon Rufus AI shopping assistant teardown, slide 6", imageSrc: "/images/case-studies/rufus/slide-6.jpg" },
      { id: "slide-7", title: "Amazon Rufus AI shopping assistant teardown, slide 7", imageSrc: "/images/case-studies/rufus/slide-7.jpg" },
    ]
  }
];
