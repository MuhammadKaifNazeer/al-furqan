import { LeftSidebar } from "@/components/LeftSidebar/LeftSidebar";
import { MainContent } from "@/components/HomePageContent/HomePageContent";
import { RightSidebar } from "@/components/RightSidebar/RightSidebar";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen">
        <LeftSidebar />
        <main className="flex-1">
          <MainContent />
        </main>
        <RightSidebar />
      </div>
    </>
  );
}
