"use client"

import { Button } from "@/components/ui/button"
import {
  BookOpen,
} from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { UserButton } from "../UserButton/UserButton"
import NavigationLinks from "@/data/navigation"

export function LeftSidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className={`fixed md:sticky top-0 z-[110] md:-translate-x-0 hidden md:flex h-screen w-64 flex-col bg-background`}>
        <ScrollArea className="flex-1">
          <div className="flex items-center justify-between">
            <Link href={'/'}>
              <div className="flex items-center gap-2 px-6 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <BookOpen className="size-4" />
                  </div>
                  <span className="font-semibold">AL Noor <sup className="text-[12px] text-white dark:text-black bg-black dark:bg-white px-[4px] rounded">Beta</sup></span>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:hidden">
            <UserButton className="pl-[1.3rem]" />
          </div>
          <nav className="p-3">
            <ul className="space-y-1">
              {NavigationLinks.mainNav.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <Button
                      variant={`${pathname === item.href ? "secondary" : "ghost"}`}
                      className="w-full justify-start"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
        <div className="p-3">
          {NavigationLinks.secondaryNav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <Button
                variant={`${pathname === item.href ? "secondary" : "ghost"}`}
                className="w-full justify-start"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

