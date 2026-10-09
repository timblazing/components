'use client';

import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function PreviewTabs({
  preview,
  code,
  className,
}: {
  preview: ReactNode;
  code: ReactNode;
  className?: string;
}) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  return (
    <div className="not-prose my-6 flex flex-col gap-2">
      <div role="tablist" className="flex items-center gap-4 text-sm">
        {(['preview', 'code'] as const).map((value) => (
          <button
            key={value}
            role="tab"
            type="button"
            aria-selected={tab === value}
            onClick={() => setTab(value)}
            className={cn(
              'relative py-1 font-medium capitalize text-muted-foreground transition-colors duration-150 hover:text-foreground',
              'after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-foreground after:opacity-0 after:transition-opacity',
              'aria-selected:text-foreground aria-selected:after:opacity-100',
            )}
          >
            {value}
          </button>
        ))}
      </div>
      <div hidden={tab !== 'preview'}>
        <div
          className={cn(
            'preview-surface flex min-h-[350px] w-full items-center justify-center rounded-xl border bg-background p-6 sm:p-10',
            className,
          )}
        >
          {preview}
        </div>
      </div>
      <div hidden={tab !== 'code'} className="[&_figure]:my-0 [&_pre]:max-h-[560px]">
        {code}
      </div>
    </div>
  );
}
