import BlogList from "@/components/BlogList";
import { communitiesPosts } from "@/lib/data/communitiesPosts";


export default function CommunitiesPage(){
    return(
        
        <BlogList 
            title='Best communitites to join'
            subtitle='The latest communities that can help you achieve the best'
            posts={communitiesPosts}
        
        />
    )

}