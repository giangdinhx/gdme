"use client";

import Link from "next/link";
import SocialLinks from "@/app/_components/social-links";
import { useState, FormEvent } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset status after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                <Link href="/contact" className="active">Liên hệ</Link>
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
                    Liên hệ với tôi
                </h2>

                <p style={{ marginBottom: '40px', color: '#586e75', lineHeight: '1.7', textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
                    Nếu bạn có bất kỳ câu hỏi, góp ý hoặc muốn hợp tác, đừng ngần ngại liên hệ với tôi qua form dưới đây.
                </p>

                <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    <div>
                        <label htmlFor="name" style={{
                            display: 'block',
                            marginBottom: '8px',
                            color: '#586e75',
                            fontWeight: 500,
                            fontSize: '14px'
                        }}>
                            Tên của bạn <span style={{ color: '#dc322f' }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                fontSize: '16px',
                                border: '2px solid #eee8d5',
                                borderRadius: '8px',
                                backgroundColor: '#fdf6e3',
                                color: '#657b83',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                                fontFamily: 'Inter, sans-serif'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#657b83'}
                            onBlur={(e) => e.target.style.borderColor = '#eee8d5'}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" style={{
                            display: 'block',
                            marginBottom: '8px',
                            color: '#586e75',
                            fontWeight: 500,
                            fontSize: '14px'
                        }}>
                            Email <span style={{ color: '#dc322f' }}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                fontSize: '16px',
                                border: '2px solid #eee8d5',
                                borderRadius: '8px',
                                backgroundColor: '#fdf6e3',
                                color: '#657b83',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                                fontFamily: 'Inter, sans-serif'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#657b83'}
                            onBlur={(e) => e.target.style.borderColor = '#eee8d5'}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" style={{
                            display: 'block',
                            marginBottom: '8px',
                            color: '#586e75',
                            fontWeight: 500,
                            fontSize: '14px'
                        }}>
                            Nội dung tin nhắn <span style={{ color: '#dc322f' }}>*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                fontSize: '16px',
                                border: '2px solid #eee8d5',
                                borderRadius: '8px',
                                backgroundColor: '#fdf6e3',
                                color: '#657b83',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                                fontFamily: 'Inter, sans-serif',
                                resize: 'vertical',
                                minHeight: '120px'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#657b83'}
                            onBlur={(e) => e.target.style.borderColor = '#eee8d5'}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        style={{
                            padding: '14px 32px',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#fdf6e3',
                            backgroundColor: status === "sending" ? '#93a1a1' : '#657b83',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: status === "sending" ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            fontFamily: 'Inter, sans-serif',
                            boxShadow: '0 2px 8px rgba(101, 123, 131, 0.2)'
                        }}
                        onMouseEnter={(e) => {
                            if (status !== "sending") {
                                e.currentTarget.style.backgroundColor = '#586e75';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(101, 123, 131, 0.3)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (status !== "sending") {
                                e.currentTarget.style.backgroundColor = '#657b83';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(101, 123, 131, 0.2)';
                            }
                        }}
                    >
                        {status === "sending" ? "Đang gửi..." : "Gửi tin nhắn"}
                    </button>

                    {status === "success" && (
                        <div style={{
                            padding: '12px 16px',
                            backgroundColor: '#d4edda',
                            color: '#155724',
                            borderRadius: '8px',
                            border: '1px solid #c3e6cb',
                            fontSize: '14px'
                        }}>
                            ✓ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.
                        </div>
                    )}

                    {status === "error" && (
                        <div style={{
                            padding: '12px 16px',
                            backgroundColor: '#f8d7da',
                            color: '#721c24',
                            borderRadius: '8px',
                            border: '1px solid #f5c6cb',
                            fontSize: '14px'
                        }}>
                            ✗ Có lỗi xảy ra. Vui lòng thử lại sau.
                        </div>
                    )}
                </form>
            </main>

            <footer>
                <SocialLinks />
                <p className="copyright">© 2026 Giang Đinh</p>
            </footer>
        </div>
    );
}
