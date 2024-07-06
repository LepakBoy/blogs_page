import { navLinks } from '@/app/static/nabarLink';
import React from 'react';
import Navlink from './navLink/navlink';

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-7 bg-neutral-800 text-gray-300 font-semibold justify-center">
      {navLinks.map((link) => (
        <Navlink
          href={link.link}
          link={link.name}
          key={link.name}
        />
      ))}
    </nav>
  );
}
