import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { ListenSection } from "@/components/ListenSection/ListenSection"
import FullSidebarLayout from "@/layouts/fullSidbarLayout"
import { BookOpen } from "lucide-react"

const surahs = [
  { id: 67, name: "Al Mulk", href: "/surah/67" },
  { id: 36, name: "Yaseen", href: "/surah/36" },
  { id: 1, name: "Al-Fatihah", href: "/surah/1" },
  { id: 18, name: "Al Kahf", href: "/surah/18" },
  { id: 56, name: "Al Waqi'ah", href: "/surah/56" },
];

const LearningMethods = [
  {
    title: "Read Quran",
    description: "Explore the Quran with translations for better understanding.",
    href: "/read",
  },
  {
    title: "Listen Quran",
    description: "Immerse yourself in the melodious recitation of the Quran by renowned reciters.",
    href: "/listen",
  },
]


const quranSurah = [
  {
    number: "1",
    title: "Al-Fatiha",
    subtitle: "The Opener",
    ayahs: "7 Ayah",
    href: "/surah/1"
  },
  {
    number: "2",
    title: "Al-Baqarah",
    subtitle: "The Cow",
    ayahs: "286 Ayah",
    href: "/surah/2"
  },
  {
    number: "3",
    title: "Ali 'Imran",
    subtitle: "Family of Imran",
    ayahs: "200 Ayah",
    href: "/surah/3"
  },
]

export default function Home() {
  return (
    <FullSidebarLayout>
      <div className="flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6 p-6">
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">
                    Read the Quran Anywhere,<br className="hidden md:block" /> Anytime
                  </h2>
                  <p className="text-green-200">
                    Inspiring to be a muslim. A Service for
                    <br />
                    Ummah of Mumhammad(PBUH)
                  </p>
                  <Link href={'/read'}>
                    <Button className="mt-4 bg-white hover:bg-white/90 text-primary">
                      Start Learning
                    </Button>
                  </Link>
                </div>
                {/* <Image
                  src=""
                  alt="Quran"  
                  width={160}
                  height={160}
                  className="rounded-lg"
                /> */}
                <div className="hidden md:flex h-full aspect-square items-center justify-center text-primary-foreground">
                  <BookOpen className="size-40" />
                </div>
              </CardContent>
            </Card>

            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex w-max space-x-4 py-4">
                {surahs.map((surah, index) => (
                  <Link href={surah.href} key={index}>
                    <Button
                      variant={index === 0 ? "default" : "outline"}
                      className="rounded-full"
                    >
                      {surah.name}
                    </Button>
                  </Link>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="py-4" id='startlearning'>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Start Learning</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Surahs</Button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {quranSurah.map((surah, index) => (
                  <Link href={surah.href} key={index}>
                    <div className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/50" >
                      <div className="flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-semibold text-primary">
                          {surah.number}
                        </div>
                        <div>
                          <h3 className="font-semibold">{surah.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {surah.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-muted-foreground">
                          {surah.ayahs}
                        </span>
                        <Button variant="ghost" size="icon">
                          <ArrowTopRightIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="w-full flex items-center justify-center">
                <Link href="/read">
                  <Button variant={'outline'} size={'lg'} className="my-4">Show More</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </FullSidebarLayout>
  )
}

