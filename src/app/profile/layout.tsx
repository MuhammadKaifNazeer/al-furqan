import { Metadata } from "next";

interface LayoutProps {
    children: React.ReactNode;
  }
  
export const metadata: Metadata = {
    title: "Profile - Al Furqan",
    description: "Manage your profile and account settings on Al Furqan.",   
  };
  

export default function SurahLayout({
  children,
}: LayoutProps) {
  return <main>{children}</main>;
}
