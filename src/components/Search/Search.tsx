"use client";

import * as React from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { ArrowUpRight, File, Search as SearchIcon } from "lucide-react";
import { fetchSurahs } from "@/utils/api";
import { Surah } from "@/types/quran";
import { ScrollArea } from "../ui/scroll-area";
import SearchSurahs from "./searchSurahs";
import Link from "next/link";
import NavigationLinks from "@/data/navigation";
import {
    BookOpen,
    Search as SearhIcon,
    Settings,
    X,
} from "lucide-react"
import { Input } from "../ui/input";

const Search = () => {
    const [open, setOpen] = React.useState(false);
    const [surahs, setSurahs] = React.useState<Surah[]>([]);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSurahs();
            setSurahs(data);
        };

        fetchData();
    }, []);

    return (
        <>
            <button className="relative w-full cursor-pointer" onClick={() => setOpen(true)}>   
                <SearhIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="What do you want to read?" className="px-8 cursor-pointer" />
                <kbd className="absolute right-2.5 top-[50%] -translate-y-[50%] ms-12 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                    ⌘K
                </kbd>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search for surah or pages..." />
                <CommandList>
                    <ScrollArea className="h-[300px]">
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Surahs">
                            <SearchSurahs surahs={surahs} />
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Pages">
                            {NavigationLinks.mainNav.map((link) => (
                                <CommandItem key={link.label}>
                                    {link.external ? (
                                        <Link
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 w-full h-full"
                                        >
                                            <link.icon size={16} className="opacity-60" />
                                            <span>{link.label}</span>
                                            <ArrowUpRight size={12} strokeWidth={2} className="opacity-60 ml-auto" />
                                        </Link>
                                    ) : (
                                        <Link href={link.href} className="flex items-center gap-2 w-full h-full">
                                            <link.icon size={16} className="opacity-60" />
                                            <span>{link.label}</span>
                                        </Link>
                                    )}
                                </CommandItem>
                            ))}
                            {NavigationLinks.secondaryNav.map((link) => (
                                <CommandItem key={link.label}>
                                    {link.external ? (
                                        <Link
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 w-full h-full"
                                        >
                                            <link.icon size={16} className="opacity-60" />
                                            <span>{link.label}</span>
                                            <ArrowUpRight size={12} strokeWidth={2} className="opacity-60 ml-auto" />
                                        </Link>
                                    ) : (
                                        <Link href={link.href} className="flex items-center gap-2 w-full h-full">
                                            <link.icon size={16} className="opacity-60" />
                                            <span>{link.label}</span>
                                        </Link>
                                    )}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </ScrollArea>
                </CommandList>
            </CommandDialog>
        </>
    );
};


export default Search;
