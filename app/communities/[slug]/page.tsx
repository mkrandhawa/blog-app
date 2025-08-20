import Link from 'next/link';
import { notFound } from 'next/navigation';
import { communitiesPosts } from '@/lib/data/communitiesPosts'; 
import ReactMarkdown from 'react-markdown'; 
import remarkGfm from 'remark-gfm'; 
import remarkBreaks from "remark-breaks";


export function generateStaticParams() {
  return communitiesPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function CommunitiesPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 
  const post = communitiesPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }
  
  return (
    <main className='min-h-screen bg-gray-100 p-8'>
      <div className="max-w-4xl mx-auto mx-auto flex max-w-7xl flex-col items-start gap-4 p-4 mt-10">
        <Link href="/communities" className="text-blue-600 hover:underline">
            &larr; Back to Communities Articles
        </Link>
        <article className="mt-4  p-8 rounded-lg">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{post.title}</h1>
          
          <div className="prose lg:prose-xl max-w-none text-gray-600">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}