import { getAllPosts } from "../lib/api";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="flex-grow w-full max-w-[900px] mx-auto px-6 pt-32 pb-20">
      <section className="mb-24 pl-0 md:pl-28">
        <h2 className="text-2xl md:text-3xl font-semibold text-text-main dark:text-white mb-3 tracking-tight">
          Writings
        </h2>
        <p className="text-text-muted dark:text-zinc-500 font-light text-lg max-w-lg leading-relaxed">
          Thoughts on code, endurance, and kindness.
        </p>
      </section>

      <div className="flex flex-col gap-16">
        {allPosts.map((post) => {
          const date = parseISO(post.date);
          return (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <article className="group flex items-center gap-4 md:gap-10 cursor-pointer">
                <div className="hidden md:block w-16 shrink-0 text-right">
                  <span className="text-[11px] font-medium text-gray-300 dark:text-zinc-700 font-mono uppercase">
                    {format(date, "MMM d")}
                  </span>
                </div>
                <div className="flex items-center gap-6 flex-1 relative">
                  {post.coverImage ? (
                    <div className="h-6 w-6 rounded-full overflow-hidden shrink-0 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 hidden sm:block">
                      <img
                        alt={post.title}
                        className="h-full w-full object-cover"
                        src={post.coverImage}
                      />
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full shrink-0 hidden sm:block"></div>
                  )}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg md:text-xl font-medium text-text-main dark:text-zinc-200 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 md:hidden">
                      <span className="text-[10px] text-gray-400 dark:text-zinc-600 font-mono uppercase">
                        {format(date, "MMM d")}
                      </span>
                      <span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
                      <span className="text-[10px] text-gray-400 dark:text-zinc-600 uppercase tracking-wide">
                        Tech
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-300 dark:text-zinc-700">
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      <div className="mt-24 pl-0 md:pl-28">
        <button className="text-xs font-medium text-text-muted hover:text-text-main dark:text-zinc-600 dark:hover:text-white flex items-center gap-3 transition-colors">
          VIEW ARCHIVE
          <span className="material-symbols-outlined text-sm">
            arrow_right_alt
          </span>
        </button>
      </div>

      <section className="w-full py-12 px-6 border-t border-gray-100 dark:border-zinc-900 mt-12">
        <div className="max-w-[400px] mx-auto text-center">
          <h3 className="text-sm font-medium text-text-main dark:text-zinc-300 mb-6">
            Stay updated
          </h3>
          <form className="flex gap-2 border-b border-gray-200 dark:border-zinc-800 pb-2 focus-within:border-primary transition-colors">
            <input
              className="flex-1 bg-transparent border-none p-0 text-sm text-text-main dark:text-white placeholder-gray-300 dark:placeholder-zinc-700 focus:ring-0"
              placeholder="Email address"
              required
              type="email"
            />
            <button
              className="text-xs font-semibold text-text-muted hover:text-primary dark:text-zinc-500 dark:hover:text-white transition-colors"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
