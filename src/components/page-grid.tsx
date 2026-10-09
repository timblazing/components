import Link from 'next/link';
import { source } from '@/lib/source';

/** Every page in a section, alphabetically, as a compact link grid. */
export function PageGrid({ section }: { section: string }) {
  const pages = source
    .getPages()
    .filter((page) => page.slugs[0] === section && page.slugs.length === 2)
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
      {pages.map((page) => (
        <Link
          key={page.url}
          href={page.url}
          className="border-b py-2.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          {page.data.title}
        </Link>
      ))}
    </div>
  );
}
