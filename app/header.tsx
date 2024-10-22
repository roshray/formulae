"use client"

import { SignInButton, UserButton } from "@clerk/nextjs"
import { Unauthenticated, Authenticated } from "convex/react"
import Image from "next/image"


export function Header() {
    return (
        <div className="bg-slate-100 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4 text-2xl">
                   
                    <Image src="/logo.png" width={60} height={60} alt="an image of logo" className="rounded-full"/>
                     newAI
                </div>
           
                <div>
                    <Unauthenticated>
                        <SignInButton />
                    </Unauthenticated>
                    <Authenticated>
                        <UserButton />
                    </Authenticated>
                </div>
        </div>
        </div>
    )
}