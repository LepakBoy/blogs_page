'use client';
import InputText from '@/app/components/molecule/inputText';
import { addPost } from '@/lib/data';
import { IPost } from '@/lib/interfaces';
import React, { useEffect, useRef, useState } from 'react';
import { Editor as PrimeEditor } from 'primereact/editor';
import { Editor } from 'primereact/editor';
import { Chips } from 'primereact/chips';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import MessageInput from '@/app/components/molecule/messageInput';
import FileUploader from '@/app/components/molecule/fileUploader';

export default function InputForm() {
  const ref = useRef<HTMLFormElement>(null);
  const editorRef = useRef<PrimeEditor>(null);
  const [paraf, setParaf] = useState<string>('');
  const [errorForm, setErrorForm] = useState<boolean>(false);
  const [labels, setLabels] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>('');

  const fileUploaderRef = useRef<any>(null);

  const initialFormValue = {
    title: '',
    header: '',
    slug: '',
    labels: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    header: Yup.string().required('Header is required'),
    slug: Yup.string().required('Slug is required'),
    labels: Yup.string().required('Labels is required'),
  });

  const handleWrappedSubmit = (values: typeof initialFormValue) => {
    // prevent upload if paragraph is empty
    if (errorForm) {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: "You haven't write your article",
      });
      return;
    }
    // prevent upload if image not selected
    if (!fileName) {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: "You haven't select an image!",
      });
      return;
    }

    const post: IPost = { ...values, desc: paraf, img: fileName };
    addPost(post as IPost);

    // ======= trigger upload file
    if (fileUploaderRef.current) {
      fileUploaderRef.current.upload();
    }

    Swal.fire({
      icon: 'success',
      title: 'Your article posted successfully',
    });
    ref.current?.reset();
    editorRef.current?.getQuill().setText('');
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialFormValue,
    validationSchema: validationSchema,
    onSubmit: handleWrappedSubmit,
  });

  useEffect(() => {
    if (!paraf) {
      setErrorForm(true);
    } else {
      setErrorForm(false);
    }
  }, [paraf]);

  return (
    <section className="py-16 md:w-3/4 mx-auto">
      <p className="text-lg font-bold text-emerald-800 mb-6">
        Make sure to complete all fields
      </p>

      <form
        ref={ref}
        id="inputBlog"
        className="flex flex-col gap-8 p-chips"
        onSubmit={formik.handleSubmit}
      >
        <InputText
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          name="title"
          placeholder="Title"
          type="text"
          error={
            formik.touched.title && formik.errors.title
              ? formik.errors.title
              : ''
          }
        />
        <InputText
          onChange={formik.handleChange}
          value={formik.values.header}
          name="header"
          placeholder="Header of content"
          type="text"
          error={
            formik.touched.header && formik.errors.header
              ? formik.errors.header
              : ''
          }
        />

        <InputText
          onChange={formik.handleChange}
          value={formik.values.slug}
          name="slug"
          placeholder="Slug name"
          type="text"
          error={
            formik.touched.slug && formik.errors.slug ? formik.errors.slug : ''
          }
        />
        <InputText
          onChange={formik.handleChange}
          value={formik.values.labels}
          name="labels"
          placeholder="Labels"
          type="text"
          error={
            formik.touched.labels && formik.errors.labels
              ? formik.errors.labels
              : ''
          }
        />
        <div>
          <FileUploader
            setFileName={setFileName}
            ref={fileUploaderRef}
          />
        </div>
        <div className="relative">
          <Editor
            name="desc"
            placeholder="Write your awesome article here.."
            ref={editorRef}
            onTextChange={(e) => setParaf(e.htmlValue as string)}
            style={{ height: '460px', fontSize: '16px' }}
          />
          {errorForm && <MessageInput msg="Your article is empty.." />}
        </div>
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
