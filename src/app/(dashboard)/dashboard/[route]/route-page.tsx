'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function RoutePage({ route }: { route: string }) {
  const { data, isFetching } = useQuery({
    queryKey: ['route', route],
    queryFn: async () => {
      const response = await fetch(`/api/v1/${route}`);
      return response.json();
    },
    refetchOnWindowFocus: false,
  });
  return (
    <div className="p-4">
      {isFetching
        ? (
            <p>Loading...</p>
          )
        : (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          )}
    </div>
  );
}
