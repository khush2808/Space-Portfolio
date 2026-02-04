"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_LINKS = [
  { label: "About me", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [visibleInHero, setVisibleInHero] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide navbar when user scrolls past ~1 viewport (JS; CSS sticky would do the opposite – keep bar visible)
  /*
  useEffect(() => {
    if (!mounted) return;

    const getScrollTop = () => {
      if (typeof window === "undefined") return 0;
      return Math.max(
        window.scrollY || 0,
        document.documentElement?.scrollTop || 0,
        document.body?.scrollTop || 0
      );
    };

    const getViewportHeight = () =>
      typeof window === "undefined" ? 800 : window.innerHeight;

    const checkScroll = () => {
      const scrollTop = getScrollTop();
      const viewportHeight = getViewportHeight();
      setVisibleInHero(scrollTop < viewportHeight * 0.75);
    };

    checkScroll();
    const scrollTarget = document.scrollingElement ?? document.documentElement ?? document.body;
    window.addEventListener("scroll", checkScroll, { passive: true });
    scrollTarget.addEventListener("scroll", checkScroll, { passive: true });
    if (document.body && document.body !== scrollTarget) {
      document.body.addEventListener("scroll", checkScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", checkScroll);
      scrollTarget.removeEventListener("scroll", checkScroll);
      if (document.body && document.body !== scrollTarget) {
        document.body.removeEventListener("scroll", checkScroll);
      }
    };
  }, [mounted]);
  */

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Nav bar: clean flex – left | center | right */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 h-[80px] w-full
          md:shadow-lg md:shadow-[#2A0E61]/50
          transition-transform duration-300 ease-out
          bg-transparent md:bg-[#03001417] md:backdrop-blur-md
          translate-y-0
        `}
      >
        <div className="w-full h-full flex flex-row items-center justify-between px-4 md:px-8 lg:px-12 md:grid md:grid-cols-3">
          {/* Left: logo + name */}
          <div className="flex flex-row items-center justify-start h-auto w-auto">
            <a
              href="#about-me"
              className="hidden lg:flex flex-row items-center gap-3 shrink-0"
              aria-label="Home"
            >
              <Image
                src="/NavLogo.png"
                alt=""
                width={56}
                height={56}
                className="cursor-pointer hover:animate-slowspin object-contain"
              />
              <span className="font-bold text-gray-300">Khush Shah</span>
            </a>
          </div>

          {/* Center: nav links */}
          <nav className="hidden md:flex flex-row items-center justify-center">
            <div className="flex items-center gap-1 rounded-full border border-[#7042f861] bg-[#0300145e] px-5 py-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full px-4 py-2 text-gray-200 hover:bg-[#7042f82a] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right: profile icons + mobile menu */}
          <div className="flex flex-row items-center justify-end gap-5">
            {/* Desktop social icons */}
            <div className="hidden md:flex flex-row items-center gap-4">
              {Socials.map((social) => (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.name}
                  aria-label={social.name}
                  title={social.name}
                  className="flex items-center justify-center overflow-hidden rounded-lg w-9 h-9 flex-shrink-0"
                >
                  <Image
                    src={social.src}
                    alt=""
                    width={36}
                    height={36}
                    className="w-7 h-7 object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white hover:bg-white/15 transition-colors flex-shrink-0 border border-[#7042f861]"
              aria-label="Open menu"
            >
              <Bars3Icon className="w-7 h-7" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      <div
        role="presentation"
        className={`
          fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm
          md:hidden transition-opacity duration-300
          ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeSidebar}
        aria-hidden={!sidebarOpen}
      />

      {/* Mobile sidebar panel – slides in from right */}
      <aside
        className={`
          fixed top-0 right-0 z-[70] h-full w-full
          bg-[#030014] shadow-xl
          md:hidden flex flex-col
          transition-transform duration-300 ease-out
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-label="Navigation menu"
        aria-hidden={!sidebarOpen}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-bold text-gray-300">Menu</span>
          <button
            type="button"
            onClick={closeSidebar}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-4 py-2">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeSidebar}
              className="rounded-lg px-2 py-3 text-lg font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Profile links – no card box, just icons */}
        <div className="mt-auto p-6">
          <div className="flex flex-wrap gap-6 justify-center">
            {Socials.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
                aria-label={social.name}
                title={social.name}
                onClick={closeSidebar}
                className="flex items-center justify-center overflow-hidden w-8 h-8 flex-shrink-0 hover:opacity-80 transition-opacity"
              >
                <Image
                  src={social.src}
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
