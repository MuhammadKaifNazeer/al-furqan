"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signIn, signOut, useSession } from "next-auth/react";

interface UserButtonProps {
  microButton?: boolean;
  className?: string;
}

export function UserButton({ microButton = false, className }: UserButtonProps) {
  const { data: session } = useSession();

  return (
    <div className={cn("flex items-center justify-between px-[0.9rem] pt-2.5", className)}>
      {/* Authenticated */}
      {session ? (
        <>
          {microButton ? (
            <div className="flex items-center justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user?.image || "/placeholder.svg"} alt="User Avatar" />
                    <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="ml-4 rounded-[0.8rem] z-[120]">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>LogOut</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <Link href="/profile">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user?.image || "/placeholder.svg"} alt="User Avatar" />
                    <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold line-clamp-1">{session.user?.name || "User"}</span>
                </div>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4 rounded-[0.8rem] bg-background z-[120]">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>LogOut</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </>
      ) : (
        /* Unauthenticated */
        <div className="flex items-center justify-center gap-2 w-full">
          <Button variant="outline" className="w-full" onClick={() => signIn("google")}>
            SignIn
          </Button>
        </div>
      )}
    </div>
  );
}
