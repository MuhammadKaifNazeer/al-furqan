import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "./authProvider";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al-Noor -  Online Quran Learning Platform",
  description:
    "Al Noor is an online Quran learning platform where you can read the Quran with translations. Access the Quran anywhere, anytime.",
  applicationName: "Al Noor",
  authors: [{ name: "Muhammad Kaif Nazeer" }],
  keywords: [
    "Al Noor",
    "Quran",
    "Holy Quran",
    "Islam",
    "Quran Translation",
    "Quran Recitation",
    "Tafsir",
    "Islamic Text",
    "The Criterion",
    "Online Quran",
    "Read Quran",
    "Quran Tafsir",
    "Learn Quran",
    "Quran Learning Platform",
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Al-Noor -  Online Quran Learning Platform",
    description:
      "Al Noor is an online Quran learning platform where you can read the Quran with translations. Access the Quran anywhere, anytime.",
    url: "https://noor.musayyabshah.com",
    siteName: "Al Noor",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Al-Noor -  Online Quran Learning Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://noor.musayyabshah.com",
    languages: {
      en: "https://noor.musayyabshah.com",
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
            <AuthProvider>
              <Analytics />
              {children}
            </AuthProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
