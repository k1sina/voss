"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuText } from "@/lib/typography";

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
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={cn(navigationMenuTriggerStyle())}
              >
                <MenuText>{item.title}</MenuText>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
