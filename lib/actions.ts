// lib/actions.ts
'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { BlogPost } from './types';

import { techPosts } from './data/techPosts';
import { communitiesPosts } from './data/communitiesPosts';
import { prodPosts } from './data/productivityPosts';

export async function createPost(formData: FormData) {
  // 1. Extract the data from the form
  const newPost: BlogPost = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    category: formData.get('category') as string,
    imageUrl: '/images/default.png',
    excerpt: formData.get('excerpt') as string,
    content: formData.get('content') as string,
    authorName: formData.get('authorName') as string,
    authorAvatar: formData.get('authorAvatar') as string,
    date: formData.get('date') as string,
  };

  // "Save" the new post to the correct array
  switch (newPost.category.toLowerCase()) {
    case 'tech':
        techPosts.unshift(newPost); // unshift adds to the beginning
        console.log('Tech posts array updated. New count:', techPosts.length); // <-- ADD THIS

         break;
    case 'communities':
        communitiesPosts.unshift(newPost);
        console.log('Communities posts array updated. New count:', communitiesPosts.length); // <-- ADD THIS

        break;
    case 'productivity':
        prodPosts.unshift(newPost);
        console.log('Productivity posts array updated. New count:', prodPosts.length); // <-- ADD THIS

        break;
    default:
      // Handle unknown category if necessary
      break;
  }

  revalidatePath(`/${newPost.category.toLowerCase()}`);

  // Redirect the user to the new post's page
  redirect(`/${newPost.category.toLowerCase()}`);
}