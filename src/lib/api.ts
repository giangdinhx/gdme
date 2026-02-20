import { Post } from "@/interfaces/post";
import { Product } from "@/interfaces/product";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "content");
const productsDirectory = join(process.cwd(), "content/product");

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
    tags: Array.isArray(data.tags)
      ? data.tags.slice(0, 3)
      : (typeof data.tags === 'string' ? data.tags.split(',').map(t => t.trim()).slice(0, 3) : []),
    locked: !!data.password,
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
    .filter((slug) => slug !== "about.md" && slug !== "changelog.md") // Exclude special pages
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

export function getChangelogContent() {
  const fullPath = join(postsDirectory, "changelog.md");

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

// Product functions
export function getProductSlugs() {
  if (!fs.existsSync(productsDirectory)) {
    return [];
  }
  return fs.readdirSync(productsDirectory)
    .filter((file) => file.endsWith('.md') && !file.startsWith('.'));
}

export function getProductBySlug(slug: string): Product {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(productsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || "",
    description: data.description || "",
    price: data.price || "",
    image: data.image || "",
    buyLink: data.buyLink || "",
    publishDate: data.publishDate || new Date().toISOString(),
    featured: data.featured || false,
    category: data.category || "",
    content,
  };
}

export function verifyPostPassword(slug: string, password: string): boolean {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) return false;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return !!data.password && data.password === password;
}

export function getAllProducts(): Product[] {
  const slugs = getProductSlugs();
  const products = slugs
    .filter((slug) => slug !== "README.md") // Exclude README file
    .map((slug) => getProductBySlug(slug))
    .sort((product1, product2) => (product1.publishDate > product2.publishDate ? -1 : 1));
  return products;
}
