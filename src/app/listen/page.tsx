import MicroSidebarLayout from '@/layouts/microSidebarLayout'
import React from 'react'
import { ListenSection } from "@/components/ListenSection/ListenSection"
import { Metadata } from "next";
import { slugify } from '@/utils/slugify';
import ListenQuranData from '@/data/listenQuranData';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

export const metadata: Metadata = {
    title: "Listen to Quran - Immerse Yourself in the Divine Recitation",
    description:
        "Explore the beauty of Quranic recitation. Listen to your favorite surahs and immerse yourself in the spiritual experience.",
    openGraph: {
        title: "Listen to Quran - Immerse Yourself in the Divine Recitation",
        description:
            "Discover and listen to the divine recitation of the Quran. Access your favorite surahs and enhance your spiritual journey.",
        url: "/listen",
    },
};

const ListenPage = async () => {

    return (
        <MicroSidebarLayout>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-4 py-6'>
                {ListenQuranData.map((item, index) => (
                    <Link key={index} href={`/${slugify(item.title)}`}>
                        <Card className="border-none group">
                            <CardContent className="p-0">
                                <div className="relative flex flex-col items-center justify-center aspect-video bg-accent rounded-sm overflow-hidden">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width={4000}
                                        height={2000}
                                        className="object-cover h-full w-full transition duration-200 group-hover:scale-[1.02]"
                                    />
                                </div>
                                <div className="px-1 py-3">
                                    <div className=" flex items-center justify-between">
                                        <h3 className="font-semibold line-clamp-1 capitalize">{item.title}</h3>
                                        <ArrowTopRightIcon className="size-4" />
                                    </div>
                                    <p className="mt-1 text-sm text-muted-foreground capitalize">
                                        {item.reciter}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </MicroSidebarLayout>
    )
}

export default ListenPage