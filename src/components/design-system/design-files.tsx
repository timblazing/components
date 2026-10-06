"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { CopyButton } from "@/components/design-system/copy-button";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";

export type DesignFile = {
  id: string;
  label: string;
  filename: string;
  content: string;
};

/** Tabbed source viewer for the published design files, with copy and download. */
export function DesignFiles({ files }: { files: DesignFile[] }) {
  const [id, setId] = useState(files[0].id);
  const file = files.find((f) => f.id === id) ?? files[0];

  const download = () => {
    const url = URL.createObjectURL(new Blob([file.content], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = file.filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="design-files">
      <div className="design-files-toolbar">
        <Tabs value={id} onValueChange={(v) => setId(v as string)}>
          <TabsList aria-label="Design file">
            {files.map((f) => (
              <TabsTab key={f.id} value={f.id}>
                {f.label}
              </TabsTab>
            ))}
          </TabsList>
        </Tabs>
        <Select
          items={files.map((f) => ({ value: f.id, label: f.label }))}
          value={id}
          onValueChange={(v) => v && setId(v)}
        >
          <SelectTrigger className="design-files-select" aria-label="Design file">
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {files.map((f) => (
              <SelectItem key={f.id} value={f.id}>
                {f.label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
        <div className="design-files-actions">
          <CopyButton text={file.content} label="Copy" />
          <Button variant="outline" size="sm" onClick={download}>
            <Download /> {file.filename}
          </Button>
        </div>
      </div>
      <pre className="design-files-code" tabIndex={0}>
        <code>{file.content}</code>
      </pre>
    </div>
  );
}
