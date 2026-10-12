import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { DocsMobileBar, NoNavTitle, SidebarCollapseButton } from '@/components/docs-slots';

// The site header comes from the parent layout, so the docs layout drops its
// own title, search, theme switch, and links and only renders the sidebar.
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      tabs={false}
      sidebar={{
        // The header row only holds the collapse toggle, which moves to the footer.
        className: '[&>div:first-child]:hidden',
        // Keyed because fumadocs renders the footer inside a children array.
        footer: <SidebarCollapseButton key="collapse" />,
      }}
      searchToggle={{ enabled: false }}
      themeSwitch={{ enabled: false }}
      slots={{ navTitle: NoNavTitle, header: DocsMobileBar }}
      containerProps={{
        className: '[--fd-banner-height:--spacing(14)]',
      }}
    >
      {children}
    </DocsLayout>
  );
}
