import React from 'react';
import Link from 'next/link';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className='text-center'>
    <ul className='flex justify-between py-1 px-4 my-4'>
      <li className='flex py-1 px-2'>
        <Link href='/'>
          <a className='text-sm text-blue-500	no-underline'>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key} className='flex py-1 px-2'>
          <a className='text-sm text-blue-500	no-underline' href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
