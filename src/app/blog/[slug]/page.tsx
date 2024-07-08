import { getPostBySlug } from '@/lib/data';
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
  console.log(post, 'post slug');
  return <div>{post?.title}</div>;
}
