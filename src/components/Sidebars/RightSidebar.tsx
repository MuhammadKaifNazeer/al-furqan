import { Button } from "@/components/ui/button"
import { ScrollArea } from "../ui/scroll-area"
import React from "react"
import { Calendar } from "../ui/calendar"
import { UserButton } from "@/components/UserButton/UserButton"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { fetchSurahs } from "@/utils/api"

export async function RightSidebar() {
  const surahs = await fetchSurahs()

  return (
    <div className="sticky top-0 hidden lg:flex h-screen w-80 flex-col overflow-y-auto bg-background">
      <ScrollArea>
        <div className="-pl-[0.9rem]">
          <UserButton />
        </div>
        <div className="flex-1 p-4">
          <div className="border rounded-[--radius]">
            <Calendar
              mode="single"
              className="scale-[1.1] translate-x-4 my-4"
            />
          </div>
          <div className="my-6">
            <h2 className="mb-4 text-lg font-semibold">Start Learning</h2>
            <div className="flex flex-col gap-4">
              {surahs.slice(0, 3).map((surah) => (
                <Link key={surah.id} href={`/surah/${surah.id}`}>    
                  <div className="rounded-lg border border-border p-4 hover:bg-muted/50">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                          {surah.id}
                        </span>
                        <h3 className="font-semibold">{surah.name_simple}</h3>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ArrowTopRightIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mb-2 text-sm text-muted-foreground">
                      <p>{surah.translated_name.name} • {surah.verses_count} Verses</p>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="w-full flex items-center justify-center">
                <Link href="/read">
                  <Button variant={'outline'} className="my-4">Show More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

