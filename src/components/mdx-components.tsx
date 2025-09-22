import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="my-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-2">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-sm font-mono text-gray-800 dark:text-gray-200">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 p-4 rounded-lg bg-gray-900 dark:bg-gray-950 overflow-x-auto">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-gray-300 dark:border-gray-700" />,
    a: ({ href, children }) => (
      <Link
        href={href || '#'}
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {children}
      </Link>
    ),
    img: ({ src, alt, ...props }) => {
      if (!src) return null;

      // Handle relative paths for blog assets
      const imageSrc = src.startsWith('/') ? src : `/blog-assets/${src}`;

      // Parse alt text for size parameter (format: "alt text|size:small" or "alt text|width:400")
      let altText = alt || '';
      let imageWidth = 800;
      let imageHeight = 400;
      let sizeClass = 'w-full';

      if (alt && alt.includes('|')) {
        const [text, ...params] = alt.split('|');
        altText = text.trim();

        params.forEach((param: string) => {
          const [key, value] = param.split(':');
          if (key === 'size') {
            switch(value) {
              case 'small':
                sizeClass = 'max-w-sm';
                imageWidth = 400;
                imageHeight = 300;
                break;
              case 'medium':
                sizeClass = 'max-w-md';
                imageWidth = 600;
                imageHeight = 400;
                break;
              case 'large':
                sizeClass = 'max-w-2xl';
                imageWidth = 800;
                imageHeight = 500;
                break;
            }
          } else if (key === 'width') {
            imageWidth = parseInt(value) || 800;
            sizeClass = ``;
            imageHeight = Math.round(imageWidth * 0.625); // Maintain aspect ratio
          }
        });
      }

      return (
        <figure className="my-8 flex flex-col items-center">
          <div className={sizeClass}>
            <Image
              src={imageSrc}
              alt={altText}
              width={imageWidth}
              height={imageHeight}
              className="rounded-lg h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
              {...props}
            />
          </div>
          {altText && (
            <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic text-center max-w-2xl">
              {altText}
            </figcaption>
          )}
        </figure>
      );
    },
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
        {children}
      </tbody>
    ),
    tr: ({ children }) => <tr>{children}</tr>,
    th: ({ children }) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
        {children}
      </td>
    ),
    ...components,
  };
}