"use client";

import Link from "next/link";
import { Github } from "@/components/design-system/github-icon";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProjectHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const selected =
    projects.find((p) => p.href === pathname)?.name ?? "fillrate";
  return (
    <header className="project-gallery-header">
      <Link href="/blocks" className="quiet-link">
        <ArrowLeft size={14} />
        Blocks
      </Link>
      <Select
        items={projects.map(({ name }) => ({ label: name, value: name }))}
        value={selected}
        onValueChange={(value) => {
          const p = projects.find((p) => p.name === value);
          if (p) router.push(p.href);
        }}
      >
        <SelectTrigger
          size="sm"
          aria-label="GitHub repository"
          className="w-44"
        >
          <Github size={14} />
          <SelectValue />
        </SelectTrigger>
        <SelectPopup align="end" alignItemWithTrigger={false}>
          {projects.map(({ name }) => (
            <SelectItem key={name} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
    </header>
  );
}
