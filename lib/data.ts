import { techPosts } from './data/techPosts';
import { communitiesPosts } from './data/communitiesPosts';
import { prodPosts } from './data/productivityPosts';
import { BlogPost } from './types';

// This function gets the correct posts array based on the category
export function getPostsByCategory(category: string): BlogPost[] {
  switch (category) {
    case 'tech':
      return techPosts;
    case 'communities':
      return communitiesPosts;
    case 'productivity':
      return prodPosts;
    default:
      return []; // Return an empty array if the category doesn't exist
  }
}

// Combine all posts for generating static paths
export const allPosts = [...techPosts, ...communitiesPosts, ...prodPosts];