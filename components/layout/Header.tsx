"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MainNav from "@/components/sections/MainNav";

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
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
