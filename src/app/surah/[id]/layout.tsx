import { fetchSurahs } from "@/utils/api";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: { id: string };
}

// Fetch metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const surahId = parseInt(params.id, 10);
  const surah = await fetchSurahs().then((surahs) =>
    surahs.find((s) => s.id === surahId)
  );

  const surahName = surah ? surah.name_simple : "Surah Not Found";

  return {
    title: `${surahName} - Quran Explorer`,
    description: surah
      ? `Explore the Surah ${surahName}, which contains ${surah.verses_count} verses.`
      : "Explore the Quran with detailed Surah information.",
    openGraph: {
      title: `${surahName} - Quran Explorer`,
      description: surah
        ? `Discover the Surah ${surahName} from the Quran with ${surah.verses_count} verses.`
        : "Explore the Quran with detailed Surah information.",
      url: `/surah/${surahId}`,
    },
  };   
}

// Layout component
export default function SurahLayout({
  children,
}: LayoutProps) {
  return <main>{children}</main>;
}
