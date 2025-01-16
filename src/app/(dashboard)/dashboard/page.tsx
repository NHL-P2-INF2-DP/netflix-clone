'use client';
import React from 'react';

import { authClient } from '@/lib/auth-client';

export default function page() {
  const {
    data: session,
    isPending, // loading state
    error, // error object
  } = authClient.useSession();

  if (!session) {
    return <></>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">
        Welcome to the dashboard,
        {session.user.name}
        !
      </h1>
    </div>
  );
}
