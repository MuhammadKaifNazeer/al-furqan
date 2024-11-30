import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from "../ui/carousel"

const ListenOptions = [
    {
        title: "Only urdu translation with text",
        reciter: "Fateh Muhammad Jalandri",
        coverImage: "https://i.ytimg.com/vi/b48Zq-jC9s8/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGHIgYyg4MA8=&rs=AOn4CLCC-6AnuEd7tMWGO-ePRURoXuWV4Q",
        href: "/"
    },
    {
        title: "Arabic Recitation with English Subtitles",
        reciter: "Mishary Alafasy",
        coverImage: "https://i.ytimg.com/vi/UDvh63xHVa0/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGFEgZShaMA8=&rs=AOn4CLABXKBCE2ACeaiP781dMq1U0O6VIw",
        href: "/"
    },
]

export function ListenSection() {
    return (
        <div className="pt-4 pb-[4.3rem]">
            <Carousel>
                <div className="mb-4 flex items-center justify-start">
                    <h2 className="text-xl font-semibold">Listen Quran</h2>
                </div>
                <CarouselContent className="-ml-4">
                    {ListenOptions.map((option, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 pl-4">
                            <Link href={option.href}>
                                <Card key={index} className="border-none group">
                                    <CardContent className="p-0">
                                        <div className="relative flex flex-col items-center justify-center aspect-video bg-gradient-to-br from-green-500 to-green-600 rounded-sm overflow-hidden p-4">  
                                            <h1 className="font-bold text-2xl text-center">{option.title}</h1>
                                            {/* <Image
                                                src={option.coverImage}
                                                alt={option.title}
                                                width={4000}
                                                height={2000}
                                                className="object-cover h-full w-full transition duration-200 group-hover:scale-[1.03]"
                                            /> */}
                                        </div>
                                        <div className="px-1 py-3">
                                            <div className=" flex items-center justify-between">
                                                <h3 className="font-semibold line-clamp-1 capitalize">{option.title}</h3>
                                                <ArrowTopRightIcon className="size-4" />
                                            </div>
                                            <p className="mt-1 text-sm text-muted-foreground capitalize">
                                                {option.reciter}
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

