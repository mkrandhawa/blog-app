import BlogCard from './BlogCard';
import { BlogPost } from '@/lib/types';

type BlogListProps = {
  title: string;
  subtitle: string;
  posts: BlogPost[];
};

export default function BlogList({ title, subtitle, posts }: BlogListProps) {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 p-4 mt-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              category={post.category}
              authorName={post.authorName}
              authorAvatar={post.authorAvatar}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </main>
  );
}