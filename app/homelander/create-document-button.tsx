import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import UploadDocumentForm from "./upload-document-form";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreateDocumentButton() {
    const [isopen, setIsOpen] = useState(false)
    return (
        <Dialog onOpenChange={setIsOpen} open={isopen}>
            <DialogTrigger asChild>
                <Button>Upload Document</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Upload a Document</DialogTitle>
                <DialogDescription>
                   Upload a team document
                </DialogDescription>
                <UploadDocumentForm onUpload={()=> setIsOpen(false)}/>
            </DialogHeader>
        </DialogContent>
</Dialog>


    )
}