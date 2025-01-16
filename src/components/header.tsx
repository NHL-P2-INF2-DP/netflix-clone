'use client';

import { capitalizeFirstLetter } from 'better-auth';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { authClient } from '@/lib/auth-client';
import { getFirstLetters } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Header() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) {
    return <></>;
  }

  return (
    <header className="relative z-10 flex h-20 w-full items-center justify-end border-b border-zinc-800 bg-zinc-900 px-4 py-4 sm:px-6">
      <div className="flex justify-end gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-gray-300 hover:bg-zinc-800 hover:text-gray-100"
            >
              <Avatar className="size-6">
                <AvatarImage src={session.user.image || ''}></AvatarImage>
                <AvatarFallback>
                  {capitalizeFirstLetter(getFirstLetters(session.user.name))}
                </AvatarFallback>
              </Avatar>
              <span>{capitalizeFirstLetter(session.user.name)}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="mt-1 w-56 border border-zinc-700 bg-zinc-800"
          >
            <DropdownMenuLabel className="text-gray-200">
              Welcome,
              {capitalizeFirstLetter(session.user.name)}
            </DropdownMenuLabel>
            <DropdownMenuLabel className="text-gray-200">
              {session.user.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-700" />
            <DropdownMenuItem
              className="text-gray-300 focus:bg-zinc-700 focus:text-gray-100"
              onClick={async () => {
                await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push('/login');
                    },
                  },
                });
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
