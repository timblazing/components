"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";
import {
  Check,
  Copy,
  ExternalLink,
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
  description,
  file,
  source,
}: {
  id: string;
  title: string;
  description: string;
  file: string;
  source: string;
}) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [reload, setReload] = useState(0);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id={id} className="block-viewer">
      <div className="block-viewer-toolbar">
        <Tabs value={tab} onValueChange={(v) => setTab(v as "preview" | "code")}>
          <TabsList aria-label="View">
            <TabsTab value="preview">Preview</TabsTab>
            <TabsTab value="code">Code</TabsTab>
          </TabsList>
        </Tabs>
        <p className="block-viewer-title">{description}</p>
        <div className="block-viewer-tools">
          {tab === "preview" ? (
            <>
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
            </>
          ) : (
            <button className="is-command" onClick={copy} aria-label="Copy source">
              {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
              <span style={{ marginLeft: 8 }}>{file.split("/").pop()}</span>
            </button>
          )}
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
          <div className="block-viewer-code">
            <pre>
              <code>{source}</code>
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
