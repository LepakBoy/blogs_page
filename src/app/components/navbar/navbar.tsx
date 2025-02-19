'use client';
import { navLinks } from '@/app/static/nabarLink';
import React from 'react';
import Navlink from './navLink/navlink';
import { handleLogout } from '@/lib/actions';
import { getSession, useSession } from 'next-auth/react';

export default function Navbar() {
  const session = useSession();
  return (
    <nav className="flex gap-6 p-7 bg-neutral-800 text-gray-300 font-semibold justify-center">
      {navLinks.map((link) => (
        <Navlink
          href={link.link}
          link={link.name}
          key={link.name}
        />
      ))}
      {!session.data ? (
        <Navlink
          href="/login"
          link="Login"
        />
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}
