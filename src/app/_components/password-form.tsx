"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordForm({ slug }: { slug: string }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, password }),
      });

      if (res.ok) {
        router.refresh();
      } else {
        setError("Sai mật khẩu. Vui lòng thử lại.");
      }
    } catch {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="password-form-wrapper">
      <svg className="password-form-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
      <h3 className="password-form-title">Bài viết được bảo vệ</h3>
      <p className="password-form-desc">Nhập mật khẩu để xem nội dung bài viết này.</p>
      <form onSubmit={handleSubmit} className="password-form">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu..."
          className="password-input"
          autoFocus
        />
        <button type="submit" className="password-submit" disabled={loading || !password}>
          {loading ? "Đang kiểm tra..." : "Mở khóa"}
        </button>
      </form>
      {error && <p className="password-error">{error}</p>}
    </div>
  );
}
