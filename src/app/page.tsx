import Identity from "@/components/Identity";
import Education from "@/components/Education";
import Philosophy from "@/components/Philosophy";
import FeaturedProductStories from "@/components/FeaturedProductStories";
import CareerTimeline from "@/components/CareerTimeline";
import Evidence from "@/components/Evidence";
import SelectedAchievements from "@/components/SelectedAchievements";
import TreeStory from "@/components/TreeStory";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <TreeStory />
      <Identity />
      <Resume />
      <FeaturedProductStories />
      <Education />
      <CareerTimeline />
      <Evidence />
      <SelectedAchievements />
    </main>
  );
}
