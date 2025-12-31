import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Next.js Blog Example with ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 font-display antialiased flex flex-col min-h-screen selection:bg-gray-100 dark:selection:bg-gray-800`}
      >
        <header className="fixed top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md transition-colors">
          <div className="max-w-[900px] mx-auto px-6 h-20 flex items-center justify-between">
            <a
              className="flex items-center gap-3 group opacity-80 hover:opacity-100 transition-opacity"
              href="/"
            >
              <span className="material-symbols-outlined text-xl text-text-main dark:text-white group-hover:text-primary transition-colors">
                terminal
              </span>
              <span className="font-medium text-sm tracking-wide text-text-main dark:text-white">
                giangdinh.me
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-10">
              <a
                className="text-xs font-medium text-text-muted hover:text-text-main dark:text-gray-500 dark:hover:text-white uppercase tracking-widest transition-colors"
                href="#"
              >
                About
              </a>
              <a
                className="text-xs font-medium text-text-muted hover:text-text-main dark:text-gray-500 dark:hover:text-white uppercase tracking-widest transition-colors"
                href="#"
              >
                Tech
              </a>
              <a
                className="text-xs font-medium text-text-muted hover:text-text-main dark:text-gray-500 dark:hover:text-white uppercase tracking-widest transition-colors"
                href="#"
              >
                Training
              </a>
              <a
                className="text-xs font-medium text-text-muted hover:text-text-main dark:text-gray-500 dark:hover:text-white uppercase tracking-widest transition-colors"
                href="#"
              >
                Charity
              </a>
            </nav>
            <button className="md:hidden text-text-main dark:text-white opacity-60 hover:opacity-100">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        {children}

        <footer className="w-full py-12 px-6">
          <div className="max-w-[900px] mx-auto flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
              <a
                className="text-text-main dark:text-zinc-400 hover:text-primary transition-colors"
                href="#"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                className="text-text-main dark:text-zinc-400 hover:text-primary transition-colors"
                href="#"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
            <div className="text-[10px] text-gray-300 dark:text-zinc-700 uppercase tracking-widest">
              © 2024 Giang Dinh
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
