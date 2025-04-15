"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-[70px] bg-white shadow-md sticky top-0 left-0 z-100">
      <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/voss-energy-logo-with-slogan.svg"
              alt="Voss Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <nav className="flex gap-6">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-base font-semibold text-black flex items-center gap-1.5"
                : "text-base text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-1.5"
            }
          >
            <Image
              src="/icons/compass.svg"
              alt="Home"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-base font-semibold text-black flex items-center gap-1.5"
                : "text-base text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-1.5"
            }
          >
            <Image
              src="/icons/file-pdf.svg"
              alt="About"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            About
          </Link>
          <Link
            href="/services"
            className={
              pathname === "/services"
                ? "text-base font-semibold text-black flex items-center gap-1.5"
                : "text-base text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-1.5"
            }
          >
            <Image
              src="/icons/settings-wrench-double.svg"
              alt="Services"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            Services
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-base font-semibold text-black flex items-center gap-1.5"
                : "text-base text-gray-600 hover:text-black transition-colors duration-200 flex items-center gap-1.5"
            }
          >
            <Image
              src="/icons/envelope-simple.svg"
              alt="Contact"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
