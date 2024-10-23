
"use client"
import { Button } from "@/components/ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Form } from '@/components/ui/form'
import { z } from "zod"
import { createDocument } from "@/convex/documents"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { Loader2, Loader2Icon } from "lucide-react"
import LoadingButton from "@/components/ui/loading-button"

const formSchema = z.object({
  title: z.string().min(1).max(250),
})


export default function UploadDocumentForm({
  onUpload,
}: { onUpload: () => void;
}) {
  const createDocument = useMutation(api.documents.createDocument)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })
    async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    await createDocument(values)
    onUpload()
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input placeholder="Expence Report" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
              <LoadingButton 
                  isLoading={form.formState.isSubmitting}
                  loadingText="Uploading..."
              >
                Upload
              </LoadingButton>
            </form>
        </Form>
    
        )
}