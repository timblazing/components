'use client';

import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function CopyToken({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      title={`Copy ${value}`}
      onClick={() => {
        void navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className={cn('group/copy relative block w-full cursor-copy text-left', className)}
    >
      {children}
      <span className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-md bg-background/80 text-foreground opacity-0 ring-1 ring-border backdrop-blur transition-opacity duration-150 group-hover/copy:opacity-100 group-focus-visible/copy:opacity-100">
        {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      </span>
    </button>
  );
}
