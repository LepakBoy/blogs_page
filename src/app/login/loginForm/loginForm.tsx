'use client';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';

export default function LoginForm() {
  const handleSubmit = async (formData: FormData) => {
    const { email, password } = Object.fromEntries(formData);

    try {
      await signIn('credentials', { email, password, redirect: false });
      //   alert('ok');
      // return router.push('/admin');
    } catch (error) {
      console.log(error);
      // if (error?.message?.includes('CredentialsSignin')) {
      //     return { error: 'Invalid username or password' };
      //   }
      //   throw error;
    }
  };
  return (
    <form action={handleSubmit}>
      <input
        placeholder="email"
        type="text"
        name="email"
      />
      <input
        placeholder="password"
        type="password"
        name="password"
      />
      <button>sign in</button>
    </form>
  );
}
