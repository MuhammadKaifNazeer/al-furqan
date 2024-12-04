"use client"

import { useParams } from 'next/navigation';
import FullSidebarLayout from '@/layouts/fullSidbarLayout'
import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ListenQuranData from '@/data/listenQuranData';
import { slugify } from '@/utils/slugify';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const ListenQuran = () => {
    const { slug } = useParams();

    const matchedItem = ListenQuranData.find((item) => slugify(item.title) === slug);

    if (!matchedItem) {
        return (
            <FullSidebarLayout>
                <div className="p-4 container">
                    <div className="p-4 flex flex-col items-center">
                        <h1 className="text-2xl font-bold text-center">404 - Not Found</h1>
                        <p className="mt-2 text-muted-foreground text-center">
                            The Quran recitation you are looking for could not be found or has been removed.
                        </p>
                        <Link href="/listen">
                            <Button className="mt-6">
                                Go to All Recitations
                            </Button>
                        </Link>
                    </div>
                </div>
            </FullSidebarLayout>
        );
    }
    return (
        <FullSidebarLayout>
            <div className="min-h-screen container">
                <div className="mt-10">
                    <div className="items-start flex">
                        <div>
                            <div>
                                <Image
                                    src={matchedItem.thumbnail}
                                    width={4000}
                                    height={2000}   
                                    alt={matchedItem.title}
                                    className='aspect-video rounded-[--radius]'
                                />
                            </div>
                            <h1 className={`text-3xl text-start font-bold mb-2 mt-6 leading-tight tracking-wide`}>
                                {matchedItem.title}
                            </h1>
                            <p className=" text-muted-foreground">
                                <span className='font-bold'>Reciter:</span> {matchedItem.reciter}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-20 mt-8">
                    <div className="grid grid-cols-1  gap-4">
                        {matchedItem.videos.map((surah, index) => (
                            <Link key={index} href={`/${slugify(matchedItem.title)}/surah/${surah.surahNumber}`}>
                                <div className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/50" >
                                    <div className="flex items-center space-x-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-semibold text-primary">
                                            {surah.surahNumber}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{surah.surahName}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {surah.surahNameMeaningInEnglish}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm text-muted-foreground">
                                            {surah.ayah} Ayah
                                        </span>
                                        <Button variant="ghost" size="icon">
                                            <ArrowTopRightIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </FullSidebarLayout>
    )
}

export default ListenQuran

