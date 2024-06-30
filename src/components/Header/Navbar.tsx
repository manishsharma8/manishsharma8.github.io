"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import { NAV_LINKS } from "@/utils/constants";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="nav hidden lg:block mt-16 w-max">
      <ul>
        {NAV_LINKS.map(({ href, name, section }) => (
          <li key={name}>
            <Link
              href={href}
              className={classNames(
                'cursor-pointer flex items-center hover:text-slate-200 group py-3', {
                  'text-slate-200': activeLink === section,
                  'text-slate-500': activeLink !== section,
                }
              )}
            >
              <span
                className={classNames(
                  'block h-px group-hover:bg-slate-200 group-hover:w-16 transition-all mr-4', {
                    'w-16 bg-slate-200': activeLink === section,
                    'w-8 bg-slate-600': activeLink !== section,
                  }
                )}
              />
              <span className="text-xs font-bold uppercase tracking-widest">
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
