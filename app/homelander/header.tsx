"use client"


import Image from "next/image"
import HeaderActions from "./header-action"


export function Header() {
    return (
        <div className="bg-slate-100 py-4 rounded-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4 text-2xl">
                   
                    <Image src="/logo.png" width={60} height={60} alt="an image of logo" className="rounded-full"/>
                     newAI
                </div>
           
                <div className="flex gap-4 items-center">
                    <HeaderActions /> 
                </div>
        </div>
        </div>
    )
}