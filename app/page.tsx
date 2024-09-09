"use client"

import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Unauthenticated, Authenticated, useMutation, useQuery } from "convex/react";
import { title } from "process";


export default function Home() {

  const documents = useQuery(api.documents.getDocuments)
  const createDocument = useMutation(api.documents.createDocument)
  
  return (
    <main className="flex ">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button onClick={() => {createDocument({title: "hello world"})}} className="text-white">Click Me</button>

        {documents?.map((doc) => (
          <div key={doc._id}>{doc.title}</div>
        ))}
      </Authenticated>
    </main>

  )
}


