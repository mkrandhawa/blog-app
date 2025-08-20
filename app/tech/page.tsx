import BlogList from "@/components/BlogList";
import { techPosts } from "@/lib/data/techPosts";


export default function TechPage() {
    return (
        <BlogList 
            title= 'Tech Articles'
            subtitle= 'The latest news and analysis on software development, AI, and emerging technologies.'
            posts={techPosts}
        />
        
    );
}


