'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(
      z.object({
        email: z.string().email('Invalid email address'),
        password: z.string().min(1, 'Password is required'),
      }),
    ),
  });

  const onSubmit = handleSubmit((data) => {
    setError('');
    authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (data) => {
          router.push('/dashboard');
        },
        onError: (ctx) => {
          // set a delay of 3 seconds before showing the error to the user
          setTimeout(() => {
            setError(ctx.error.message);
          }, 3000);
        },
      },
    );
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-black bg-opacity-75 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-blend-darken">
      <Card className="w-full max-w-md rounded-2xl border-none bg-black/80 text-white">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-red-600">
            NETFLIX DBMS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-400">
                  Email
                </Label>
                <Input
                  id="email"
                  disabled={isSubmitting}
                  type="text"
                  {...register('email')}
                  required
                  className="border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus-visible:ring-red-600"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message as string}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className={cn(
                    'text-gray-400',
                    errors.password && 'text-red-600',
                  )}
                >
                  Password
                </Label>
                <Input
                  id="password"
                  disabled={isSubmitting}
                  type="password"
                  {...register('password')}
                  required
                  className={cn(
                    'border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus-visible:ring-red-600',
                    errors.password && 'border-red-600',
                  )}
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.password.message as string}
                  </p>
                )}
              </div>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-red-600 text-white hover:bg-red-700"
            >
              {isSubmitting ? 'Loading...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
