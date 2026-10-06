"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  blocks,
  type BlockId,
} from "@/components/projects/fillrate/sections/blocks";

function BlockEntry({ id }: { id: BlockId }) {
  const [open, setOpen] = useState(false);
  const { Block, title, description } = blocks[id];
  return (
    <article className="block-entry">
      <button
        className="block-entry-toggle"
        aria-expanded={open}
        aria-controls={`preview-${id}`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <Plus aria-hidden="true" />
      </button>
      <div id={`preview-${id}`} hidden={!open}>
        {open && (
          <>
            <div className="block-entry-description">
              <p>{description}</p>
              <a
                href={`/fillrate/blocks/${id}`}
                target="_blank"
                rel="noreferrer"
                className="ds-text-link"
              >
                Open full screen <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="block-entry-preview">
              <Block />
            </div>
          </>
        )}
      </div>
    </article>
  );
}
export function BlockReference() {
  return (
    <div className="block-reference">
      {(Object.keys(blocks) as BlockId[]).map((id) => (
        <BlockEntry key={id} id={id} />
      ))}
    </div>
  );
}
