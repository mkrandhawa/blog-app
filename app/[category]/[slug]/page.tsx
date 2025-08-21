import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByCategory, allPosts } from '@/lib/data';
import ReactMarkdown from 'react-markdown'; 
import remarkGfm from 'remark-gfm'; 

// This function tells Next.js all the possible pages to build
export async function generateStaticParams() {
  // Return an array of all possible { category, slug } combinations
  return allPosts.map((post) => ({
    category: post.category.toLowerCase(),
    slug: post.slug,
  }));
}

export default async function GenericPostPage({ params }: { params: Promise<{ category: string, slug: string } >}) {
  const { category, slug } = await params;

  //Get the correct array of posts based on the category
  const posts = getPostsByCategory(category);

  //Find the specific post from that array
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // If post doesn't exist, show 404
  }
  
  return (
    <main className='min-h-screen bg-gray-100 p-8'>
      <div className="max-w-4xl mx-auto mx-auto flex max-w-7xl flex-col items-start gap-4 p-4 mt-10">
        <div className="mb-8">
          <Link href={`/${category}`} className="text-blue-600 hover:underline capitalize">
            &larr; Back to {category} Articles
          </Link>
        </div>
        <article className="mt-4 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{post.title}</h1>
          <div className="prose lg:prose-xl max-w-none text-gray-600">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}