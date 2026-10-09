'use client';

import { useState, type ReactNode } from 'react';
import {
  ExternalLinkIcon,
  FileIcon,
  MonitorIcon,
  RotateCwIcon,
  SmartphoneIcon,
  TabletIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { cn } from '@/lib/utils';

const viewports = {
  desktop: { width: '100%', label: 'Desktop', Icon: MonitorIcon },
  tablet: { width: '768px', label: 'Tablet', Icon: TabletIcon },
  mobile: { width: '390px', label: 'Mobile', Icon: SmartphoneIcon },
} as const;
type Viewport = keyof typeof viewports;

export function BlockViewer({
  name,
  files,
}: {
  name: string;
  files: { path: string; code: ReactNode }[];
}) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [activeFile, setActiveFile] = useState(files[0]?.path);
  const [reloadKey, setReloadKey] = useState(0);
  const src = `/view/${name}`;

  return (
    <div className="not-prose my-6 flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <ToggleGroup
          value={[tab]}
          onValueChange={(value) => value[0] && setTab(value[0] as typeof tab)}
          variant="outline"
          size="sm"
        >
          <ToggleGroupItem value="preview">Preview</ToggleGroupItem>
          <ToggleGroupItem value="code">Code</ToggleGroupItem>
        </ToggleGroup>
        <div className={cn('flex items-center gap-1', tab !== 'preview' && 'invisible')}>
          <ToggleGroup
            value={[viewport]}
            onValueChange={(value) => value[0] && setViewport(value[0] as Viewport)}
            size="sm"
            className="hidden md:flex"
          >
            {Object.entries(viewports).map(([key, { label, Icon }]) => (
              <ToggleGroupItem key={key} value={key} aria-label={label} title={label}>
                <Icon />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Reload preview"
            title="Reload preview"
            onClick={() => setReloadKey((key) => key + 1)}
          >
            <RotateCwIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Open in new tab"
            title="Open in new tab"
            nativeButton={false}
            render={<a href={src} target="_blank" rel="noreferrer" />}
          >
            <ExternalLinkIcon />
          </Button>
        </div>
      </div>

      <div hidden={tab !== 'preview'} className="rounded-xl border bg-muted/40 p-0 md:p-2">
        <div
          className="mx-auto h-[720px] overflow-hidden rounded-lg border bg-background transition-[width] duration-250 ease-out max-md:rounded-none max-md:border-0"
          style={{ width: viewports[viewport].width, maxWidth: '100%' }}
        >
          <iframe
            key={reloadKey}
            src={src}
            title={`${name} preview`}
            loading="lazy"
            className="size-full"
          />
        </div>
      </div>

      <div
        hidden={tab !== 'code'}
        className="overflow-hidden rounded-xl border bg-card md:grid md:h-[720px] md:grid-cols-[240px_1fr]"
      >
        <nav
          aria-label="Files"
          className="flex gap-1 overflow-x-auto border-b p-2 md:flex-col md:overflow-y-auto md:border-r md:border-b-0"
        >
          {files.map((file) => (
            <button
              key={file.path}
              type="button"
              onClick={() => setActiveFile(file.path)}
              aria-current={file.path === activeFile}
              className="flex shrink-0 items-center gap-2 rounded-md px-2 py-1.5 text-left font-mono text-xs text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground aria-current:bg-accent aria-current:text-foreground"
            >
              <FileIcon className="size-3.5 shrink-0 opacity-60" />
              <span className="truncate">{file.path}</span>
            </button>
          ))}
        </nav>
        <div className="min-w-0 overflow-auto [&_figure]:my-0 [&_figure]:rounded-none [&_figure]:border-0 [&_figure]:bg-transparent">
          {files.map((file) => (
            <div key={file.path} hidden={file.path !== activeFile}>
              {file.code}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
