'use client';
import InputFormComponent from '@/app/components/molecule/inputForm';
import { addPost } from '@/lib/data';
import { IPost } from '@/lib/interfaces';
import React, { useRef, useState } from 'react';
import { Editor as PrimeEditor } from 'primereact/editor';
import { Editor } from 'primereact/editor';

type FormHandler = (formData: FormData) => void;

export default function InputForm() {
  const ref = useRef<HTMLFormElement>(null);
  const editorRef = useRef<PrimeEditor>(null);
  const [paraf, setParaf] = useState('');

  const handleWrappedSubmit: FormHandler = (formData: FormData) => {
    const post: IPost = convert(formData);
    addPost(post as IPost);
    ref.current?.reset();
    editorRef.current?.getQuill().setText('');
  };

  const convert = (formData: FormData): IPost => {
    return {
      title: formData.get('title') as string,
      header: formData.get('header') as string,
      // desc: formData.get('desc') as string,
      desc: paraf,
      img: formData.get('img') as string,
      slug: formData.get('slug') as string,
      labels: formData.get('labels') as string,
    } as IPost;
  };

  return (
    <section className="py-16 md:w-3/4 mx-auto">
      <form
        ref={ref}
        id="inputBlog"
        className="flex flex-col gap-6"
        action={handleWrappedSubmit}
        // action={addPost}
      >
        <InputFormComponent
          name="title"
          placeholder="Title"
          type="text"
        />
        <InputFormComponent
          name="header"
          placeholder="Header of content"
          type="text"
        />
        <InputFormComponent
          name="img"
          placeholder="Image name"
          type="text"
        />
        <InputFormComponent
          name="slug"
          placeholder="Slug name"
          type="text"
        />
        <InputFormComponent
          name="label"
          placeholder="Labels"
          type="text"
        />
        <Editor
          name="desc"
          // value=""
          placeholder="Write your awesome article here.."
          ref={editorRef}
          onTextChange={(e) => setParaf(e.htmlValue as string)}
          style={{ height: '460px', fontSize: '16px' }}
        />

        <button
          type="submit"
          className="my-20 mx-auto bg-emerald-800 py-3 px-7 text-slate-100 font-bold text-lg rounded-full"
        >
          Post!
        </button>
      </form>
    </section>
  );
}
