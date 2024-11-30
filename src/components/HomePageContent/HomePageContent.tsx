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
import { ThemeToggler } from "../ThemeToggler/ThemeToggler"
import Link from "next/link"

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
  {
    title: "Hadith Lessons",
    instructor: "Imam Ba'shah",
    stats: { views: "9.7K", likes: "68" },
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

export function MainContent() {
  return (
    <div className="flex flex-col max-md:mt-12">
      <div className="sticky top-0 z-10 bg-background px-4 py-2.5 hidden md:flex items-center space-x-4">
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="What do you want to read?" className="pl-8" />
        </div>
        <ThemeToggler />
        <Link href={'#'}>
          <Button>Support</Button>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6 p-6">
          <Card className="bg-primary text-white">
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
                <Link href={'#'}>
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
            <div className="flex w-max space-x-4 p-4">
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

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Learning</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recentLessons.map((lesson, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=200&width=400&text=${lesson.title}`}
                        alt={lesson.title}
                        width={400}
                        height={200}
                        className="rounded-t-lg object-cover"
                      />
                      <Button
                        size="icon"
                        className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold">{lesson.title}</h3>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {lesson.instructor}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{lesson.stats.views} views</span>
                        <span>{lesson.stats.likes} likes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>



          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Quran Mazid</h2>
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
          </div>
        </div>
      </div>
    </div>
  )
}

