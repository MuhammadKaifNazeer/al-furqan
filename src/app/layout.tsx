import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "./authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al-Furqan - The Criterion of Truth",
  description:
    "Explore Al-Furqan, the Criterion of Truth. Access translations, recitations, and tafsir of the Quran, the divine guidance for humanity.",
  applicationName: "Al Furqan",
  authors: [{ name: "Muhammad Kaif Nazeer" }],
  keywords: [
    "Al Furqan",
    "Quran",
    "Holy Quran",
    "Islam",
    "Quran Translation",
    "Quran Recitation",
    "Tafsir",
    "Islamic Text",
    "The Criterion",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Al Furqan - The Criterion of Truth",
    description:
      "Discover Al Furqan, the Criterion between right and wrong. Dive into Quranic translations, recitations, and tafsir in an intuitive platform.",
    url: "https://www.alfurqan.vercel.app",
    siteName: "Al Furqan",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Al Furqan - The Criterion of Truth",
      },
    ],
  },
  alternates: {
    canonical: "https://www.alfurqan.vercel.app",
    languages: {
      en: "https://www.alfurqan.vercel.app",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto 2xl:max-w-[90rem]">
            <AuthProvider>{children}</AuthProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
