"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainNav from "@/components/sections/MainNav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// Navigation items for mobile menu
const navItems = [
  {
    title: "Investieren",
    href: "/",
  },
  {
    title: "Entwickeln",
    href: "/",
  },
  {
    title: "Betreiben",
    href: "/",
  },
  {
    title: "Informieren",
    href: "/",
  },
  {
    title: "Kennenlernen",
    href: "/",
  },
  {
    title: "Mitarbeiten",
    href: "/",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14">
          <MainNav />
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Image
                src="/icons/address-book.svg"
                alt="Address Book"
                width={24}
                height={24}
                className="h-8 w-8"
              />
              <span className="sr-only">Address Book</span>
            </Button>
            <Separator orientation="vertical" className="!h-8 mx-1" />
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Image
                src="/icons/selection.svg"
                alt="Selection"
                width={24}
                height={24}
                className="h-8 w-8"
              />
              <span className="sr-only">Selection</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet onOpenChange={(open) => setIsMenuOpen(open)}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 p-0">
                {isMenuOpen ? (
                  <Image
                    src="/icons/x-thin-thin.svg"
                    alt="Hamburger Menu"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                ) : (
                  <Image
                    src="/icons/list.svg"
                    alt="Hamburger Menu"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                )}
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="full" className="p-0 flex flex-col">
              <div className="flex justify-between items-center p-6 border-b">
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
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-10 w-10" />
                    <span className="sr-only">Close</span>
                  </Button>
                </SheetClose>
              </div>

              <div className="flex-1 overflow-auto py-6">
                <nav className="flex flex-col">
                  <ul className="flex flex-col w-full">
                    {navItems.map((item, index) => {
                      return (
                        <React.Fragment key={item.title}>
                          <li>
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className="flex items-center justify-between py-4 px-6"
                              >
                                <span className="text-xl font-medium">
                                  {item.title}
                                </span>
                                <ChevronRight className="h-5 w-5 text-primary" />
                              </Link>
                            </SheetClose>
                          </li>
                          {index < navItems.length - 1 && (
                            <Separator className="" />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className="mt-auto border-t py-6 px-6">
                <div className="flex gap-4">
                  <Link href="/datenschutz" className="text-sm text-gray-600">
                    Datenschutz
                  </Link>
                  <Link href="/impressum" className="text-sm text-gray-600">
                    Impressum
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
