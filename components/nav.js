import React from "react";
import Link from "next/link";

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="text-center">
    <ul className="flex justify-between px-4 my-4 py-1">
      <li className="flex px-2 py-1">
        <Link href="/">
          <a className="text-blue-500	no-underline text-sm">Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key} className="flex px-2 py-1">
          <a className="text-blue-500	no-underline text-sm" href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
