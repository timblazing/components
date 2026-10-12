import { ArrowUpRightIcon } from 'lucide-react';
import { libraries, type LibraryId } from '@/lib/libraries';

export interface Source {
  library: LibraryId;
  url?: string;
}

/** Credits the libraries a page's code comes from, linking to the original. */
export function SourceCredit({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;
  return (
    <p className="flex flex-wrap items-center gap-x-1.5 text-sm text-muted-foreground">
      From
      {sources.map((source, i) => {
        const library = libraries[source.library];
        return (
          <span key={source.library} className="inline-flex items-center">
            <a
              href={source.url ?? library.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-0.5 font-medium text-foreground underline-offset-4 hover:underline"
            >
              {library.name}
              <ArrowUpRightIcon className="size-3.5 text-muted-foreground" />
            </a>
            {i < sources.length - 1 && <span className="ms-1.5">·</span>}
          </span>
        );
      })}
    </p>
  );
}
