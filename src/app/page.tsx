"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

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
    <div className="flex h-screen items-center justify-center bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Netflix Employee Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Log In</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

