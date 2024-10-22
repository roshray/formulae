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

export default function CreateDocumentButton() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Upload Document</Button>
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