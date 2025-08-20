// app/posts/[slug]/page.tsx
import { posts, Post } from '@/data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// This function tells Next.js which slugs to pre-render at build time
/***
 * This special function tells Next.js to look at our posts data and pre-build a static HTML page for each one at build time. 
 * This is the heart of Static Site Generation (SSG) for dynamic routes.
 */
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


/***
 * params Prop: The PostPage component automatically receives params from Next.js, which contains the slug from the URL.
 */
export default function PostPage({ params }: { params: { slug: string } }) {
  // Find the specific post based on the slug from the URL
  const post = posts.find((post) => post.slug === params.slug);

  // If no post is found, show the 404 page
  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-8 sm:p-24 bg-gray-50">
        <Link href="/" className="text-blue-600 hover:underline"> 
            &larr; Back to all posts
        </Link>
      <article className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{post.title}</h1>
        <div className="prose lg:prose-xl text-gray-700">
          {/* In a real blog, you would render Markdown here */}
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}