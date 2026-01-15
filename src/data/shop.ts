export interface ShopItem {
    id: string;
    title: string;
    description: string;
    link: string;
    cta?: string;
    image?: string; // Optional custom image path
    autoImage?: boolean; // Default true - fetch from link's og:image
}

export const shopItems: ShopItem[] = [
    {
        id: "product-1",
        title: "Sản phẩm 1",
        description: "Sản phẩm chất lượng cao mà tôi đang sử dụng và giới thiệu.",
        link: "https://s.shopee.vn/2g4tyXfzvv",
        cta: "Xem sản phẩm",
        autoImage: true,
    },
    {
        id: "product-2",
        title: "Sản phẩm 2",
        description: "Một sản phẩm tuyệt vời khác mà tôi muốn chia sẻ với các bạn.",
        link: "https://s.shopee.vn/9fDxl9IOHj",
        cta: "Xem sản phẩm",
        autoImage: true,
    },
];
