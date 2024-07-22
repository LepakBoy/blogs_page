import Link from 'next/link';
import React from 'react';
import BlogCard from '../components/blogCard/blogCard';
import TitlePage from '../components/molecule/titlePage';
import { getPosts } from '@/lib/data';

// GET DATA POSTS USING API
// const getData = async () => {
//   const res = await fetch('http://localhost:3000/api/blog', {
//     cache: 'default',
//   });

//   if (!res.ok) {
//     throw new Error('something went wrong');
//   }

//   return res.json();
// };

export default async function () {
  // GET DATA POST WITHOUT API
  const posts = await getPosts(); // const posts = await getData();
  return (
    <div>
      <div>
        <TitlePage title="Insights and Reflections: My Personal Journey" />
        <h3 className="text-center mx-auto font-bold text-2xl md:text-4xl py-9 md:py-14 w-[240px] md:w-[440px]">
          Not just an ordinary blog by{' '}
          <Link
            href="/"
            className="underline underline-offset-2 text-green-800"
          >
            Lepakboy
          </Link>
        </h3>
      </div>
      <section className="grid max-w-[1024px] mx-auto md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            header={post.title}
            desc={post.desc}
            img={post.img}
            slug={post.slug}
            labels={post.labels}
            // datePost={post.datePost as Date}
            datePost={post.createdAt as Date}
            key={post.title}
          />
        ))}
      </section>
      <div className="flex justify-center">
        <button className="my-20 mx-auto bg-emerald-800 py-3 px-7 text-slate-100 font-bold text-lg rounded-full">
          older post
        </button>
      </div>
    </div>
  );
}
