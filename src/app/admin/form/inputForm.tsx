'use client';
import InputFormComponent from '@/app/components/molecule/inputForm';
import { addPost } from '@/lib/data';
import { IPost } from '@/lib/interfaces';
import React, { useRef, useState } from 'react';
import { Editor as PrimeEditor } from 'primereact/editor';
import { Editor } from 'primereact/editor';
import { Chips } from 'primereact/chips';
import { formMandatory } from '@/helper/blogForm';

type FormHandler = (formData: FormData) => void;

export default function InputForm() {
  const ref = useRef<HTMLFormElement>(null);
  const editorRef = useRef<PrimeEditor>(null);
  const [paraf, setParaf] = useState<string>('');
  const [labels, setLabels] = useState<string[]>([]);
  const [emptyField, setEmptyField] = useState<string[]>([]);

  const handleWrappedSubmit: FormHandler = (formData: FormData) => {
    //  check for empty field on form
    // if (formMandatory(convert(formData))) {
    //   alert('there is empty field');
    //   setEmptyField(formMandatory(convert(formData)));
    //   console.log(paraf);
    //   return;
    // }

    const post: IPost = convert(formData);
    addPost(post as IPost);
    ref.current?.reset();
    editorRef.current?.getQuill().setText('');
  };

  const convert = (formData: FormData): IPost => {
    return {
      title: formData.get('title') as string,
      header: formData.get('header') as string,
      desc: paraf,
      img: formData.get('img') as string,
      slug: formData.get('slug') as string,
      labels: formData.get('labels') as string,
    } as IPost;
  };

  return (
    <section className="py-16 md:w-3/4 mx-auto">
      <p className="text-lg font-bold text-emerald-800 mb-6">
        Make sure to complete all fields
      </p>

      <form
        ref={ref}
        id="inputBlog"
        className="flex flex-col gap-6 p-chips"
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

        {/* <Chips
          value={labels}
          onChange={(e) => setLabels(e.value as string[])}
          separator=","
        /> */}

        <Editor
          name="desc"
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
