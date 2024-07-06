import Link from 'next/link';
import React from 'react';
import { ArrowRightIcon } from '../../../../public/svgs';
import LinkComponent from '../molecule/linkComponent';
import { archiveList, footerLabels } from '@/app/static/footerArchive';

export default function FooterLink() {
  return (
    <div className="py-12 block md:flex border-t-2 border-solid border-stone-900">
      <div className="w-1/2">
        <h3 className="text-xl font-bold mb-2 md:mb-5">
          Get a project?
          <span className="underline text-emerald-800">
            <Link
              href="/contact"
              className="flex items-center gap-1"
            >
              Let's talk <ArrowRightIcon className="text-4xl stroke-2" />
            </Link>
          </span>
        </h3>
        <p className="text-sm">
          I design awesome Blogger themes at{' '}
          <LinkComponent
            link="www.lepakboy.com"
            href="/"
          />
        </p>
      </div>
      <div className="w-1/4">
        <h3 className="text-xl font-bold">Archive</h3>
        <div className="flex flex-col gap-3 mt-5">
          {archiveList.map((list) => (
            <LinkComponent
              href={list.href}
              key={list.link}
              link={list.link}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4">
        <h3 className="text-xl font-bold">Labels</h3>
        <div className="mt-5 flex gap-2 flex-wrap">
          {footerLabels.map((label) => (
            <LinkComponent
              href={label.href}
              key={label.name}
              link={label.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
