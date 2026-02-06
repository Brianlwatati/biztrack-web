import OverviewTiles from "@/features/dashboard/overviewtiles";
import Readmore from "@/features/dashboard/readmore";
import SuccessStory from "@/features/dashboard/successtory";

export default function DashboardPage() {
  return (
    <div>
      <OverviewTiles />
      <div className="flex gap-8">
        <Readmore />
        <SuccessStory />
      </div>
    </div>
  );
}
