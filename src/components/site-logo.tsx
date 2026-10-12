'use client';
import { useRef } from 'react';
import { TerminalIcon, type TerminalIconHandle } from '@/components/icons/terminal';
import { appName } from '@/lib/shared';

export function SiteLogo() {
  const icon = useRef<TerminalIconHandle>(null);

  return (
    <span
      className="inline-flex items-center gap-2"
      onMouseEnter={() => icon.current?.startAnimation()}
      onMouseLeave={() => icon.current?.stopAnimation()}
    >
      <TerminalIcon ref={icon} size={18} />
      <span className="font-display text-[15px] tracking-tight">{appName}</span>
    </span>
  );
}
