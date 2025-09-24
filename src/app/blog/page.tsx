import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <header className="mb-12 text-center">
        <div className="mb-6">
          <Image
            src="/dlw-logo.svg"
            alt="DLW Logo"
            width={240}
            height={180}
            priority
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
            priority
            className="inline-block w-5 h-5 md:w-6 md:h-6 align-text-bottom"
          />
          {' '}
          <span className="text-[#FF4500] font-semibold">Reddit</span>. You can find our product and company updates here too.
        </p>
      </header>

      <main>
          {posts.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col p-6 h-full">
                    <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                      {post.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </div>

                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        By {post.author}
                      </div>

                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="px-2 py-1 text-gray-500 dark:text-gray-500 text-xs">
                              +{post.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
      </main>
    </div>
  );
}

export const dynamic = 'force-static';