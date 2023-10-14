"use client";

import { useConvexAuth } from "convex/react";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignInButton,  UserButton} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link"


export const Navbar = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background  dark:bg-[#1f1f1f] fixed top-0 flex justify-between items-center w-full p-6 px-12",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {/* <p>Log In</p> */}
        {isLoading && (
          <Spinner/>
        )}
        {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm">
              Get Xplotion Free
            </Button>
          </SignInButton>
        </>
        )}
        {isAuthenticated && !isLoading && (
          <>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents">
              Enter Xplotion
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/"/>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
