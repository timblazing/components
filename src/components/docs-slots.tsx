'use client';
import { PanelLeftIcon } from 'lucide-react';
import { SidebarCollapseTrigger } from 'fumadocs-ui/components/sidebar/base';
import { useDocsLayout } from 'fumadocs-ui/layouts/docs';

// Below md the sidebar becomes a drawer; this bar holds its trigger.
export function DocsMobileBar() {
  const { slots } = useDocsLayout();
  const Trigger = slots.sidebar?.trigger;
  if (!Trigger) return null;

  return (
    <div className="sticky top-(--fd-docs-row-1) z-30 flex h-(--fd-header-height) items-center border-b bg-background/80 px-4 backdrop-blur-sm [grid-area:header] md:hidden max-md:layout:[--fd-header-height:--spacing(11)]">
      <Trigger className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground">
        <PanelLeftIcon className="size-4" />
        Menu
      </Trigger>
    </div>
  );
}

// The site header already shows the title, so the sidebar omits it.
export function NoNavTitle() {
  return null;
}

// Sits in the sidebar footer on desktop. Below md the sidebar is a drawer
// opened from the mobile bar, so there's nothing to collapse.
export function SidebarCollapseButton() {
  return (
    <SidebarCollapseTrigger
      aria-label="Collapse sidebar"
      className="inline-flex size-8 items-center justify-center rounded-md text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground max-md:hidden"
    >
      <PanelLeftIcon className="size-4" />
    </SidebarCollapseTrigger>
  );
}
