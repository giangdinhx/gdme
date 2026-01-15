import Link from "next/link";
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
                <Link href="/">Trang chủ</Link>
                <Link href="/posts">Bài viết</Link>
                <Link href="/contact">Liên hệ</Link>
            </nav>


            <main className="content">
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    marginBottom: '16px',
                    background: 'linear-gradient(135deg, #657b83 0%, #586e75 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Sản phẩm đề xuất
                </h2>

                <p style={{ marginBottom: '40px', color: '#586e75', lineHeight: '1.7' }}>
                    Đây là những sản phẩm mà tôi đang sử dụng và muốn giới thiệu đến các bạn.
                </p>

                <div className="shop-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '40px',
                    marginTop: '32px'
                }}>
                    {products.map((product) => {
                        return (
                            <div
                                key={product.slug}
                                style={{
                                    backgroundColor: '#fdf6e3',
                                    border: '2px solid #eee8d5',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 4px 12px rgba(101, 123, 131, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%'
                                }}
                                className="product-card"
                            >
                                {/* Product Image - Square */}
                                <div style={{
                                    width: '100%',
                                    paddingBottom: '100%', // Creates square aspect ratio
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
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                </div>

                                {/* Product Content */}
                                <div style={{
                                    padding: '28px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1,
                                    gap: '14px'
                                }}>
                                    <h3 style={{
                                        fontSize: '26px',
                                        fontWeight: 700,
                                        color: '#657b83',
                                        marginBottom: '6px',
                                        fontFamily: 'Crimson Pro, serif',
                                        lineHeight: 1.3
                                    }}>
                                        {product.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '22px',
                                        fontWeight: 700,
                                        color: '#dc322f',
                                        marginBottom: '10px'
                                    }}>
                                        {product.price}
                                    </p>

                                    <p style={{
                                        fontSize: '16px',
                                        color: '#586e75',
                                        lineHeight: '1.8',
                                        marginBottom: 'auto',
                                        flexGrow: 1
                                    }}>
                                        {product.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '12px',
                                        marginTop: '16px'
                                    }}>
                                        <Link
                                            href={`/product/${product.slug}`}
                                            style={{
                                                width: '100%',
                                                padding: '16px 24px',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                color: '#657b83',
                                                backgroundColor: 'transparent',
                                                border: '2px solid #657b83',
                                                borderRadius: '12px',
                                                textDecoration: 'none',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                fontFamily: 'Inter, sans-serif',
                                                display: 'block'
                                            }}
                                            className="detail-button"
                                        >
                                            📖 Thông tin chi tiết
                                        </Link>

                                        <a
                                            href={product.buyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                width: '100%',
                                                padding: '16px 24px',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                color: '#fdf6e3',
                                                backgroundColor: '#657b83',
                                                border: 'none',
                                                borderRadius: '12px',
                                                textDecoration: 'none',
                                                textAlign: 'center',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                fontFamily: 'Inter, sans-serif',
                                                boxShadow: '0 4px 12px rgba(101, 123, 131, 0.25)',
                                                display: 'block'
                                            }}
                                            className="buy-button"
                                        >
                                            🛒 Mua hàng
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
