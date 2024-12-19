'use client';
import { usePathname } from 'next/navigation';

import { AppSidebar } from '@/components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function Page({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  let route = pathname.split('/').pop();
  if (route) {
    route = route
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {route}
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
