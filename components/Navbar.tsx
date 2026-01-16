"use client";

import Link from "next/link";
import { Playfair_Display, Geist } from "next/font/google";
import { useState, useEffect } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // mobile dropdown

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`transition-all duration-300 ${isScrolled ? "pt-0" : "pt-[40px]"}`}>
      <header
        className={`z-50 bg-white border border-gray-300 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 border-t-0 shadow-sm mx-0"
            : "relative mx-[40px]"
        }`}
      >
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-4 px-6" : "py-6 px-6 md:px-12"
          }`}
        >
          {/* Logo */}
          <div
            className={`flex items-center space-x-2 text-lg md:text-xl font-black tracking-tight ${playfair.className}`}
          >
            <Link
              href="/"
              className="hover:opacity-70 transition text-gray-700 cursor-none"
            >
              Prabhjot Singh
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex items-center space-x-8 text-sm font-medium ${geist.className}`}
          >
            <li>
              <Link href="/" className="hover:opacity-70 transition cursor-none">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:opacity-70 transition cursor-none">
                About me
              </Link>
            </li>
            <li>
              <a
                href="/Prabh.pdf"
                target="_blank"
                className="hover:opacity-70 transition cursor-none"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Desktop Right Buttons */}
          <div className={`hidden md:flex items-center space-x-3 ${geist.className}`}>
            <a
              href="mailto:ps7584153@gmail.com"
              className="px-4 py-1.5 text-sm rounded-full border border-black/20 hover:bg-black/5 transition cursor-none"
            >
              ps7584153@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/prabhjot-singh-008a0a2aa/"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-black/20 hover:bg-black/5 transition cursor-none"
            >
              in
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl cursor-none focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-sm">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block hover:opacity-70 transition cursor-none"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block hover:opacity-70 transition cursor-none"
            >
              About me
            </Link>

            <a
              href="/Prabh.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="block hover:opacity-70 transition cursor-none"
            >
              Resume
            </a>

            <div className="pt-2 border-t border-gray-200 space-y-3">
              <a
                href="mailto:ps7584153@gmail.com"
                className="block px-4 py-2 text-center rounded-full border border-black/20 hover:bg-black/5 transition cursor-none"
              >
                ps7584153@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/prabhjot-singh-008a0a2aa/"
                target="_blank"
                className="block w-full text-center px-4 py-2 rounded-full border border-black/20 hover:bg-black/5 transition cursor-none"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
