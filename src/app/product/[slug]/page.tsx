import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getAllProducts } from "@/lib/api";
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
    const product = getProductBySlug(slug);

    if (!product) {
        return {};
    }

    const title = `${product.title} | Giang Đinh`;

    return {
        title,
        description: product.description,
        openGraph: {
            title,
            description: product.description,
            images: [product.image],
        },
    };
}

export async function generateStaticParams() {
    const products = getAllProducts();

    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetail({ params }: Params) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return notFound();
    }

    const content = await markdownToHtml(product.content || "");

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
                <article>
                    {/* Product Header */}
                    <header style={{ marginBottom: '40px' }}>
                        <div
                            className="product-detail-grid"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '40px',
                                marginBottom: '40px'
                            }}>
                            {/* Product Image */}
                            <div style={{
                                width: '100%',
                                paddingBottom: '100%',
                                backgroundColor: '#eee8d5',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '16px',
                                border: '2px solid #eee8d5',
                                boxShadow: '0 4px 12px rgba(101, 123, 131, 0.08)'
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

                            {/* Product Info */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '20px'
                            }}>
                                <h2 style={{
                                    fontSize: '36px',
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #657b83 0%, #586e75 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    lineHeight: 1.3,
                                    marginBottom: '8px'
                                }}>
                                    {product.title}
                                </h2>

                                <div style={{
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    color: '#dc322f',
                                    marginBottom: '12px'
                                }}>
                                    {product.price}
                                </div>

                                <p style={{
                                    fontSize: '17px',
                                    color: '#586e75',
                                    lineHeight: '1.8',
                                    marginBottom: '20px'
                                }}>
                                    {product.description}
                                </p>

                                <div style={{
                                    display: 'inline-block',
                                    padding: '8px 16px',
                                    backgroundColor: 'rgba(101, 123, 131, 0.1)',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    color: '#657b83',
                                    fontWeight: 600,
                                    alignSelf: 'flex-start'
                                }}>
                                    {product.category}
                                </div>

                                <a
                                    href={product.buyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-block',
                                        padding: '18px 48px',
                                        fontSize: '17px',
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
                                        alignSelf: 'flex-start',
                                        marginTop: '12px'
                                    }}
                                    className="buy-button"
                                >
                                    🛒 Mua ngay
                                </a>
                            </div>
                        </div>
                    </header>

                    {/* Product Content */}
                    <div
                        className={markdownStyles["markdown"]}
                        dangerouslySetInnerHTML={{ __html: content }}
                        style={{
                            fontSize: '17px',
                            lineHeight: 1.9,
                            color: '#586e75',
                            paddingTop: '40px',
                            borderTop: '1px solid rgba(147, 161, 161, 0.25)'
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
                        href="/shop"
                        className="back-button"
                    >
                        ← Quay lại Shop
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
