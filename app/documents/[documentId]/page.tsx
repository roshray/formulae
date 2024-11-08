"use client"

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react"; 


export default function DocumentPage({
  params
}: {
   params: {
      documentId: Id<"documents">;
   }
}) {
  console.log(params.documentId)
  const document = useQuery(api.documents.getDocument,{
    documentId: params.documentId,
  })

  if (!document) {
    return <div>
          You dont have access to view the document
    </div>

  }
  
  return (
    <main className="p-24 space-y-8">

        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">{document.title}</h1> 
        </div>
    </main>

  )
}