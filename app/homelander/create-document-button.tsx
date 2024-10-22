
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UploadDocumentForm from "./upload-document-form";

export default function CreateDocumentButton() {
  const createDocument = useMutation(api.documents.createDocument)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    onClick={()=>{
                        createDocument({title: "hello world"})
                    }}
                >
                    Upload Button
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Upload a Document</DialogTitle>
                <DialogDescription>
                   Upload a team document
                </DialogDescription>
                <UploadDocumentForm />
            </DialogHeader>
        </DialogContent>
</Dialog>


    )
}