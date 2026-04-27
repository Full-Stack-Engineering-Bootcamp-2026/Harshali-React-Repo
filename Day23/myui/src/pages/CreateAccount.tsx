"use client"

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Min 6 chars"),
  confirm: z.string(),
  agree: z.boolean().refine(v => v, "Accept policy"),
}).refine(data => data.password === data.confirm, {
  message: "Passwords must match",
  path: ["confirm"],
})

type FormData = z.infer<typeof schema>

export default function CreateAccount() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = () => {
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">

      {/* MAIN CARD */}
      <div className="grid md:grid-cols-2 max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg">

        {/* IMAGE */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="h-full w-full object-cover"
          />
        </div>

        {/* FORM */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-white">Create account</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <Input
                {...register("email")}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Password</p>
              <Input
                type="password"
                {...register("password")}
                className="bg-gray-800 border-gray-700 text-white"
              />
              {errors.password && (
                <p className="text-red-400 text-sm">{errors.password.message}</p>
              )}
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Confirm password</p>
              <Input
                type="password"
                {...register("confirm")}
                className="bg-gray-800 border-gray-700 text-white"
              />
              {errors.confirm && (
                <p className="text-red-400 text-sm">{errors.confirm.message}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Checkbox {...register("agree")} />
              <span className="text-sm text-gray-400">I agree to policy</span>
            </div>
            {errors.agree && (
              <p className="text-red-400 text-sm">{errors.agree.message}</p>
            )}

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-500">
              Create account
            </Button>
          </form>

          {/* SOCIAL */}
          <div className="border-t border-gray-700 pt-4 space-y-3">
            <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
              Github
            </Button>
            <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
              Twitter
            </Button>
          </div>

          <p
            className="text-sm text-purple-400 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Already have an account? Login
          </p>
        </div>
      </div>
    </div>
  )
}