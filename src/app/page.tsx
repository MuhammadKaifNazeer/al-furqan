import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Play,
  Search,
} from "lucide-react"
import { ThemeToggler } from "@/components/ThemeToggler/ThemeToggler"
import Link from "next/link"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { ListenSection } from "@/components/ListenSection/ListenSection"
import FullSidebarLayout from "@/layouts/fullSidbarLayout"

const surahs = ["Al Mulk", "Yaseen", "Ayatul Kursi", "Al Kahf", "Al Waqi'ah"]

const recentLessons = [
  {
    title: "Salah Lessons",
    instructor: "Abu Bakkar",
    stats: { views: "25K", likes: "12K" },
  },
  {
    title: "Quran Lessons",
    instructor: "Imam Qamriah",
    stats: { views: "1.5K", likes: "24" },
  },
]

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


const quranSections = [
  {
    number: "1",
    title: "Al-Fatiha",
    subtitle: "The Opener",
    ayahs: "7 Ayah",
  },
  {
    number: "2",
    title: "Al-Baqarah",
    subtitle: "The Cow",
    ayahs: "286 Ayah",
  },
  {
    number: "3",
    title: "Ali 'Imran",
    subtitle: "Family of Imran",
    ayahs: "200 Ayah",
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
                    Al Quran Daily Recitation
                  </h2>
                  <p className="text-green-200">
                    Inspiring to be a muslim. A Service for
                    <br />
                    Ummah of Mumhammad(PBUH)
                  </p>
                  <Link href={'/#startlearning'}>
                    <Button className="mt-4 bg-white hover:bg-white/90 text-primary">
                      Start Learning
                    </Button>
                  </Link>
                </div>
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Quran Reciters"
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>

            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex w-max space-x-4 py-4">
                {surahs.map((surah, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className="rounded-full"
                  >
                    {surah}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {/* learning methods */}
            <div className="pb-4" id="startlearning">
              <div className="mb-4 flex items-center justify-start">
                <h2 className="text-xl font-semibold">Start Learning</h2>
              </div>
              <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                {LearningMethods.map((method, index) => (
                  <Link key={index} href={method.href}>
                    <div className="flex items-center justify-between rounded-[--radius] border p-4 hover:bg-muted/50">
                      <div className="space-y-3">
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* listen quran */}
            <ListenSection />


            {/* read quran */}
            <div className="py-4">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Read Quran</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Surah</Button>
                  <Button variant="outline" size="sm">Juz</Button>
                </div>
              </div>
              <div className="space-y-4">
                {quranSections.map((section, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-muted/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-semibold text-primary">
                        {section.number}
                      </div>
                      <div>
                        <h3 className="font-semibold">{section.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">
                        {section.ayahs}
                      </span>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
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

