import Link from 'next/link';
import React from 'react';
import BlogCard from '../components/blogCard/blogCard';

export default function () {
  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-8xl font-extrabold text-center py-4 md:py-14">
          Life styles
        </h1>
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
      <section className="grid md:grid-cols-2 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
      <div className="flex justify-center">
        <button className="my-20 mx-auto bg-emerald-800 py-3 px-7 text-slate-100 font-bold text-lg rounded-full">
          older post
        </button>
      </div>
    </div>
  );
}
