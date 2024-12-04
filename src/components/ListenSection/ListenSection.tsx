import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from "../ui/carousel"
import ListenQuranData from "@/data/listenQuranData"
import { slugify } from "@/utils/slugify"

export function ListenSection() {
    return (
        <div className="pt-4 pb-[4.3rem]">
            <Carousel>
                <div className="mb-4 flex items-center justify-start">
                    <h2 className="text-xl font-semibold">Listen Quran</h2>
                </div>
                <CarouselContent className="-ml-4">
                    {ListenQuranData.map((item, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 pl-4">
                            <Link href={`/${slugify(item.title)}`}>
                                <Card className="border-none group">
                                    <CardContent className="p-0">
                                        <div className="relative flex flex-col items-center justify-center aspect-video bg-accent rounded-sm overflow-hidden">
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.title}
                                                width={4000}
                                                height={2000}
                                                className="object-cover h-full w-full transition duration-200 group-hover:scale-[1.03]"
                                            />
                                        </div>
                                        <div className="px-1 py-3">
                                            <div className=" flex items-center justify-between">
                                                <h3 className="font-semibold line-clamp-1 capitalize">{item.title}</h3>
                                                <ArrowTopRightIcon className="size-4" />
                                            </div>
                                            <p className="mt-1 text-sm text-muted-foreground capitalize">
                                                {item.reciter}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNavigation
                    className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
                    classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
                    alwaysShow
                />
            </Carousel>
        </div>
    )
}

