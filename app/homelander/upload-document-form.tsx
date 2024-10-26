"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Form } from '@/components/ui/form'
import { z } from "zod"
import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import LoadingButton from "@/components/ui/loading-button"

const formSchema = z.object({
  title: z.string().min(1).max(250),
  file:z.instanceof(File),
})


export default function UploadDocumentForm({
  onUpload,
}: { onUpload: () => void;
}) {
  const createDocument = useMutation(api.documents.createDocument)
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })
    async function onSubmit(values: z.infer<typeof formSchema>) {
      const url = await generateUploadUrl()
      console.log(url)

      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": values.file.type },
        body: values.file,
      });
      const { fileId} =  await  result.json()

     await createDocument({
      title: values.title,
      fileId: fileId as string,
     })
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
                <FormField
                    control={form.control}
                    name="file"
                    render={({ field: { value, onChange, ...fieldProps }}) => (
                        <FormItem>
                        <FormLabel>File</FormLabel>
                        <FormControl>
                          <Input 
                            {...fieldProps}
                            type="file"
                            accept=".txt,.xml,.doc"
                            onChange={(event) => {
                              const file = event.target.files?.[0]
                              onChange(file)
                            }}
                            />
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