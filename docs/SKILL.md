---
name: landing-page-planner
description: >
  Tạo kế hoạch landing page với content thực, sẵn sàng để implement.
  Đọc brand voice và audience từ Project Knowledge.
  Triggers: tạo landing page, plan landing page, /landingpage
---

# Landing Page Planner

## Mục đích

Tạo kế hoạch landing page hoàn chỉnh với:
- Content thực (không phải placeholder)
- Structure rõ ràng
- Copy đã viết sẵn

**Output:** File markdown có thể đưa cho designer/developer implement ngay.

---

## Phase 0: Brand Context (LUÔN CHẠY TRƯỚC)

```
TRƯỚC KHI làm bất cứ gì:

1. CHECK Project Knowledge cho brand files:
   
   NẾU có brand-voice.md:
       → Đọc file
       → Extract: tone, xưng hô, từ ngữ dùng/tránh
       → Note: "Đã đọc brand voice"
   
   NẾU có audience-profiles.md:
       → Đọc file
       → Extract: segments, pain points, desires
       → Dùng cho copy messaging
   
   NẾU có brand-identity.md:
       → Đọc file
       → Extract: USP, positioning
       → Dùng cho headline, value props
   
   NẾU có brand-assets.md:
       → Đọc file
       → Extract: CTAs, links, hashtags
       → Apply vào CTA sections
   
   NẾU có visual-style.md hoặc image-generation-guide.md:
       → Đọc file
       → Include visual suggestions trong design notes

2. NẾU không có brand files:
       → Thu thập thông tin tối thiểu (xem Brand Context section)
```

---

## Brand Context

```
NẾU đang trong Claude Project có brand files:
    → Đọc từ Project Knowledge:
      - brand-voice.md → Tone, style cho copy
      - audience-profiles.md → Pain points, desires cho messaging
      - brand-identity.md → USP, positioning
    → Áp dụng vào landing page content

NẾU không có brand context:
    → Thu thập thông tin tối thiểu:
      1. "Sản phẩm/dịch vụ này là gì?"
      2. "Khách hàng mục tiêu là ai?"
      3. "Vấn đề chính bạn giải quyết?"
      4. "Điểm khác biệt so với đối thủ?"
      5. "Tone bạn muốn: formal/casual/friendly/professional?"
```

---

## Quy trình

```
┌─────────────────────────────────────────────────────────────┐
│                  LANDING PAGE PLANNER                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Step 1: CONTEXT — Thu thập/đọc brand context               │
│      ↓                                                      │
│  Step 2: GOAL — Xác định mục tiêu landing page              │
│      ↓                                                      │
│  Step 3: STRUCTURE — Chọn layout phù hợp                    │
│      ↓                                                      │
│  Step 4: CONTENT — Viết copy cho từng section               │
│      ↓                                                      │
│  Step 5: OUTPUT — Xuất file hoàn chỉnh                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Context

```
KIỂM TRA Project Knowledge:
    → Có brand-voice.md? → Đọc tone guidelines
    → Có audience-profiles.md? → Đọc pain points, desires
    → Có brand-identity.md? → Đọc USP, positioning

NẾU thiếu thông tin quan trọng:
    → Hỏi bổ sung (từng câu một)
```

---

## Step 2: Goal

Hỏi user:

| Cần biết | Câu hỏi |
|----------|---------|
| Mục tiêu chính | "Landing page này để làm gì? (Bán hàng / Thu lead / Giới thiệu / Đăng ký event...)" |
| CTA chính | "Hành động bạn muốn visitor làm là gì?" |
| Traffic source | "Visitor đến từ đâu? (Ads / Organic / Email / Social...)" |

---

## Step 3: Structure

### Các layout phổ biến

#### Layout A: Sales Page (Bán hàng)
```
1. Hero: Headline + Subheadline + CTA
2. Problem: Pain points khách đang gặp
3. Solution: Sản phẩm giải quyết thế nào
4. Features/Benefits: 3-5 điểm nổi bật
5. Social Proof: Testimonials, logos, số liệu
6. Pricing: Bảng giá hoặc offer
7. FAQ: Giải đáp objections
8. Final CTA: Urgency + CTA
```

#### Layout B: Lead Gen (Thu lead)
```
1. Hero: Headline + Form ngắn
2. Value Prop: Họ sẽ nhận được gì
3. Benefits: 3 lý do nên đăng ký
4. Social Proof: Testimonials ngắn
5. Form repeat: CTA + Form
```

#### Layout C: Event/Webinar
```
1. Hero: Tên event + Date/Time + CTA
2. What You'll Learn: 3-5 takeaways
3. Who Should Attend: Target audience
4. Speaker/Host: Bio ngắn
5. Agenda: Outline nội dung
6. Registration: Form + CTA
```

```
SAU KHI user chọn mục tiêu (Step 2):
    → Đề xuất layout phù hợp
    → Hỏi: "Layout này okay không? Muốn thêm/bớt section nào?"
