"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === "test@test.com" && password === "test123") {
      router.push("/dashboard")
    } else {
      alert("Invalid email or password")
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <Card className="w-[400px] bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-red-600">Netflix Employee Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700 text-gray-100 placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700 text-gray-100 placeholder-gray-400"
              />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">Log In</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

