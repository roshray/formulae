
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

const formSchema = z.object({
  title: z.string().min(1).max(250),
})


export default function UploadDocumentForm() {
  const createDocument = useMutation(api.documents.createDocument)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })
    function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    createDocument(values)
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
                <Button type="submit">Upload</Button>
            </form>
        </Form>
    
        )
}