```

---

## Step 4: Content

### Viết copy cho từng section

#### Hero Section
```markdown
**Headline:** [Benefit chính - max 10 từ]
**Subheadline:** [Giải thích thêm - max 20 từ]
**CTA Button:** [Action verb + benefit - max 5 từ]
**Supporting:** [Social proof ngắn hoặc urgency - 1 dòng]
```

#### Problem Section
```markdown
**Section headline:** [Gọi tên vấn đề]
**Pain points:**
- [Pain 1 - cụ thể, relatable]
- [Pain 2]
- [Pain 3]
**Transition:** [Câu chuyển sang solution]
```

#### Solution Section
```markdown
**Section headline:** [Giới thiệu solution]
**Description:** [2-3 câu mô tả cách giải quyết]
**Visual suggestion:** [Mô tả hình ảnh/video nên dùng]
```

#### Features/Benefits
```markdown
**Feature 1:**
- Headline: [Benefit-focused]
- Description: [1-2 câu]
- Icon suggestion: [Mô tả icon]

**Feature 2:**
[Tương tự...]
```

#### Social Proof
```markdown
**Testimonial 1:**
- Quote: "[...]"
- Name: [...]
- Title/Company: [...]
- Photo: [Cần ảnh thật]

**Numbers:** (nếu có)
- [X]+ [metric]
- [Y]% [result]
```

#### CTA Section
```markdown
**Headline:** [Urgency hoặc benefit recap]
**CTA Button:** [Cùng text với hero CTA]
**Risk reversal:** [Guarantee, free trial, etc.]
```

---

## Step 5: Output

### Template file output

```markdown
# Landing Page Plan: [Tên]

**Goal:** [Mục tiêu]
**Target CTA:** [Hành động mong muốn]
**Brand:** [Tên brand]

---

## Section 1: Hero

### Content
- **Headline:** [...]
- **Subheadline:** [...]
- **CTA:** [...]
- **Supporting:** [...]

### Design Notes
- [Gợi ý về visual, layout]

---

## Section 2: [Tên section]

### Content
[Copy đã viết]

### Design Notes
[Gợi ý visual]

---

[Tiếp tục cho các sections khác...]

---

## Technical Notes

- **Form fields:** [Liệt kê fields cần thu thập]
- **Integrations:** [Email service, CRM, etc.]
- **Tracking:** [Events cần track]

---

## Copy Checklist

- [ ] Headline dưới 10 từ
- [ ] Subheadline dưới 20 từ
- [ ] CTA rõ ràng, action-oriented
- [ ] Social proof có tên + ảnh thật
- [ ] Mobile-friendly (copy ngắn gọn)
```

---

## Tự Kiểm Tra

```
□ Đã có brand context chưa?
  → Từ Project Knowledge HOẶC thu thập từ user
  → Không viết copy mà không có brand voice

□ Mục tiêu landing page rõ ràng chưa?
  → Biết CTA chính là gì

□ Copy có thực không?
  → KHÔNG dùng placeholder như "[Insert headline here]"
  → Phải viết content thật, sẵn sàng dùng

□ Tone consistent không?
  → Tất cả sections cùng brand voice

□ Có design notes không?
  → Gợi ý visual để designer hiểu intent

□ Actionable không?
  → File output có thể đưa cho designer/dev implement ngay

□ Đã check learned patterns chưa?
  → Đọc references/learned-patterns.md trước khi chọn structure
```

---

## Self-Learning

### File lưu patterns

> `references/learned-patterns.md` — Skill tự động cập nhật file này

### Khi nào ghi nhận

```
SAU KHI output landing page plan, NẾU user chỉnh sửa:
    → Phân tích: User thay đổi gì?
      - Thêm/bớt sections nào?
      - Headline style (ngắn hơn/dài hơn)?
      - CTA wording preference?
      - Có luôn cần FAQ không?
      - Social proof style?
    → Ghi vào references/learned-patterns.md

NẾU user chọn layout khác với đề xuất:
    → Ghi nhận layout preference cho loại goal đó
```

### Format ghi nhận

```markdown
## Learned Patterns

| Date | Pattern | Context | Action |
|------|---------|---------|--------|
| YYYY-MM-DD | [Mô tả pattern] | [User nói/làm gì] | [Skill sẽ làm gì] |
```

### Ví dụ patterns

| Date | Pattern | Context | Action |
|------|---------|---------|--------|
| 2026-01-14 | Luôn có FAQ | User thêm FAQ vào mọi page | Include FAQ trong default structure |
| 2026-01-14 | Headline max 7 từ | User rút ngắn headlines | Viết headline ≤7 từ |
| 2026-01-14 | No pricing section | User bỏ pricing, để "contact" | Thay pricing bằng contact CTA |
| 2026-01-14 | Video hero | User muốn video thay image | Suggest video trong hero section |
| 2026-01-14 | 3 testimonials | User nói "3 là đủ" | Giới hạn 3 testimonials |

### Trước khi execute

```
LUÔN đọc references/learned-patterns.md (nếu có) trước khi đề xuất structure

NẾU có patterns relevant:
    → Apply vào structure đề xuất
    → Mention: "Based on your preferences, mình đã include FAQ và limit 3 testimonials"

NẾU làm landing page cho goal mới (chưa có pattern):
    → Dùng default structure
    → Học từ feedback của lần này
```

### Cách user reset patterns

```
NẾU user nói "reset preferences" hoặc "làm như mặc định":
    → Bỏ qua learned-patterns.md cho lần này
    → Hỏi: "Muốn reset vĩnh viễn hay chỉ lần này?"
```
