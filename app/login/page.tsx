"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, ArrowLeft } from "lucide-react"

export default function Login() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "patient",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real app, you would handle authentication here
    console.log("Login data:", formData)

    // Redirect to the appropriate dashboard
    router.push(formData.role === "patient" ? "/patient/dashboard" : "/doctor/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-6 left-6 flex items-center text-teal-700 hover:text-teal-900">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex items-center gap-2 mb-8">
        <Stethoscope className="h-8 w-8 text-teal-600" />
        <h1 className="text-3xl font-bold text-teal-700">HealthAssist AI</h1>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Log in to your HealthAssist AI account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-center space-x-4 pt-2">
              <Button
                type="button"
                variant={formData.role === "patient" ? "default" : "outline"}
                className={formData.role === "patient" ? "bg-teal-600 hover:bg-teal-700" : ""}
                onClick={() => handleRoleChange("patient")}
              >
                Login as Patient
              </Button>
              <Button
                type="button"
                variant={formData.role === "doctor" ? "default" : "outline"}
                className={formData.role === "doctor" ? "bg-teal-600 hover:bg-teal-700" : ""}
                onClick={() => handleRoleChange("doctor")}
              >
                Login as Doctor
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
              Log In
            </Button>
            <div className="flex justify-between w-full text-sm">
              <Link href="/forgot-password" className="text-teal-600 hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="text-teal-600 hover:underline">
                Create account
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
