import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./_components/scroll-to-top";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
    title: "Giang Đinh - Developer • Writer • Creator",
    description: "Personal website of Giang Đinh - A developer passionate about technology",
    keywords: ["developer", "technology", "blog", "portfolio"],
    icons: {
        icon: [
            { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon/favicon.ico', sizes: 'any' }
        ],
        apple: [
            { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
        other: [
            { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png' },
            { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png' }
        ]
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className={inter.className}>
                {children}
                <ScrollToTop />
            </body>
        </html>
    );
}
