'use client';

import React from 'react';
import TitlePage from '../components/molecule/titlePage';
import { addPost } from '@/lib/data';
import { IPost } from '@/lib/interfaces';

type FormHandler = (formData: FormData) => void;

const handleWrappedSubmit: FormHandler = (formData: FormData) => {
  const post: IPost = convert(formData);
  addPost(post as IPost);
};

const convert = (formData: FormData): IPost => {
  return {
    title: formData.get('title') as string,
    header: formData.get('header') as string,
    desc: formData.get('desc') as string,
    img: formData.get('img') as string,
    slug: formData.get('slug') as string,
    labels: formData.get('labels') as string,
  } as IPost;
};
export default function AdminPage() {
  return (
    <div>
      <TitlePage title="Post your article" />
      <section className="py-16 md:w-3/4 mx-auto">
        <form
          id="inputBlog"
          className="flex flex-col gap-6"
          action={handleWrappedSubmit}
          // action={addPost}
        >
          <input
            placeholder="Title"
            type="text"
            name="title"
            className="p-3 border-solid border border-gray-600 rounded-lg"
          />
          <input
            placeholder="Header of content"
            type="text"
            name="header"
            className="p-3 border-solid border border-gray-600 rounded-lg"
          />
          <input
            placeholder="Image name"
            type="text"
            name="img"
            className="p-3 border-solid border border-gray-600 rounded-lg"
          />
          <input
            placeholder="Slug name"
            type="text"
            name="slug"
            className="p-3 border-solid border border-gray-600 rounded-lg"
          />
          <input
            placeholder="Labels"
            type="text"
            name="labels"
            // value={['a', 'b']}
            className="p-3 border-solid border border-gray-600 rounded-lg"
          />
          <textarea
            name="desc"
            placeholder="Your article"
            className="p-3 border-solid border border-gray-600 rounded-lg"
            id=""
            rows={20}
          />
          <button
            type="submit"
            className="my-20 mx-auto bg-emerald-800 py-3 px-7 text-slate-100 font-bold text-lg rounded-full"
          >
            Post!
          </button>
        </form>
      </section>
    </div>
  );
}
