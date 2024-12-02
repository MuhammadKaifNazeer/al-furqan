import MicroSidebarLayout from '@/layouts/microSidebarLayout';
import { Separator } from "@/components/ui/separator"
import { fetchSurahVerses, fetchSurahs } from "@/utils/api";
import { Card, CardContent } from "@/components/ui/card";
import { Verse } from "@/types/quran";

const TRANSLATION_NAMES: { [key: number]: string } = {
    131: "Dr. Mustafa Khattab",
    97: "Tafheem e Qur'an - Syed Abu Ali Maududi"
};

export default async function SurahPage({ params }: { params: { id: string } }) {
    const [surah, verses] = await Promise.all([
        fetchSurahs().then(surahs => surahs.find(s => s.id === parseInt(params.id))),
        fetchSurahVerses(parseInt(params.id))
    ])

    if (!surah) return <div>Surah not found</div>

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
                                <Separator className='my-4'/>
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
            </div>
        </MicroSidebarLayout>
    );
}
