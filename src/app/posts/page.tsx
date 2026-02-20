import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import SocialLinks from "@/app/_components/social-links";

export default function PostsPage() {
    const allPosts = getAllPosts();

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
                <Link href="/posts" className="active">Bài viết</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/contact">Liên hệ</Link>
            </nav>

            <main className="content">
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    marginBottom: '30px',
                    background: 'linear-gradient(135deg, #657b83 0%, #586e75 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textAlign: 'center'
                }}>
                    Bài viết của tôi
                </h2>

                {allPosts.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {allPosts.map((post, index) => (
                            <div key={post.slug}>
                                <Link
                                    href={`/posts/${post.slug}`}
                                    className={`post-item${post.locked ? ' post-item-locked' : ''}`}
                                >
                                    {post.date && (
                                        <time className="post-date">
                                            {new Date(post.date).toLocaleDateString('vi-VN')}
                                        </time>
                                    )}
                                    <h3 className="post-title">
                                        {post.locked && (
                                            <svg className="post-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                            </svg>
                                        )}
                                        {post.title}
                                    </h3>
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="post-tags">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="post-tag">#{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </Link>
                                {index < allPosts.length - 1 && (
                                    <div style={{
                                        height: '1px',
                                        background: 'rgba(147, 161, 161, 0.15)',
                                        margin: '0'
                                    }} />
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="highlight">
                        <p style={{ marginBottom: 0 }}>
                            Chưa có bài viết nào. Hãy quay lại sau nhé!
                        </p>
                    </div>
                )}
            </main>

            <footer>
                <SocialLinks />
                <p className="copyright">© 2026 Giang Đinh</p>
            </footer>
        </div>
    );
}
