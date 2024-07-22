'use client';
import React from 'react';
import { login } from '@/lib/actions';
import InputText from '@/app/components/molecule/inputText';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function LoginForm() {
  const initValue = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const wrappedLogin = (data: typeof initValue) => {
    login(data as any);
  };

  const formik = useFormik({
    initialValues: initValue,
    onSubmit: wrappedLogin,
    validationSchema: validationSchema,
  });

  return (
    <>
      <form
        // action={login}
        onSubmit={formik.handleSubmit}
        className="flex w-3/4 md:w-1/3 flex-col gap-8"
      >
        <h2 className="text-3xl text-emerald-800 font-bold">Login</h2>
        <p className="font-semibold">
          Login to write and publish your awesome article!
        </p>
        <InputText
          placeholder="email"
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''
          }
        />
        <InputText
          placeholder="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''
          }
        />
        <button
          type="submit"
          className="mx-auto bg-emerald-800 py-3 px-7 text-slate-100 font-bold text-lg rounded-full"
        >
          Login
        </button>
      </form>
    </>
  );
}
