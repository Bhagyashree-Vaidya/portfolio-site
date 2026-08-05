import dynamic from "next/dynamic";
import Identity from "@/components/Identity";
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
      <div className="grid w-full">
        {/* Sticky layer for the tree */}
        <div className="col-start-1 row-start-1 w-full h-full pointer-events-none z-0">
          <div className="sticky top-0 w-full h-screen overflow-visible">
            <TreeStory />
          </div>
        </div>

        {/* Content layer */}
        <div className="col-start-1 row-start-1 w-full z-10">
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
