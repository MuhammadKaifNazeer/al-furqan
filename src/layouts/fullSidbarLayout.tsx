import { ReactNode } from "react";
import { LeftSidebar } from "@/components/Sidebars/LeftSidebar";
import { RightSidebar } from "@/components/Sidebars/RightSidebar";

interface FullSidebarLayoutProps {
  children: ReactNode;
}

export default function FullSidebarLayout({ children }: FullSidebarLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen">
        <LeftSidebar />
        <main className="flex-1">{children}</main>
        <RightSidebar />
      </div>
    </>
  );
}
