"use client"

import FullSidebarLayout from '@/layouts/fullSidbarLayout';
import ListenQuranData from '@/data/listenQuranData';
import { slugify } from '@/utils/slugify';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ListenSurahPage = () => {
  const { slug, id } = useParams();

  // Find the matched item based on the slug
  const matchedRecitation = ListenQuranData.find(
    (item) => slugify(item.title) === slug
  );

  if (!matchedRecitation) {
    return (
      <FullSidebarLayout>
        <div className="p-4 container">
          <div className="p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center">404 - Not Found</h1>
            <p className="mt-2 text-muted-foreground text-center">
              The recitation you are looking for could not be found.
            </p>
            <Link href="/listen">
              <Button className="mt-6">Go to All Recitations</Button>
            </Link>
          </div>
        </div>
      </FullSidebarLayout>
    );
  }

  const currentSurahIndex = matchedRecitation.videos.findIndex(
    (surah) => surah.surahNumber === Number(id)
  );

  if (currentSurahIndex === -1) {
    return (
      <FullSidebarLayout>
        <div className="p-4 container">
          <div className="p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center">404 - Surah Not Found</h1>
            <p className="mt-2 text-muted-foreground text-center">
              The Surah you are looking for does not exist.
            </p>
            <Link href={`/listen/${slug}`}>
              <Button className="mt-6">Go Back to Recitation</Button>
            </Link>
          </div>
        </div>
      </FullSidebarLayout>
    );
  }

  const currentSurah = matchedRecitation.videos[currentSurahIndex];
  const previousSurah = matchedRecitation.videos[currentSurahIndex - 1];
  const nextSurah = matchedRecitation.videos[currentSurahIndex + 1];

  return (
    <FullSidebarLayout>
      <div className="container min-h-screen">
        <div className="mt-10">
          <div className="w-full">
            <div className="w-full">
              <iframe
                src={currentSurah.videoLink.replace('watch?v=', 'embed/')}
                title={currentSurah.surahName}
                allowFullScreen
                className="w-full h-full rounded-md w-full aspect-video"
              />
            </div>
            <h1 className={`text-3xl text-start font-bold mb-2 mt-6 leading-tight tracking-wide`}>
              {currentSurah.surahName}
            </h1>
            <p className=" text-muted-foreground">
              {currentSurah.surahNameMeaningInEnglish} - {currentSurah.ayah} Ayah
            </p>
          </div>
          <div className="flex justify-between items-center mt-6">
            {previousSurah ? (
              <Link
                href={`/${slugify(matchedRecitation.title)}/surah/${previousSurah.surahNumber}`}
              >
                <Button variant="outline">
                  ← {previousSurah.surahName}
                </Button>
              </Link>
            ) : (
              <div />
            )}
            {nextSurah ? (
              <Link
                href={`/${slugify(matchedRecitation.title)}/surah/${nextSurah.surahNumber}`}
              >
                <Button variant="outline">
                  {nextSurah.surahName} →
                </Button>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </FullSidebarLayout>
  );
};

export default ListenSurahPage;
