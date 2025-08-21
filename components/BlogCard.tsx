'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { truncateWords } from '../lib/utils';
import type { StaticImageData } from 'next/image';

type BlogCardProps = {
  slug: string;
  imageUrl: string | StaticImageData;
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group relative mx-auto w-full max-w-sm">
      {/* Skeleton Loader - Absolutely positioned to be on top */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-xl bg-white shadow-lg animate-pulse dark:bg-gray-800">
          <div className="h-56 w-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="p-6 flex-grow flex flex-col">
            <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-600 rounded mb-3"></div>
            <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-500 rounded mb-4"></div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-600 rounded mt-2"></div>
            <div className="mt-auto flex items-center pt-4">
              <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-500 mr-4"></div>
              <div className="flex-grow">
                <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-500 rounded"></div>
                <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-600 rounded mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Real Card Content - Visually hidden but still in the layout */}
      <Link 
        href={`/${category.toLowerCase()}/${slug}`}
        className={`group flex w-full transition-opacity duration-300 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg duration-300 group-hover:scale-105 group-hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-700/40">
          <Image
            className="h-56 w-full flex-shrink-0 object-cover object-center"
            src={imageUrl || '/images/default.png'}
            alt={`Image for ${title}`}
            width={400}
            height={224}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
          
          <div className="flex flex-grow flex-col p-6">
            <div className="flex-grow">
              <span className="mb-2 block text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-400">
                {category}
              </span>
              <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                {title}
              </h2>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                {truncateWords(excerpt, 12)}
              </p>
            </div>

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
    </div>
  );
}