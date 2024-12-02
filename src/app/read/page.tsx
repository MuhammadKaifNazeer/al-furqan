import MicroSidebarLayout from '@/layouts/microSidebarLayout'
import React from 'react'
import { fetchSurahs } from "@/utils/api"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

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
                                                <CardTitle>{surah.name_simple}</CardTitle>
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