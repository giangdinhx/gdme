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
                <p className="tagline">Người Chia Sẻ Những Trải Nghiệm</p>
            </header>

            <nav className="nav">
                <Link href="/">Trang chủ</Link>
                <Link href="/posts" className="active">Bài viết</Link>
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
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                        padding: '12px 0',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease'
                                    }}
                                    className="post-item"
                                >
                                    {post.date && (
                                        <time style={{
                                            fontSize: '15px',
                                            color: '#93a1a1',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            minWidth: '90px',
                                            flexShrink: 0
                                        }}>
                                            {new Date(post.date).toLocaleDateString('vi-VN')}
                                        </time>
                                    )}
                                    <h3 style={{
                                        fontSize: '17px',
                                        fontWeight: 500,
                                        fontFamily: 'Inter, sans-serif',
                                        color: '#586e75',
                                        margin: 0,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        flex: 1
                                    }}>
                                        {post.title}
                                    </h3>
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
                            Chưa có bài viết nào. Hãy quay lại sau nhé! 📝
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
