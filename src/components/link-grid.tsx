import { ArrowUpRightIcon } from 'lucide-react';

/** A compact grid of external links, styled like PageGrid. */
export function LinkGrid({ links }: { links: { title: string; href: string }[] }) {
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between border-b py-2.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          {link.title}
          <ArrowUpRightIcon className="size-3.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
        </a>
      ))}
    </div>
  );
}
