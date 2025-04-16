"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ButtonText } from "@/lib/typography";

// Main navigation items without subcategories
const navItems = [
  {
    title: "Investieren",
    href: "/investieren",
  },
  {
    title: "Entwickeln",
    href: "/entwickeln",
  },
  {
    title: "Betreiben",
    href: "/betreiben",
  },
  {
    title: "Informieren",
    href: "/informieren",
  },
  {
    title: "Kennenlernen",
    href: "/kennenlernen",
  },
  {
    title: "Mitarbeiten",
    href: "/mitarbeiten",
  },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex">
      <ul className="flex space-x-14">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={cn(
                  "relative block",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.25 after:w-0 after:bg-primary",
                  "hover:after:w-full",
                  isActive && "after:w-full"
                )}
              >
                <ButtonText>{item.title}</ButtonText>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
