import { ReactNode } from "react";
import { RightSidebar } from "@/components/Sidebars/RightSidebar";
import { LeftMircroSidebar } from "@/components/Sidebars/leftMicroSidebar";

interface FullSidebarLayoutProps {
  children: ReactNode;
}

export default function MicroSidebarLayout({ children }: FullSidebarLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen">
        <LeftMircroSidebar />
        <main className="flex-1">{children}</main>
        <RightSidebar />
      </div>
    </>
  );
}
