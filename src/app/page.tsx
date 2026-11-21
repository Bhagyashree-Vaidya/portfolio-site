import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Identity from "@/components/Identity";
import { jsonLdString, siteJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};
import Resume from "@/components/Resume";
import TreeStory from "@/components/TreeStory";

const FeaturedProductStories = dynamic(() => import("@/components/FeaturedProductStories"), { ssr: true });
const Education = dynamic(() => import("@/components/Education"), { ssr: true });
const CareerTimeline = dynamic(() => import("@/components/CareerTimeline"), { ssr: true });
const InteractiveCaseStudies = dynamic(() => import("@/components/interactive-presentation/InteractiveCaseStudies"), { ssr: true });
const Evidence = dynamic(() => import("@/components/Evidence"), { ssr: true });
const SelectedAchievements = dynamic(() => import("@/components/SelectedAchievements"), { ssr: true });
const ContactFooter = dynamic(() => import("@/components/ContactFooter"), { ssr: true });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(siteJsonLd()) }}
      />
      <div className="grid w-full grid-cols-[minmax(0,1fr)]">
        {/* Sticky layer for the tree */}
        <div className="col-start-1 row-start-1 w-full h-full pointer-events-none z-0">
          <div className="sticky top-0 w-full h-screen overflow-visible">
            <TreeStory />
          </div>
        </div>

        {/* Content layer */}
        <div className="col-start-1 row-start-1 w-full min-w-0 z-10">
          <Identity />
          <Resume />
          <FeaturedProductStories />
          <Education />
          <CareerTimeline />
          <InteractiveCaseStudies />
          <Evidence />
          <SelectedAchievements />
        </div>
      </div>
      <ContactFooter />
    </main>
  );
}
