"use client"

import Image from "next/image"
import Link from "next/link"

import {Button} from "@/components/ui/button"

export default function Error  ()  {
    <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image 
            src="/error.png"
            height="300"
            width="300"
            alt="Error"
            className="dark:hidden"
        />
        <Image 
            src="/error-dark.png"
            height="300"
            width="300"
            alt="Error"
            className="hidden dark:block"
        />
        <h2>
            Something went wrong!
        </h2>
        <Button asChild>
            <Link href="/doc"> Go back</Link>
        </Button>
    </div>
}