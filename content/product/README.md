# Hướng dẫn quản lý sản phẩm

## Cách thêm sản phẩm mới

1. Tạo file `.md` mới trong thư mục `/content/product/`
2. Đặt tên file theo slug (ví dụ: `tham-yoga.md`, `binh-nuoc-thong-minh.md`)
3. Sử dụng template sau:

```markdown
---
title: "Tên Sản Phẩm"
description: "Mô tả ngắn gọn về sản phẩm (không hiển thị trên trang shop)"
price: "299,000đ"
image: "/products/ten-anh.jpg"
buyLink: "https://shopee.vn/link-san-pham"
publishDate: "2026-01-15"
featured: true
category: "Danh mục sản phẩm"
---

## Giới thiệu sản phẩm

Nội dung chi tiết về sản phẩm (không hiển thị trên trang shop).

## Đặc điểm nổi bật

- Đặc điểm 1
- Đặc điểm 2
- Đặc điểm 3
```

## Các trường bắt buộc

- **title**: Tên sản phẩm (hiển thị trên card)
- **image**: Đường dẫn ảnh sản phẩm (nên dùng ảnh vuông 1:1)
- **buyLink**: Link mua hàng (Shopee, Lazada, v.v.)
- **publishDate**: Ngày xuất bản (định dạng: YYYY-MM-DD)

## Lưu ý quan trọng

### Hiển thị trên trang Shop
Trên trang `/shop`, mỗi sản phẩm chỉ hiển thị:
- ✅ Ảnh sản phẩm (vuông)
- ✅ Tiêu đề
- ✅ Nút "Mua hàng"

**KHÔNG hiển thị:**
- ❌ Giá
- ❌ Mô tả
- ❌ Link đến trang chi tiết

### Khi click "Mua hàng"
- Mở tab mới dẫn trực tiếp đến `buyLink`
- Không có trang chi tiết sản phẩm

### Ảnh sản phẩm
- Nên upload ảnh vuông (tỷ lệ 1:1) để hiển thị đẹp
- Đặt ảnh trong thư mục `/public/products/`
- Đường dẫn trong file: `/products/ten-anh.jpg`

## Ví dụ sản phẩm mẫu

Xem các file mẫu:
- `tham-yoga.md`
- `binh-nuoc-thong-minh.md`
- `san-pham-mau.md`

## Sắp xếp sản phẩm

Sản phẩm được sắp xếp theo `publishDate` (mới nhất lên đầu).
