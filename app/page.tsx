"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const sunRef = useRef<null | HTMLElement>(null);
  const moonRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (theme === "dark") {
      if (sunRef.current !== null && moonRef.current !== null) {
        sunRef.current.style.display = "none";
        moonRef.current.style.display = "inline-block";
      }
    } else {
      if (sunRef.current !== null && moonRef.current !== null) {
        moonRef.current.style.display = "none";
        sunRef.current.style.display = "inline-block"
      }
    }
  }, [theme]);

  return (
    <div className="m-auto max-w-[600px]">
      <header className="flex flex-col sm:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-extrabold">shirokodev</h1>
          <h3 className="text-lg">a normal student</h3>
        </div>
        <ul className="flex gap-3 text-2xl">
          <li>
            <Link href="https://www.facebook.com/sunaookamishirokodev/" rel="no-referrer">
              <i className="header__icon fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/sunaookamishirokodev" rel="no-referrer">
              <i className="header__icon fa-brands fa-github"></i>
            </Link>
          </li>
          <li onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
            <i ref={sunRef} className="fa-regular fa-sun"></i>
            <i ref={moonRef} className="fa-regular fa-moon"></i>
          </li>
        </ul>
      </header>
      <main className="mt-12">
        <h2 className="text-xl">projects</h2>
        <ul className="pl-1">
          {[
            {
              title: "profile/shiroko",
              link: "https://profile.shirokodev.site/",
              status: "active",
              desc: "shiroko personal portfolio powered by next.js",
            },
            {
              title: "elainateam/website",
              link: "https://elainateam.io/",
              status: "building",
              desc: "elaina team website",
            },
          ].map((value, index) => {
            return (
              <li className="mt-4" key={index}>
                <Link
                  className="relative font-semibold after:absolute after:content-[''] after:primary-color after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full"
                  target="_blank"
                  href={value.link}
                  rel="noopener noreferrer"
                >
                  {value.title}
                </Link>
                <span className="ml-2 primary-color dark:secondary-color p-1 select-none text-sm rounded-lg">{value.status}</span>
                <span className="block opacity-80">{value.desc}</span>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
