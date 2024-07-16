'use client';
import React from 'react';
import { login } from '@/lib/actions';

export default function LoginForm() {
  return (
    <form action={login}>
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
