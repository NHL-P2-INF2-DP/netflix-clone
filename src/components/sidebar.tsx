'use client';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routeConfigurations } from '@/lib/routes';
import { formatName } from '@/lib/utils';

import { Button } from './ui/button';

export function AppSidebar() {
  const pathname = usePathname();

  // Transform routeConfigurations into an array of routes
  const routes = Object.entries(routeConfigurations).map(([name, config]) => ({
    path: `/dashboard/${config.routeName}`,
    name: formatName(name), // Format the name here
  }));

  return (
    <aside className="relative z-20 flex h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-900 md:w-72 lg:w-64">
      <div className="h-20 border-b border-zinc-800 px-6 py-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-red-600">NETFLIX</span>
          <span className="text-sm font-medium text-gray-100">Dashboard</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {routes.map(route => (
            <Link
              key={route.path}
              href={route.path}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                pathname === route.path
                  ? 'bg-red-600/10 text-red-500'
                  : 'text-gray-400 hover:bg-zinc-800 hover:text-gray-100'
              }`}
            >
              <span>{route.name}</span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="border-t border-zinc-800 p-2 py-4">
        <Button
          variant="ghost"
          className="w-full justify-start py-2 text-gray-400 hover:bg-zinc-800 hover:text-gray-100"
          asChild
        >
          <Link href="/api/v1/documentation" target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" />
            <span>View API Documentation</span>
          </Link>
        </Button>
      </div>
    </aside>
  );
}
