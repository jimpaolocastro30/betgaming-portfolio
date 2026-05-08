import Navbar from "@/components/Navbar";
import LeftSidebar from "@/components/LeftSidebar";
import HeroBanner from "@/components/HeroBanner";
import QuickLinks from "@/components/QuickLinks";
import MatchCodeInput from "@/components/MatchCodeInput";
import GameCategories from "@/components/GameCategories";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-4">
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Left Sidebar - hidden on mobile, shown on xl */}
          <div className="hidden xl:block">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-4">
            <HeroBanner />
            <QuickLinks />
            <MatchCodeInput />
            <GameCategories />
          </div>

          {/* Right Sidebar - stacks below on mobile */}
          <div className="xl:block">
            <RightSidebar />
          </div>
        </div>

        {/* Left Sidebar content on mobile (below main) */}
        <div className="xl:hidden mt-4">
          <LeftSidebar />
        </div>
      </main>
    </div>
  );
}
