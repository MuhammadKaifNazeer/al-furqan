import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "./authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Furqan",
  description:
    "",
  applicationName: "AL Quran",
  authors: [{ name: "Muhammad Kaif Nazeer" }],
  keywords: [
    "Quran",
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
    title: "",
    description:
      "",
    url: "https://www.al-quran.vercel.app",
    siteName: "AL Quran",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  alternates: {
    canonical: "https://www.al-quran.vercel.app",
    languages: {
      en: "https://www.al-quran.vercel.app",
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
