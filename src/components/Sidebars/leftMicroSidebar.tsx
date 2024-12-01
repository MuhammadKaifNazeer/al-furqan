"use client"

import { Button } from "@/components/ui/button"
import {
    BookOpen,
    GraduationCap,
    Heart,
    HelpCircle,
    History,
    Home,
    Podcast,
    Settings,
    Users,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { UserButton } from "@/components/UserButton/UserButton"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import NavigationLinks from "@/data/navigation"

export function LeftMircroSidebar() {
    const pathname = usePathname();

    return (
        <>
            <div className={`hidden md:flex sticky top-0 z-[110] md:-translate-x-0 h-screen w-max flex-col bg-background `}>
                <ScrollArea className="flex-1">
                    <div className="flex items-center justify-between">
                        <Link href={'/'}>
                            <div className="flex items-center gap-2 px-[0.9rem] py-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <BookOpen className="size-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <UserButton microButton={true} />
                    </div>
                    <nav className="p-3 mx-auto">
                        <ul className="space-y-1">
                            {NavigationLinks.mainNav.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        target={item.external ? "_blank" : "_self"}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                    >
                                        <Button
                                            size={'icon'}
                                            variant={`${pathname === item.href ? "secondary" : "ghost"}`}
                                        >
                                            <TooltipProvider delayDuration={0}>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <item.icon className="size-4" />
                                                    </TooltipTrigger>
                                                    <TooltipContent side="right" className="translate-x-4 z-[130]">
                                                        <p>{item.label}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </ScrollArea>
                <div className="p-3 w-full mx-auto flex flex-col">
                    {NavigationLinks.secondaryNav.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            target={item.external ? "_blank" : "_self"}
                            rel={item.external ? "noopener noreferrer" : undefined}
                        >
                            <Button
                                size={'icon'}
                                variant={`${pathname === item.href ? "secondary" : "ghost"}`}
                            >
                                <TooltipProvider delayDuration={0}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <item.icon className="size-4" />
                                        </TooltipTrigger>
                                        <TooltipContent side="right" className="translate-x-4 z-[130]">
                                            <p>{item.label}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

