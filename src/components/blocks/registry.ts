import { LandingPage } from "@/components/blocks/landing-page";
import { blockMetadata, type BlockId } from "@/components/blocks/metadata";

export const blocks = {
  "landing-page": {
    Block: LandingPage,
    ...blockMetadata["landing-page"],
  },
} as const;

export type { BlockId };

export function isBlockId(id: string): id is BlockId {
  return id in blocks;
}
