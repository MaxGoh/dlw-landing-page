import Link from 'next/link';
import { getAllPosts, getAllTags } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div>
      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Insights, tutorials, and updates from our team
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