import Link from 'next/link';
import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../../../../public/svgs';

export default function Footer() {
  return (
    <footer className="flex items-center bg-stone-900 p-4 text-stone-300 text-sm justify-center gap-6">
      <div>
        © Pacific. Design by{' '}
        <Link
          className="hover:text-sky-600"
          href="http://preview.themeforest.net/item/pacific-big-bold-photobased-theme/full_screen_preview/19968132"
          target="__blank"
        >
          Heybi
        </Link>
      </div>
      <div>
        <Link
          href=""
          className="underline"
        >
          Powered by Blogger
        </Link>
      </div>
      <div className="flex gap-3 text-base">
        <Link href="/">
          <FacebookIcon />
        </Link>
        <Link href="/">
          <InstagramIcon />
        </Link>
        <Link href="/">
          <TwitterIcon />
        </Link>
        <Link href="/">
          <YoutubeIcon />
        </Link>
      </div>
    </footer>
  );
}
