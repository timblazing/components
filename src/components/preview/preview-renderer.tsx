'use client';

import { Suspense } from 'react';
import { previews } from '@/registry/__index__';
import { Spinner } from '@/components/ui/spinner';

export function PreviewRenderer({ name }: { name: string }) {
  const Component = previews[name];
  if (!Component) {
    return <p className="text-sm text-muted-foreground">Preview “{name}” not found.</p>;
  }
  return (
    <Suspense fallback={<Spinner className="text-muted-foreground" />}>
      <Component />
    </Suspense>
  );
}
