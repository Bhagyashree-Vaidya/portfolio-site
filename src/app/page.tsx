import Identity from "@/components/Identity";
import Education from "@/components/Education";
import Philosophy from "@/components/Philosophy";
import FeaturedProductStories from "@/components/FeaturedProductStories";
import CareerTimeline from "@/components/CareerTimeline";
import Evidence from "@/components/Evidence";
import SelectedAchievements from "@/components/SelectedAchievements";
import TreeStory from "@/components/TreeStory";
import Resume from "@/components/Resume";
import ContactFooter from "@/components/ContactFooter";

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
          <Evidence />
          <SelectedAchievements />
        </div>
      </div>
      <ContactFooter />
    </main>
  );
}
