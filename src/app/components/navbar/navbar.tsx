import { navLinks } from '@/app/static/nabarLink';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-7 bg-neutral-800 text-gray-300 font-semibold justify-center">
      {navLinks.map((link) => (
        <Link
          className="hover:text-gray-50"
          href={link.link}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
