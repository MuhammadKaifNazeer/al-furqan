import {
  BookOpen,
  ExternalLink,
  HandCoins,
  Home,
  Mic,
  CodeXml,
  Settings,
  User,
} from "lucide-react";

interface NavLink {
  icon: React.ElementType;
  label: string;
  href: string;
  external?: boolean;
}

interface NavigationLinksType {
  mainNav: NavLink[];
  secondaryNav: NavLink[];
}

const NavigationLinks: NavigationLinksType = {
  mainNav: [
    {
      icon: Home,
      label: "Overview",
      href: "/",
    },
    {
      icon: BookOpen,
      label: "Read Quran",
      href: "/read",
    },
    {
      icon: User,
      label: "Profile",
      href: "/profile",
    },
    {
      icon: HandCoins,
      label: "Support",
      href: "https://buymeacoffe.com/muhammadkaifnazeer",
      external: true,
    },
    {
      icon: CodeXml,
      label: "Developers",
      href: "https://github.com/MuhammadKaifNazeer/al-quran",
      external: true,
    },
  ],
  secondaryNav: [
    {
      icon: ExternalLink,
      label: "Quran.com",
      href: "https://quran.com",
      external: true,
    },
    {
      icon: ExternalLink,
      label: "Sunnah.com",   
      href: "https://sunnah.com",
      external: true,
    },
  ],
};

export default NavigationLinks;
