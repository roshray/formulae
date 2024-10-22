"use client"

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react"; 
import DocumentCard from "./homelander/document-card";


export default function Home() {

  const documents = useQuery(api.documents.getDocuments)
  const createDocument = useMutation(api.documents.createDocument)
  
  return (
    <main className="p-24 space-y-8">

        <div className="flex justify-between items-center">
          <h1>My Documents</h1>   
          <Button 
            onClick={() => 
              {createDocument(
                {title: "hello world"})}} 
                className="text-white">
                  Upload Document
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {documents?.map((doc) => (
              <DocumentCard document={doc} />
          ))}
        </div>
    </main>

  )
}


