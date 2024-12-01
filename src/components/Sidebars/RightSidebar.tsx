"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal, Search } from 'lucide-react'
import { ScrollArea } from "../ui/scroll-area"
import React from "react"
import { Calendar } from "../ui/calendar"
import { UserButton } from "@/components/UserButton/UserButton"

const memorizations = [
  {
    surah: "Surah Al-Mulk",
    chapter: "67",
    remainingDays: "11/14",
    completed: "21/30",
    progress: 81,
  },
  {
    surah: "Surah Al-A'la",
    chapter: "87",
    remainingDays: "3/7",
    completed: "7/19",
    progress: 64,
  },
  {
    surah: "Surah Al-Qiyamah",
    chapter: "75",
    remainingDays: "3/20",
    completed: "5/40",
    progress: 0,
  },
]

const communities = [
  { name: "Learning Quran", members: "78K Members" },
  { name: "10 Mins Salah", members: "3.2M Members" },
  { name: "Daily Hadith", members: "10.7M Members" },
]

export function RightSidebar() {

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
            <h2 className="mb-4 text-lg font-semibold">Memorization</h2>
            <div className="space-y-4">
              {memorizations.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border p-4 hover:bg-muted/50"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                        {item.chapter}
                      </span>
                      <h3 className="font-semibold">{item.surah}</h3>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mb-2 text-sm text-muted-foreground">
                    <p>Remaining Days: {item.remainingDays}</p>
                    <p>Completed: {item.completed}</p>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Quran Community</h2>
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {communities.map((community, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg p-2 hover:bg-muted/50"
                >
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?height=40&width=40&text=${index + 1}`}
                      alt={community.name}
                    />
                    <AvatarFallback>{index + 1}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{community.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {community.members}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

