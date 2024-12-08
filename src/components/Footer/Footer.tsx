import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-background">
                <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start">
                    <div>
                        <div className="mr-4 md:flex mb-4">
                            <Link
                                href="/"
                                className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-neutral-600 dark:text-gray-100 py-0"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <BookOpen className="size-4" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-black dark:text-white font-sans">
                                        AL Furqan <sup className="text-[12px] text-white dark:text-black bg-black dark:bg-white px-[4px] rounded">Beta</sup>
                                    </h1>
                                </div>
                            </Link>
                        </div>
                        <div>
                            Brought to you by{" "}
                            <Link
                                target="__blank"
                                className="dark:text-white text-neutral-600 font-medium"
                                href="https://bento.me/muhammadkaifnazeer"
                            >
                                Muhammad Kaif Nazeer
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 items-start mt-10 md:mt-0">
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <Link
                                href="/"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Home
                            </Link>
                            <Link
                                href="/read"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Read Quran
                            </Link>
                            <Link
                                href="/listen"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Listen Quran
                            </Link>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <Link
                                href="/profile"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Profile
                            </Link>
                            <Link
                                href="/settings"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Settings
                            </Link>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <Link
                                target="__blank"
                                href="https://buymeacoffee.com/muhammadkaifnazeer"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Support
                            </Link>
                            <Link
                                target="__blank"
                                href="https://github.com/MuhammadKaifNazeer/al-quran"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                Developers
                            </Link>
                            <Link
                                target="__blank"
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="https://x.com/MuhammadKaif999"
                            >
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}