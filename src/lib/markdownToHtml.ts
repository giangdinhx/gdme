import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown (tables, strikethrough, task lists, etc.)
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to rehype (HTML AST)
    .use(rehypeRaw) // Parse raw HTML in markdown
    .use(rehypeStringify) // Convert to HTML string
    .process(markdown);

  return result.toString();
}
