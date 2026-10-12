// Libraries that components, blocks, and charts come from. Pages credit them
// through the `sources` frontmatter field.
export const libraries = {
  shadcn: { name: 'shadcn/ui', url: 'https://ui.shadcn.com' },
  bklit: { name: 'Bklit UI', url: 'https://bklit.com' },
} as const;

export type LibraryId = keyof typeof libraries;

export const libraryIds = Object.keys(libraries) as [LibraryId, ...LibraryId[]];
