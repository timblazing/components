import { ServerCodeBlock } from 'fumadocs-ui/components/codeblock.rsc';
import { PreviewRenderer } from './preview-renderer';
import { PreviewTabs } from './preview-tabs';
import { readPreviewSource } from './source';

/** Live preview of a registry example or chart, with its source one tab over. */
export async function ComponentPreview({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const code = await readPreviewSource(name);
  return (
    <PreviewTabs
      className={className}
      preview={<PreviewRenderer name={name} />}
      code={<ServerCodeBlock code={code} lang="tsx" />}
    />
  );
}
