import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import SocialLinks from "@/app/_components/social-links";
import markdownStyles from "@/app/_components/markdown-styles.module.css";

type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {};
    }

    const title = `${post.title} | Giang Đinh`;

    return {
        title,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: Params) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <div className="container">
            <header className="header">
                <div className="avatar">
                    <img src="/img/avatar.webp" alt="Giang Đinh" />
                </div>
                <h1>Giang Đinh</h1>
                <p className="tagline">Công Nghệ - Tập Luyện - Cuộc Sống</p>
            </header>

            <nav className="nav">
                <Link href="/">Trang chủ</Link>
                <Link href="/posts">Bài viết</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/contact">Liên hệ</Link>
            </nav>

            <main className="content">
                <article>
                    <header style={{ marginBottom: '40px', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: '32px',
                            fontWeight: 700,
                            marginBottom: '16px',
                            background: 'linear-gradient(135deg, #657b83 0%, #586e75 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            lineHeight: 1.3
                        }}>
                            {post.title}
                        </h2>
                        {post.date && (
                            <time style={{ fontSize: '14px', color: '#93a1a1', display: 'block' }}>
                                {new Date(post.date).toLocaleDateString('vi-VN', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        )}
                    </header>

                    <div
                        className={markdownStyles["markdown"]}
                        dangerouslySetInnerHTML={{ __html: content }}
                        style={{
                            fontSize: '17px',
                            lineHeight: 1.9,
                            color: '#586e75'
                        }}
                    />
                </article>

                <div style={{
                    marginTop: '60px',
                    paddingTop: '30px',
                    borderTop: '1px solid rgba(147, 161, 161, 0.25)',
                    textAlign: 'center',
                    position: 'relative'
                }}>
                    <Link
                        href="/posts"
                        className="back-button"
                    >
                        ← Quay lại danh sách bài viết
                    </Link>
                </div>
            </main>

            <footer>
                <SocialLinks />
                <p className="copyright">© 2026 Giang Đinh</p>
            </footer>
        </div>
    );
}
