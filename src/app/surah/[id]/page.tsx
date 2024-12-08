import MicroSidebarLayout from '@/layouts/microSidebarLayout';
import { Separator } from "@/components/ui/separator";
import { fetchSurahVerses, fetchSurahs } from "@/utils/api";
import { Card, CardContent } from "@/components/ui/card";
import { Verse } from "@/types/quran";
import Link from 'next/link';

const TRANSLATION_NAMES: { [key: number]: string } = {
    131: "Dr. Mustafa Khattab",
    97: "Tafheem e Qur'an - Syed Abu Ali Maududi"
};

export default async function SurahPage({ params }: { params: { id: string } }) {
    const surahId = parseInt(params.id);
    const [surah, verses, surahs] = await Promise.all([
        fetchSurahs().then(surahs => surahs.find(s => s.id === surahId)),
        fetchSurahVerses(surahId),
        fetchSurahs()
    ]);

    if (!surah) return <div>Surah not found</div>;

    const previousSurah = surahs.find(s => s.id === surahId - 1);
    const nextSurah = surahs.find(s => s.id === surahId + 1);

    return (
        <MicroSidebarLayout>
            <div className="container py-6">
                <div className="mb-6 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl font-bold">{surah.name_simple}</h1>
                    <p className="text-muted-foreground text-lg">
                        {surah.translated_name.name} • {surah.verses_count} Verses
                    </p>
                </div>
                <div className="space-y-4">
                    {verses.map((verse: Verse) => (
                        <Card key={verse.id} className="hover:bg-muted/50 transition-colors">
                            <CardContent className="p-4">
                                <div className="flex justify-between gap-4 mb-4">
                                    <div className="w-max text-muted-foreground">
                                        {verse.verse_key}
                                    </div>
                                    <div className="text-3xl font-arabic leading-loose text-right">
                                        {verse.text_uthmani}
                                    </div>
                                </div>
                                <Separator className="my-4" />
                                <div>
                                    {verse.translations.map((translation) => (
                                        <div key={translation.id} className={`${translation.id === 97 ? 'text-right' : ''}`}>
                                            <h2 className={translation.id === 97 ? 'font-urdu text-xl mb-2' : ''}>
                                                {translation.text}
                                            </h2>
                                            <p className="text-sm mb-2 text-muted-foreground">{TRANSLATION_NAMES[translation.id]}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="grid grid-cols-2 mt-4 gap-2">
                    {previousSurah ? (
                        <Link href={`/surah/${previousSurah.id}`}>
                            <Card className="flex w-full flex-col gap-2 p-4 text-sm transition-colors hover:bg-accent/80 hover:text-accent-foreground">
                                <div className="inline-flex items-center gap-0.5 text-muted-foreground">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-left -ms-1 size-4 shrink-0 rtl:rotate-180"
                                    >
                                        <path d="m15 18-6-6 6-6"></path>
                                    </svg>
                                    <p>Previous</p>
                                </div>
                                <p className="font-medium">{previousSurah.name_simple}</p>
                            </Card>
                        </Link>
                    ) : (
                        <div />
                    )}
                    {nextSurah ? (
                        <Link href={`/surah/${nextSurah.id}`}>
                            <Card className="flex w-full flex-col gap-2 p-4 text-sm transition-colors hover:bg-accent/80 hover:text-accent-foreground text-end">
                                <div className="inline-flex items-center gap-0.5 text-muted-foreground flex-row-reverse">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-chevron-right -me-1 size-4 shrink-0 rtl:rotate-180"
                                    >
                                        <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <p>Next</p>
                                </div>
                                <p className="font-medium">{nextSurah.name_simple}</p>
                            </Card>
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </div>
        </MicroSidebarLayout>
    );
}
