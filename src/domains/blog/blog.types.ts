/**
 * MDX frontmatter contract for future posts. Wire up @next/mdx when first post lands.
 */
export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  draft?: boolean;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  body: string;
};
