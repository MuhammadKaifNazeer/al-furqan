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
            <div className="mb-4 flex items-center justify-start">
                <h2 className="text-xl font-semibold">Listen Quran</h2>
            </div>
            <div className="">
                <div className="flex shrink-0 items-center justify-center rounded-md border border-dashed min-h-[15rem]">
                    <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-10 w-10 "
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="11" r="1" />
                            <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
                            <path d="M17 18.5a9 9 0 1 0-10 0" />
                        </svg>
                        <h3 className="mt-4 text-lg font-semibold">Comming Soon</h3>
                        <p className="mb-4 mt-2 text-sm text-muted-foreground">
                            Bookmark this page to stay tuned!
                        </p>
                    </div>
                </div>
            </div>
            {/* <Carousel>       
                <CarouselContent className="-ml-4">
                    {ListenOptions.map((option, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 pl-4">
                            <Link href={option.href}>
                                <Card key={index} className="border-none group">
                                    <CardContent className="p-0">
                                        <div className="relative flex flex-col items-center justify-center aspect-video bg-gradient-to-br from-green-500 to-green-600 rounded-sm overflow-hidden p-4">  
                                            <h1 className="font-bold text-2xl text-center">{option.title}</h1>
                                            <Image
                                                src={option.coverImage}
                                                alt={option.title}
                                                width={4000}
                                                height={2000}
                                                className="object-cover h-full w-full transition duration-200 group-hover:scale-[1.03]"
                                            />
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
            </Carousel> */}
        </div>
    )
}

