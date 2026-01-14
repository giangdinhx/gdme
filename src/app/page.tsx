import Link from "next/link";
import SocialLinks from "@/app/_components/social-links";
import AboutContent from "@/app/_components/about-content";
import { getAboutContent } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Index() {
  const { content } = getAboutContent();

  return (
    <div className="container">
      <header className="header">
        <div className="avatar">
          <img src="/img/avatar.webp" alt="Giang Đinh" />
        </div>
        <h1>Giang Đinh</h1>
        <p className="tagline">Người Chia Sẻ Những Trải Nghiệm</p>
      </header>

      <nav className="nav">
        <Link href="/" className="active">Trang chủ</Link>
        <Link href="/posts">Bài viết</Link>
        <Link href="/contact">Liên hệ</Link>
      </nav>

      <main className="content">
        <AboutContent content={content} />
      </main>

      <footer>
        <SocialLinks />
        <p className="copyright">© 2026 Giang Đinh</p>
      </footer>
    </div>
  );
}

