# Hướng dẫn quản lý sản phẩm

## Cấu trúc thư mục

```
/content/product/          # Chứa các file markdown của sản phẩm
/public/products/          # Chứa ảnh sản phẩm
```

## Cách thêm sản phẩm mới

### Bước 1: Tạo file markdown cho sản phẩm

Tạo file mới trong `/content/product/` với tên file là slug của sản phẩm (ví dụ: `ten-san-pham.md`).

**Cấu trúc YAML frontmatter:**

```yaml
---
title: "Tên Sản Phẩm"              # Tên hiển thị của sản phẩm
description: "Mô tả ngắn gọn"      # Mô tả ngắn (hiển thị trên card)
price: "299,000đ"                  # Giá sản phẩm
image: "/products/ten-san-pham.jpg" # Đường dẫn ảnh sản phẩm
buyLink: "https://shopee.vn/..."   # Link mua hàng
publishDate: "2026-01-15"          # Ngày đăng (định dạng YYYY-MM-DD)
featured: true                     # Sản phẩm nổi bật (true/false)
category: "Danh mục"               # Danh mục sản phẩm
---
```

**Nội dung markdown:**

Sau phần YAML frontmatter, bạn có thể viết nội dung chi tiết về sản phẩm bằng markdown:

```markdown
## Giới thiệu sản phẩm

Viết giới thiệu chi tiết về sản phẩm...

## Đặc điểm nổi bật

- Đặc điểm 1
- Đặc điểm 2
- Đặc điểm 3

## Tại sao nên chọn sản phẩm này?

Chia sẻ trải nghiệm cá nhân...

## Hướng dẫn sử dụng

1. Bước 1
2. Bước 2
3. Bước 3
```

### Bước 2: Thêm ảnh sản phẩm

1. Chuẩn bị ảnh sản phẩm (khuyến nghị tỷ lệ 1:1 - vuông)
2. Đặt tên file ảnh trùng với slug sản phẩm (ví dụ: `ten-san-pham.jpg`)
3. Copy ảnh vào thư mục `/public/products/`

### Bước 3: Kiểm tra

1. Chạy dev server: `npm run dev`
2. Truy cập `http://localhost:3000/shop` để xem danh sách sản phẩm
3. Click "Thông tin chi tiết" để xem trang chi tiết sản phẩm

## Ví dụ file sản phẩm hoàn chỉnh

Xem file mẫu tại: `/content/product/tham-yoga.md`

## Lưu ý

- **Slug sản phẩm**: Tên file markdown (không có `.md`) sẽ là URL của sản phẩm
  - File: `tham-yoga.md` → URL: `/product/tham-yoga`
- **Ảnh sản phẩm**: Nên sử dụng ảnh chất lượng cao, tỷ lệ vuông (1:1) để hiển thị đẹp
- **Link mua hàng**: Có thể là link Shopee, Lazada, hoặc bất kỳ nền tảng nào
- **Thứ tự hiển thị**: Sản phẩm được sắp xếp theo `publishDate` (mới nhất lên đầu)

## Cấu trúc hiển thị

### Trang Shop (`/shop`)
- Hiển thị grid 3 cột (desktop)
- Hiển thị grid 2 cột (tablet)
- Hiển thị 1 cột (mobile)
- Mỗi card hiển thị: ảnh, tên, giá, mô tả ngắn
- 2 nút: "Thông tin chi tiết" và "Mua hàng"

### Trang chi tiết sản phẩm (`/product/[slug]`)
- Layout 2 cột: ảnh bên trái, thông tin bên phải
- Hiển thị đầy đủ: tên, giá, mô tả, category
- Nút "Mua ngay" nổi bật
- Nội dung markdown chi tiết phía dưới
- Nút "Quay lại Shop" ở cuối trang

## Xóa hoặc ẩn sản phẩm

- **Xóa sản phẩm**: Xóa file `.md` trong `/content/product/`
- **Ẩn tạm thời**: Đổi tên file thành `.draft.md` hoặc thêm dấu `.` ở đầu tên file
