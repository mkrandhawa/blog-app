'use client';

import Link from 'next/link';
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Type for a featured post
type FeaturedPost = {
  slug: string;
  title: string;
  category: string
};

const featuredPosts: FeaturedPost[] = [
  { slug: 'how-to-boost-efficiency', category:'productivity',title: `How to boost your team's efficiency`},
  { slug: 'webassembly-the-future-of-web-performance', category:'tech', title: 'WebAssembly: The Future of Web Performance' },
  { slug: 'finding-your-professional-network', category: 'communities',title: 'How to find your professional network' },
];

export default function FeaturedSlider() {
  return (
    <div className="mt-10 w-full max-w-xl text-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-24" // Set a container height
      >
        {featuredPosts.map((post) => (
          <SwiperSlide key={post.slug}>
            <Link
              href={`/${post.category}/${post.slug}`}
              className="block text-lg font-semibold text-black transition-opacity hover:opacity-80 sm:text-xl"
            >
              {post.title}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}