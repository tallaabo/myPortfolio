import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

export type DocMeta = {
  title: string;
  date?: string;
  language?: string; // "English" | "Somali"
  type?: string;     // "poem" | "story"
  summary?: string;
  tags?: string[];
  github?: string;
  demo?: string;
};

const ROOT = path.join(process.cwd(), "content");

function resolveDir(...segments: string[]) {
  return path.join(ROOT, ...segments);
}

export function slugs(...collection: string[]) {
  const dir = resolveDir(...collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function list(...collection: string[]) {
  return slugs(...collection)
    .map((slug) => {
      const file = path.join(resolveDir(...collection), `${slug}.mdx`);
      const { data } = matter(fs.readFileSync(file, "utf8"));
      return { slug, meta: data as DocMeta };
    })
    .sort((a, b) => {
      const da = Date.parse(a.meta.date ?? "");
      const db = Date.parse(b.meta.date ?? "");
      return (db || 0) - (da || 0);
    });
}

export async function getDoc(collection: string[], slug: string) {
  const file = path.join(resolveDir(...collection), `${slug}.mdx`);
  const source = fs.readFileSync(file, "utf8");

  const { content, frontmatter } = await compileMDX<DocMeta>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins: [rehypeSlug] },
    },
  });

  return { content, meta: frontmatter, slug };
}
