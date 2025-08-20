// app/components/BlogCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import { truncateWords } from '../lib/utils';

// Define the types for the component's props
type BlogCardProps = {
  slug: string;
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  authorAvatar: string;
  authorName: string;
  date: string;
};

export default function BlogCard({
  slug,
  imageUrl,
  category,
  title,
  excerpt,
  authorAvatar,
  authorName,
  date,
}: BlogCardProps) {
  return (
    <Link href={`/${category.toLowerCase()}/${slug}`} className="group mx-auto flex w-full max-w-sm">
      
      <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg duration-300 group-hover:scale-105 group-hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-700/40">
        
        <Image
          // Added 'flex-shrink-0' to prevent the image from shrinking
          className="h-56 w-full flex-shrink-0 object-cover object-center"
          src={imageUrl}
          alt={`Image for ${title}`}
          width={400}
          height={224}
        />
        
        {/* - Added 'flex', 'flex-col', and 'flex-grow' to this div.
          - This makes the content area expand to fill all available space.
        */}
        <div className="flex flex-grow flex-col p-6">
          {/* This inner div with 'flex-grow' pushes the author section to the bottom */}
          <div className="flex-grow">
            <span className="mb-2 block text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
              {category}
            </span>
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
              {title}
            </h2>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              {truncateWords(excerpt, 20)}
            </p>
          </div>

          {/* This section will now be aligned to the bottom of the card */}
          <div className="mt-auto flex items-center pt-4">
            <Image
              className="mr-4 h-10 w-10 rounded-full object-cover"
              src={authorAvatar}
              alt={`Avatar of ${authorName}`}
              width={40}
              height={40}
            />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">{authorName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}