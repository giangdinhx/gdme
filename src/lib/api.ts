import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "content");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') && !file.startsWith('.'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Map new frontmatter fields to Post interface
  const postData = {
    ...data,
    slug: realSlug,
    content,
    // Use publishDate if available, fallback to date
    date: (data.publishDate || data.date || new Date().toISOString()) as string,
    // Ensure standard string ISO format if date object
    // Map seo.description to excerpt if excerpt is missing
    excerpt: data.excerpt || data.seo?.description || "",
    // Construct valid ogImage object
    ogImage: {
      url: data.seo?.ogImage || data.ogImage?.url || data.coverImage || "",
    },
    // Ensure coverImage exists
    coverImage: data.coverImage || "",
    // Default author if missing
    author: data.author || {
      name: "Giang Dinh",
      picture: "/img/giang-avatar.jpg", // Placeholder or assume exists
    },
  };

  // Ensure date is a string
  if (postData.date && typeof postData.date !== 'string') {
    // @ts-ignore
    postData.date = postData.date.toISOString();
  }

  return postData as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug !== "about.md") // Exclude about.md from posts
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAboutContent() {
  const fullPath = join(postsDirectory, "about.md");

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return {
      content: "",
      data: {}
    };
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    content,
    data
  };
}

