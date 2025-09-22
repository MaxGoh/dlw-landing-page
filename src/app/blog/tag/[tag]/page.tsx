import Link from 'next/link';
import { Metadata } from 'next';
import { getAllTags, getPostsByTag } from '@/lib/blog';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export async function generateMetadata(
  { params }: TagPageProps
): Promise<Metadata> {
  const { tag } = await params;

  return {
    title: `Posts tagged "${tag}"`,
    description: `All blog posts tagged with ${tag}`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const allTags = getAllTags();

  return (
    <div>
      <header className="mb-12">
        <Link
          href="/blog"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-4 inline-block"
        >
          ← Back to Blog
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Tag: {tag}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} tagged with "{tag}"
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              All Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {allTags.map((t) => (
                <Link
                  key={t}
                  href={`/blog/tag/${t}`}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    t === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-3">
          {posts.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              No posts found with this tag.
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
                      {post.tags.map((postTag) => (
                        <span
                          key={postTag}
                          className={`px-2 py-1 rounded text-xs ${
                            postTag === tag
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                          }`}
                        >
                          {postTag}
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