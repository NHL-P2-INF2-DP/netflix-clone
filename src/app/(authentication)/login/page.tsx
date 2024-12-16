'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: (data) => {
          router.push('/dashboard');
          setIsLoading(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
          setIsLoading(false);
        },
      },
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black bg-opacity-75 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-blend-darken">
      <Card className="w-full max-w-md border-none bg-black/80 text-white">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-red-600">
            NETFLIX DBMS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-400">
                  Email or phone number
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus-visible:ring-red-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-400">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus-visible:ring-red-600"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  className="border-gray-600 data-[state=checked]:border-red-600 data-[state=checked]:bg-red-600"
                />
                <Label htmlFor="remember" className="text-sm text-gray-400">
                  Remember me
                </Label>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="mt-6 w-full bg-red-600 text-white hover:bg-red-700"
            >
              Sign In
            </Button>
          </form>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
