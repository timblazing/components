import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ServerCodeBlock } from 'fumadocs-ui/components/codeblock.rsc';

/** Highlighted source of a file in the repo, e.g. a component in src/components/ui. */
export async function ComponentSource({ src, title }: { src: string; title?: string }) {
  const code = await readFile(path.join(process.cwd(), src), 'utf8');
  return (
    <ServerCodeBlock
      code={code.trimEnd()}
      lang="tsx"
      codeblock={{ title: title ?? src.split('/').pop(), className: '[&_pre]:max-h-[480px]' }}
    />
  );
}
