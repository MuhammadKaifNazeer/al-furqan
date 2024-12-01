import { ReactNode } from "react";
import { RightSidebar } from "@/components/Sidebars/RightSidebar";
import { LeftMircroSidebar } from "@/components/Sidebars/leftMicroSidebar";
import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

interface FullSidebarLayoutProps {
  children: ReactNode;
}

export default function MicroSidebarLayout({ children }: FullSidebarLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen">
        <LeftMircroSidebar />
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
