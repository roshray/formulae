"use client"

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react"; 


export default function DocumentPage() {

  const documents = useQuery(api.documents.getDocuments)
  
  return (
    <main className="p-24 space-y-8">

        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">{}</h1> 
        </div>
    </main>

  )
}