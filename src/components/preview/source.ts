import 'server-only';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const registry = path.join(process.cwd(), 'src/registry');

/** Source of an example or chart, as a reader would paste it into their app. */
export async function readPreviewSource(name: string) {
  const code = await readFile(path.join(registry, 'examples', `${name}.tsx`), 'utf8').catch(() =>
    readFile(path.join(registry, 'charts', `${name}.tsx`), 'utf8'),
  );
  return code.replace(/^export const description = .*\n\n?/m, '').trimEnd();
}

/** Every file in a block, page first, as paths relative to the block. */
export async function readBlockFiles(name: string) {
  const dir = path.join(registry, 'blocks', name);
  const files = (await readdir(dir, { recursive: true, withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name !== 'meta.ts')
    .map((entry) => path.relative(dir, path.join(entry.parentPath, entry.name)))
    .sort((a, b) => (a === 'page.tsx' ? -1 : b === 'page.tsx' ? 1 : a.localeCompare(b)));
  return Promise.all(
    files.map(async (file) => ({
      path: file,
      code: (await readFile(path.join(dir, file), 'utf8')).trimEnd(),
    })),
  );
}
