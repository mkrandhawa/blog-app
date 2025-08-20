import BlogList from '@/components/BlogList';
import { prodPosts } from '@/lib/data/productivityPosts';



export default function ProductivityPage() {
return (
    <BlogList
      title="Productivity Articles"
      subtitle="The latest articles on how you can improve your productivity."
      posts={prodPosts}
    />
);
}


