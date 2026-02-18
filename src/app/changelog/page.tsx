import Link from "next/link";
import SocialLinks from "@/app/_components/social-links";
import { getChangelogContent } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import markdownStyles from "@/app/_components/markdown-styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Changelog | Giang Đinh',
    robots: {
        index: false,
        follow: false,
    },
};

export default async function Changelog() {
    const { content } = getChangelogContent();
    const htmlContent = await markdownToHtml(content || "");

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
                <div
                    className={markdownStyles["markdown"]}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </main>

            <footer>
                <SocialLinks />
                <p className="copyright">© 2026 Giang Đinh</p>
            </footer>
        </div>
    );
}
