'use client';
import InputFormComponent from '@/app/components/molecule/inputForm';
import { addPost } from '@/lib/data';
import { IPost } from '@/lib/interfaces';
import React, { useEffect, useRef, useState } from 'react';
import { Editor as PrimeEditor } from 'primereact/editor';
import { Editor } from 'primereact/editor';
import { Chips } from 'primereact/chips';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

export default function InputForm() {
  const ref = useRef<HTMLFormElement>(null);
  const editorRef = useRef<PrimeEditor>(null);
  const [paraf, setParaf] = useState<string>('');
  const [errorForm, setErrorForm] = useState<boolean>(false);
  const [labels, setLabels] = useState<string[]>([]);

  const initialFormValue = {
    title: '',
    header: '',
    img: '',
    slug: '',
    labels: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    header: Yup.string().required('Header is required'),
    img: Yup.string().required('Image is required'),
    slug: Yup.string().required('Slug is required'),
    labels: Yup.string().required('Labels is required'),
  });

  const handleWrappedSubmit = (values: typeof initialFormValue) => {
    // if (Object.keys(formik.errors).length > 1) {
    //   alert('ksong');
    //   return;
    // }

    // prevent upload if paragraph is empty
    if (errorForm) return;

    const post: IPost = { ...values, desc: paraf };
    addPost(post as IPost);
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
        className="flex flex-col gap-5 p-chips"
        onSubmit={formik.handleSubmit}
      >
        <InputFormComponent
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
        <InputFormComponent
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
        <InputFormComponent
          onChange={formik.handleChange}
          value={formik.values.img}
          name="img"
          placeholder="Image name"
          type="text"
          error={
            formik.touched.img && formik.errors.img ? formik.errors.img : ''
          }
        />
        <InputFormComponent
          onChange={formik.handleChange}
          value={formik.values.slug}
          name="slug"
          placeholder="Slug name"
          type="text"
          error={
            formik.touched.slug && formik.errors.slug ? formik.errors.slug : ''
          }
        />
        <InputFormComponent
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
        <Editor
          name="desc"
          placeholder="Write your awesome article here.."
          ref={editorRef}
          onTextChange={(e) => setParaf(e.htmlValue as string)}
          style={{ height: '460px', fontSize: '16px' }}
        />
        {errorForm && <p>Your article is empty..</p>}

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
