"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const schema = z.object({

  name: z.string().min(2, "Name is too short"),
  password: z.string().min(6, "Password too short"),
  plan: z.string().min(1, "Select account type"),
  limit: z.string().min(1, "Select limit"),
  message: z.string().min(5, "Message too short"),
  agree: z.boolean().refine(v => v, "Accept policy"),
  multi: z.array(z.string()).min(1, "Select at least one option"),
  
})

type FormData = z.infer<typeof schema>

export default function FormsPage() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      multi: [],
      plan: "",
      limit: "",
      agree: false,
    },
  })

  const password = watch("password")

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-white space-y-8">

      <h1 className="text-2xl font-bold">Forms</h1>

      <Card className="bg-gray-900 border border-gray-800 p-6 space-y-6 rounded-xl">

        <h2 className="text-lg font-semibold text-white">Elements</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <div>
            <p className="text-sm mb-1">Name</p>
            <Input {...register("name")} className="bg-gray-800 border-gray-700 text-white" />
            {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <p className="text-sm mb-1">Password</p>
            <Input
              type="password"
              {...register("password")}
              className={`bg-gray-800 text-white ${
                password
                  ? errors.password
                    ? "border-red-500"
                    : "border-green-500"
                  : "border-gray-700"
              }`}
            />
            {password && errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
            {password && !errors.password && (
              <p className="text-green-400 text-sm">Password is strong</p>
            )}
          </div>

          <div>
            <p className="text-sm mb-1">Account Type</p>

            <Controller
              name="plan"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  value={field.value || ""}
                  onValueChange={field.onChange}
                  className="flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="personal" id="p1" />
                    <label htmlFor="p1">Personal</label>
                  </div>

                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="business" id="p2" />
                    <label htmlFor="p2">Business</label>
                  </div>
                </RadioGroup>
              )}
            />

            {errors.plan && <p className="text-red-400 text-sm">{errors.plan.message}</p>}
          </div>

          <div className="space-y-2">
            <p className="text-sm">Requested Limit</p>

            <Controller
              name="limit"
              control={control}
              render={({ field }) => (
                <Select value={field.value || ""} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select limit" />
                  </SelectTrigger>

                  <SelectContent className="bg-gray-900 text-white border-gray-800">
                    <SelectItem value="1000">$1,000</SelectItem>
                    <SelectItem value="5000">$5,000</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <p className="text-sm mb-1">Multiselect</p>

            <label className="flex items-center gap-2">
              <input type="checkbox" value="Option 1" {...register("multi")} />
              Option 1
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" value="Option 2" {...register("multi")} />
              Option 2
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" value="Option 3" {...register("multi")} />
              Option 3
            </label>

            {errors.multi && (
              <p className="text-red-400 text-sm">{errors.multi.message}</p>
            )}
          </div>

          <div>
            <p className="text-sm mb-1">Message</p>
            <Textarea {...register("message")} className="bg-gray-800 border-gray-700 text-white" />
            {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
          </div>

          <div className="flex items-center gap-2">
            <Controller
              name="agree"
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <span>I agree to the policy</span>
          </div>

          {errors.agree && <p className="text-red-400 text-sm">{errors.agree.message}</p>}

          <Button type="submit" className="bg-purple-600 hover:bg-purple-500">
            Submit
          </Button>

        </form>
      </Card>
    </div>
  )
}