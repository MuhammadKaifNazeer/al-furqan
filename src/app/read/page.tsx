import MicroSidebarLayout from '@/layouts/microSidebarLayout'
import React from 'react'
import { fetchSurahs } from "@/utils/api"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Read Quran - Explore Surahs",
    description: "Browse and explore all the Surahs of the Quran with their details and translations.",
    openGraph: {
      title: "Read Quran - Explore Surahs",
      description: "Discover and explore all Surahs of the Quran with detailed information, translations, and verse counts.",
      url: "/read",
    },
  };
  
const ReadPage = async () => {
    const surahs = await fetchSurahs()

    return (
        <MicroSidebarLayout>
            <div className="container py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {surahs.map((surah) => (
                        <Link key={surah.id} href={`/surah/${surah.id}`}>
                            <Card className="hover:bg-muted/50 transition-colors">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border">
                                                {surah.id}
                                            </div>
                                            <div>
                                                <CardTitle className='mb-[0.2rem]'>{surah.name_simple}</CardTitle>
                                                <CardDescription>
                                                    {surah.translated_name.name} • {surah.verses_count} Verses
                                                </CardDescription>
                                            </div>
                                        </div>
                                        <div className="text-lg font-arabic">{surah.name_arabic}</div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </MicroSidebarLayout>
    )
}

export default ReadPage