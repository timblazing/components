"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  FileCode2,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
} from "lucide-react";

type Viewport = "desktop" | "tablet" | "phone";

const viewports = [
  { id: "desktop", label: "Desktop", Icon: Monitor },
  { id: "tablet", label: "Tablet", Icon: Tablet },
  { id: "phone", label: "Phone", Icon: Smartphone },
] as const;

/** Preview and source for one block, with viewport sizes and a full-screen link. */
export function BlockViewer({
  id,
  title,
  installCommand,
  sourceFiles,
}: {
  id: string;
  title: string;
  installCommand?: string;
  sourceFiles: { path: string; content: string }[];
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [selectedFile, setSelectedFile] = useState(0);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [reload, setReload] = useState(0);
  const [copied, setCopied] = useState(false);
  const [installCopied, setInstallCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(sourceFiles[selectedFile].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const copyInstallCommand = async () => {
    const itemUrl = `${window.location.origin}/r/${id}.json`;
    await navigator.clipboard.writeText(
      installCommand ?? `bunx --bun shadcn@latest add ${itemUrl}`,
    );
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 1800);
  };

  return (
    <section id={id} className="block-viewer">
      <div className="block-viewer-toolbar">
        <p className="block-viewer-title">{title}</p>
        <div className="block-viewer-tools">
          <button
            className="is-command is-install"
            onClick={copyInstallCommand}
            aria-label={`Copy shadcn install command for ${title}`}
            title="Copy shadcn install command"
          >
            {installCopied ? <Check size={14} aria-hidden="true" /> : <Download size={14} aria-hidden="true" />}
            <span>{installCopied ? "Copied" : installCommand ?? "Install"}</span>
          </button>
          <Tabs value={tab} onValueChange={(v) => setTab(v as "preview" | "code")}>
            <TabsList aria-label={`${title} view`}>
              <TabsTab value="preview">Preview</TabsTab>
              <TabsTab value="code">Code</TabsTab>
            </TabsList>
          </Tabs>
          {viewports.map(({ id: v, label, Icon }) => (
            <button
              key={v}
              aria-label={label}
              aria-pressed={viewport === v}
              onClick={() => setViewport(v)}
            >
              <Icon size={16} aria-hidden="true" />
            </button>
          ))}
          <button aria-label="Reload preview" onClick={() => setReload(reload + 1)}>
            <RotateCw size={15} aria-hidden="true" />
          </button>
          <span className="is-divider" aria-hidden="true" />
          <a
            href={`/blocks/${id}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${title} full screen`}
          >
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="block-viewer-frame">
        {tab === "preview" ? (
          <div className="block-viewer-stage" data-viewport={viewport}>
            <iframe
              key={reload}
              src={`/blocks/${id}`}
              title={`${title} preview`}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="block-viewer-code-layout">
            <aside className="block-viewer-files" aria-label="Block source files">
              <p className="block-viewer-files-heading">Files</p>
              {sourceFiles.map((file, index) => (
                <button
                  key={file.path}
                  className={index === selectedFile ? "is-selected" : undefined}
                  onClick={() => setSelectedFile(index)}
                  title={file.path}
                  aria-current={index === selectedFile ? "page" : undefined}
                >
                  <FileCode2 size={14} aria-hidden="true" />
                  <span>{file.path.replace(/^src\//, "")}</span>
                </button>
              ))}
            </aside>
            <div className="block-viewer-code">
              <div className="block-viewer-code-header">
                <span title={sourceFiles[selectedFile].path}>{sourceFiles[selectedFile].path}</span>
                <button onClick={copy} aria-label={`Copy ${sourceFiles[selectedFile].path}`}>
                  {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                </button>
              </div>
              <pre><code>{sourceFiles[selectedFile].content}</code></pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
