import { LandingPage } from "@/components/blocks/landing-page";
import { Dashboard } from "@/app/dashboard/page";
import { blockMetadata, type BlockId } from "@/components/blocks/metadata";

export const blocks = {
  "landing-page": {
    Block: LandingPage,
    ...blockMetadata["landing-page"],
  },
  dashboard: {
    Block: Dashboard,
    ...blockMetadata.dashboard,
  },
} as const;

export type { BlockId };

export function isBlockId(id: string): id is BlockId {
  return id in blocks;
}
