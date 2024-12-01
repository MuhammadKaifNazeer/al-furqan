import { ReactNode } from "react";
import { LeftSidebar } from "@/components/Sidebars/LeftSidebar";
import { RightSidebar } from "@/components/Sidebars/RightSidebar";
import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

interface FullSidebarLayoutProps {
  children: ReactNode;
}

export default function FullSidebarLayout({ children }: FullSidebarLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen">
        <LeftSidebar />
        <main className="flex-1">
          <Navbar />
          <div className="max-md:pt-12">
            {children}
          </div>
        </main>
        <RightSidebar />
      </div>
      <Footer />
    </>
  );
}
