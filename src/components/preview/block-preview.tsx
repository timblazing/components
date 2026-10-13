import { ServerCodeBlock } from 'fumadocs-ui/components/codeblock.rsc';
import { BlockViewer } from './block-viewer';
import { readBlockFiles } from './source';

/** A block rendered in an iframe at real viewport sizes, with every source file. */
export async function BlockPreview({ name, height }: { name: string; height?: number }) {
  const files = await readBlockFiles(name);
  return (
    <BlockViewer
      name={name}
      height={height}
      files={files.map((file) => ({
        path: file.path,
        code: (
          <ServerCodeBlock
            code={file.code}
            lang={file.path.split('.').pop() ?? 'tsx'}
            codeblock={{ title: file.path }}
          />
        ),
      }))}
    />
  );
}
