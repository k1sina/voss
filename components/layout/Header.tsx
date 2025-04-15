"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-[70px] bg-white shadow-md sticky top-0 left-0 z-100">
      <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-3xl font-bold text-gray-800">Voss</span>
          </Link>
        </div>

        <nav className="flex gap-6">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-base font-semibold text-black"
                : "text-base text-gray-600 hover:text-black transition-colors duration-200"
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-base font-semibold text-black"
                : "text-base text-gray-600 hover:text-black transition-colors duration-200"
            }
          >
            About
          </Link>
          <Link
            href="/services"
            className={
              pathname === "/services"
                ? "text-base font-semibold text-black"
                : "text-base text-gray-600 hover:text-black transition-colors duration-200"
            }
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-base font-semibold text-black"
                : "text-base text-gray-600 hover:text-black transition-colors duration-200"
            }
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
