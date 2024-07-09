import TitlePage from '@/app/components/molecule/titlePage';
import { getPostBySlug } from '@/lib/data';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getData = async (slug: string) => {
  const res = getPostBySlug(slug);
  return res;
};

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getData(slug);
  // console.log(post, 'poost');

  return (
    <section className="pb-20">
      <TitlePage title={post?.slug as string} />
      <h5 className="text-center text-sm md:text-xl font-semibold mb-2 md:mb-4">
        <Link
          href="/"
          className="underline text-emerald-800 font-bold"
        >
          Lepakboy
        </Link>
        <span className="mx-3">-</span>
        {moment(post?.createdAt).format('MMM DD, YYYY') as string}
      </h5>
      <h2 className="text-2xl md:text-5xl font-semibold text-center my-4 md:my-7">
        {post?.title}
      </h2>
      <h4 className="text-l font-medium text-center my-4 md:my-7 md:text-xl md:w-3/4 mx-auto">
        {post?.header}
      </h4>
      <Image
        className="mx-auto w-full md:w-3/4"
        src={`/images${post?.img}`}
        height={200}
        width={200}
        alt="blog_image"
      />
      <div className="text-base md:text-lg md:w-3/4 mx-auto my-20 md:my-32">
        <div
          className="first-letter:text-7xl first-letter:float-left first-letter:font-extrabold first-letter:mr-3"
          dangerouslySetInnerHTML={{ __html: post?.desc as string }}
        />
      </div>
    </section>
  );
}
