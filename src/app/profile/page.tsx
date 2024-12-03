"use client"

import { signIn, useSession } from "next-auth/react";
import FullSidebarLayout from "@/layouts/fullSidbarLayout";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function DialogDemo() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        signIn("google")
    }

    const user = session?.user;

    return (
        <FullSidebarLayout>
            {user && (
                <div className="mx-auto grid w-full items-start gap-6 py-8">
                    <div className="grid gap-6">
                        <div className="space-y-2">
                            {/* Display profile image or placeholder */}
                            {user.image ? (
                                <div className="w-[8rem] h-[8rem] relative rounded-full overflow-hidden">
                                    <Image
                                        src={user.image}
                                        alt={user.name ?? "User Avatar"}
                                        layout="fill"
                                        className="w-full h-full object-cover blur-0 rounded-lg transition duration-300"
                                    />
                                </div>
                            ) : (
                                <div className="w-[8rem] h-[8rem] rounded-full overflow-hidden relative group">
                                    <Image
                                        src="/profile-image-placeholder.png"
                                        alt={user.name ?? ""}
                                        layout="fill"
                                        className="w-full h-full object-cover blur-0 rounded-lg transition duration-300"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <form className="space-y-4">
                                <h1>Name</h1>
                                <Input value={user.name ?? ""} disabled />
                                <h1>Email</h1>
                                <Input value={user.email ?? ""} disabled />
                            </form>
                        </div>

                        <div className="flex items-center justify-start gap-2">
                            <TooltipProvider>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <Button className="max-w-max">Update Profile</Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top" sideOffset={5} className="z-[150]">
                                        This feature is coming soon
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
            )}
        </FullSidebarLayout>
    );
}
