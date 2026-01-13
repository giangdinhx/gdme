# Hướng dẫn cập nhật nội dung Homepage

## Tổng quan

Nội dung trang chủ (Homepage) được lưu trong file `/content/about.md`. Bạn chỉ cần chỉnh sửa file này để cập nhật nội dung hiển thị trên trang chủ mà không cần động vào code.

## Cấu trúc file about.md

File sử dụng định dạng Markdown với một số cú pháp đặc biệt:

### 1. Frontmatter (Metadata)

```markdown
---
title: "Giới thiệu"
---
```

Phần này chứa metadata của trang. Hiện tại chỉ có `title` nhưng có thể mở rộng thêm.

### 2. Nội dung thông thường

Viết các đoạn văn bình thường, cách nhau bởi một dòng trống:

```markdown
Xin chào! Tôi là một developer đam mê công nghệ...

Trong quá khứ, tôi đã tham gia xây dựng nhiều dự án...
```

### 3. Links (Liên kết)

#### Link nội bộ (internal links):
```markdown
[viết blog](/posts)
```
Sử dụng đường dẫn bắt đầu bằng `/` cho các trang trong website.

#### Link ngoài hoặc anchor:
```markdown
[TechCorp](#)
[Google](https://google.com)
```

### 4. Chữ in đậm (Bold)

```markdown
**Hiện tại**, tôi đang tập trung...
```

### 5. Highlight Box (Hộp nổi bật)

Để tạo một hộp nổi bật với background màu khác:

```markdown
:::highlight
**Hiện tại**, tôi đang tập trung phát triển [NextGen Platform](#) - một công cụ giúp developers xây dựng ứng dụng nhanh hơn và hiệu quả hơn.
:::
```

## Ví dụ hoàn chỉnh

```markdown
---
title: "Giới thiệu"
---

Xin chào! Tôi là một developer đam mê công nghệ, hiện đang sống và làm việc tại Hà Nội. Tôi từng đồng sáng lập [TechCorp](#), nơi chúng tôi xây dựng các sản phẩm giúp hàng triệu người dùng.

:::highlight
**Hiện tại**, tôi đang tập trung phát triển [NextGen Platform](#) - một công cụ giúp developers xây dựng ứng dụng nhanh hơn và hiệu quả hơn.
:::

Ngoài coding, tôi thích [viết blog](/posts) về công nghệ, chia sẻ kinh nghiệm làm việc, và khám phá những xu hướng mới trong ngành.
```

## Lưu ý

- **Dòng trống**: Luôn để một dòng trống giữa các đoạn văn
- **Highlight**: Phải có `:::highlight` ở đầu và `:::` ở cuối (mỗi cái trên một dòng riêng)
- **Links**: Sử dụng `/` cho link nội bộ, URL đầy đủ cho link ngoài
- **Tự động reload**: Khi chạy `npm run dev`, thay đổi trong file sẽ tự động được cập nhật trên website

## Cách chỉnh sửa

1. Mở file `/content/about.md`
2. Chỉnh sửa nội dung theo cú pháp trên
3. Lưu file
4. Kiểm tra trang chủ tại `http://localhost:3000` (nếu đang chạy dev server)
5. Nếu đã deploy, commit và push lên repository để cập nhật

## Hỗ trợ

Nếu cần thêm tính năng markdown khác (như danh sách, hình ảnh, v.v.), vui lòng liên hệ developer để mở rộng parser.
