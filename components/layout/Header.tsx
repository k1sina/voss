"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MainNav from "@/components/sections/MainNav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-[80px] bg-white shadow-md sticky top-0 left-0 z-100">
      <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/voss-energy-logo.svg"
              alt="Voss Logo"
              width={204}
              height={26}
              className="h-6 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-14">
          <MainNav />
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Image
                src="/icons/address-book.svg"
                alt="Arrow Right"
                width={24}
                height={24}
                className="h-8 w-8"
              />
              <span className="sr-only">Next slide</span>
            </Button>
            <Separator orientation="vertical" className=" !h-8 mx-1 " />
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Image
                src="/icons/selection.svg"
                alt="Arrow Right"
                width={24}
                height={24}
                className="h-8 w-8"
              />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
