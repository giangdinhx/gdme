import SocialLinks from "@/app/_components/social-links";
import { getAllProducts } from "@/lib/api";

export default function ShopPage() {
    const products = getAllProducts();
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
                <a href="/">Trang chủ</a>
                <a href="/posts">Bài viết</a>
                <a href="/contact">Liên hệ</a>
            </nav>


            <main className="content">
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    background: 'linear-gradient(135deg, #657b83 0%, #586e75 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textAlign: 'center'
                }}>
                    Sản phẩm đề xuất
                </h2>

                <p style={{ marginBottom: '40px', color: '#586e75', lineHeight: '1.7', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                    Đây là những sản phẩm mà tôi đang sử dụng và muốn giới thiệu đến các bạn.
                </p>

                <div className="shop-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                    marginTop: '2px'
                }}>
                    {products.map((product) => {
                        return (
                            <div
                                key={product.slug}
                                style={{
                                    backgroundColor: '#fdf6e3',
                                    border: '1px solid #eee8d5',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 8px rgba(101, 123, 131, 0.05)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                className="product-card"
                            >
                                {/* Product Image - Square */}
                                <div style={{
                                    width: '100%',
                                    paddingBottom: '100%',
                                    backgroundColor: '#eee8d5',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>

                                {/* Product Content */}
                                <div style={{
                                    padding: '12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                    flex: 1
                                }}>
                                    <h3 style={{
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        color: '#657b83',
                                        margin: 0,
                                        fontFamily: 'Inter, sans-serif',
                                        lineHeight: 1.4,
                                        textAlign: 'center'
                                    }}>
                                        {product.title}
                                    </h3>

                                    <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                                        <a
                                            href={product.buyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                width: '100%',
                                                padding: '14px 20px',
                                                fontSize: '14px',
                                                fontWeight: 700,
                                                letterSpacing: '0.8px',
                                                color: '#fdf6e3',
                                                backgroundColor: '#059669',
                                                border: 'none',
                                                borderRadius: '8px',
                                                textDecoration: 'none',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                fontFamily: 'Inter, sans-serif',
                                                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px'
                                            }}
                                            className="buy-button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="8" cy="21" r="1" />
                                                <circle cx="19" cy="21" r="1" />
                                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                                            </svg>
                                            MUA NGAY
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Empty State */}
                {products.length === 0 && (
                    <div style={{
                        textAlign: 'center',
                        padding: '60px 20px',
                        color: '#93a1a1'
                    }}>
                        <p style={{ fontSize: '18px' }}>Chưa có sản phẩm nào được thêm vào.</p>
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
