"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="md:flex items-center gap-x-2 sm:hidden">
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="logo"
        className="dark:hidden"
      />

      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="logo dark"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}> Xplotion</p>
    </div>
  );
};
