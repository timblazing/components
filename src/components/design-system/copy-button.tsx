"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyButton({
  text,
  label = "Copy",
  compact = false,
}: {
  text: string;
  label?: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2400);
  }
  return (
    <Button
      variant="ghost"
      size={compact ? "icon-sm" : "sm"}
      onClick={copy}
      aria-label={state === "copied" ? "Copied" : label}
      title={label}
    >
      {state === "copied" ? <Check /> : <Copy />}
      {!compact &&
        (state === "copied"
          ? "Copied"
          : state === "error"
            ? "Try again"
            : label)}
      <span className="sr-only" role="status">
        {state === "copied"
          ? "Copied to clipboard"
          : state === "error"
            ? "Clipboard unavailable. Select and copy the text manually."
            : ""}
      </span>
    </Button>
  );
}
