'use client';
import React from 'react';
import { login } from '@/lib/actions';
import InputText from '@/app/components/molecule/inputText';

export default function LoginForm() {
  return (
    <>
      <form
        action={login}
        className="flex w-1/3 flex-col gap-8"
      >
        <h2 className="text-3xl text-emerald-800 font-bold">Login</h2>
        <p className="font-semibold">
          Login to write and publish your awesome article!
        </p>
        <InputText
          placeholder="email"
          type="text"
          name="email"
        />
        <InputText
          placeholder="password"
          type="password"
          name="password"
        />
        <button className="mx-auto bg-emerald-800 py-3 px-7 text-slate-100 font-bold text-lg rounded-full">
          Login
        </button>
      </form>
    </>
  );
}
