import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getAllTags } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div>
      <header className="mb-12 text-center">
        <div className="mb-6">
          <Image
            src="/dlw-logo.svg"
            alt="DLW Logo"
            width={240}
            height={180}
            className="mx-auto"
          />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Welcome to the Do Less Work Blog, we will share everything relating to Marketing, especially on{' '}
          <Image
            src="/reddit.svg"
            alt="Reddit logo"
            width={24}
            height={24}
            className="inline-block w-5 h-5 md:w-6 md:h-6 align-text-bottom"
          />
          {' '}
          <span className="text-[#FF4500] font-semibold">Reddit</span>. You can find our product and company updates here too.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-3">
          {posts.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0"
                >
                  <Link href={`/blog/${post.slug}`} className="group">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                    <span>·</span>
                    <span>By {post.author}</span>
                  </div>

                  {post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}