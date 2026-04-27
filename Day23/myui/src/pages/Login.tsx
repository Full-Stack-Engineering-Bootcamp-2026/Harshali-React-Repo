"use client"

import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Min 6 chars"),
})

type FormData = z.infer<typeof schema>

export default function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = () => {
    navigate("/")
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
          <h2 className="text-2xl font-semibold text-white">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <p className="text-gray-400 mb-1">Email</p>
              <Input
                {...register("email")}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <p className="text-gray-400 mb-1">Password</p>
              <Input
                type="password"
                {...register("password")}
                className="bg-gray-800 border-gray-700 text-white"
              />
              {errors.password && (
                <p className="text-red-400 text-sm">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-500">
              Log in
            </Button>
          </form>

          <p
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => navigate("/create-account")}
          >
            Create account
          </p>
        </div>
      </div>
    </div>
  )
}