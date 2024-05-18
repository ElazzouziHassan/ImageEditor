"use client"
import { useEffect, useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  aspectRatioOptions, 
  creditFee, 
  defaultValues, 
  editTypes 
} from "@/constants"
import { CustomField } from "./CustomField"
import { AspectRatioKey, debounce, deepMergeObjects } from "@/lib/utils"
import { useRouter } from "next/navigation"

export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
})

const EditingForm = ({ action, data = null,  userId, type, creditBalance, config = null}: EditingFormProps) => {

  // initial declaration :********************************************************************
    const editingType = editTypes[type];
    const [image, setImage] = useState(data)
    const [newEditing, setNewEditing] = useState<Edits | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingConfig, setEditingConfig] = useState(config)
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
  // *****************************************************************************************
  const initialValues = data && action === 'Update' ? {
    title: data?.title,
    aspectRatio: data?.aspectRatio,
    color: data?.color,
    prompt: data?.prompt,
    publicId: data?.publicId,
  } : defaultValues

   // 1. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <CustomField 
          control={form.control}
          name="title"
          formLabel="Image Title"
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
        />
        
      </form>
    </Form>
  )
}

export default EditingForm