// components/CreatePostForm.tsx
'use client';

import type { User } from 'next-auth'; // Import the User type
import { createPost } from '@/lib/actions';

export default function CreatePostForm({ user }: { user: User }) {
  const currentDate = new Date().toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <form action={createPost} className="w-full max-w-3xl mt-8 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a New Post</h2>
      
      <div className="space-y-6">
        {/* --- Hidden fields for data we already have --- */}
        <input type="hidden" name="authorName" value={user.name ?? 'Anonymous'} />
        <input type="hidden" name="authorAvatar" value={user.image ?? ''} />
        <input type="hidden" name="date" value={currentDate} />

        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            placeholder='John Smith'
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-800 p-4"
          />
        </div>

        {/* --- Two-column layout for Slug and Category --- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Slug Field */}
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
              Slug (URL-friendly-name)
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              required
              placeholder='example-post-name'
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-800 p-4"
            />
          </div>
          {/* Category Field */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              id="category"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-800 p-4"
            >
              <option value="">Select a category</option>
              <option value="Tech">Tech</option>
              <option value="Communities">Communities</option>
              <option value="Productivity">Productivity</option>
            </select>
          </div>
        </div>
        
        {/* Excerpt Field */}
        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
            Excerpt (A short summary of the post)
          </label>
          <textarea
            name="excerpt"
            id="excerpt"
            required
            rows={3}
            placeholder='This post is about...'
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-800 p-4"
          ></textarea>
        </div>

        {/* Content Field */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content (Markdown)
          </label>
          <textarea
            name="content"
            id="content"
            required
            rows={12}
            placeholder='Today it has become .....'
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-800 p-4"
          ></textarea>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Post
        </button>
      </div>
    </form>
  );
}