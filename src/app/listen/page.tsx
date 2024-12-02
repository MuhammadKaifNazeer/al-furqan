import MicroSidebarLayout from '@/layouts/microSidebarLayout'
import React from 'react'
import { ListenSection } from "@/components/ListenSection/ListenSection"
import { Metadata } from "next";

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
            <div className='container'>
                <ListenSection />
            </div>
        </MicroSidebarLayout>
    )
}

export default ListenPage