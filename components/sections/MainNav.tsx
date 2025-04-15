"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Sub-categories for each main navigation item
const navItems = [
  {
    title: "Investieren",
    icon: "/icons/piggybank.svg",
    href: "/investieren",
    items: [
      {
        title: "Investitionsmodelle",
        description:
          "Verschiedene Möglichkeiten in erneuerbare Energien zu investieren",
        href: "/investieren/modelle",
      },
      {
        title: "Aktuelle Projekte",
        description: "Laufende Projekte mit Investitionsmöglichkeiten",
        href: "/investieren/projekte",
      },
      {
        title: "Renditerechner",
        description: "Berechnen Sie Ihre potenzielle Rendite",
        href: "/investieren/renditerechner",
      },
    ],
  },
  {
    title: "Entwickeln",
    icon: "/icons/chart-line.svg",
    href: "/entwickeln",
    items: [
      {
        title: "Projektstufen",
        description: "Von der Idee bis zur Umsetzung",
        href: "/entwickeln/projektstufen",
      },
      {
        title: "Unsere Technologien",
        description: "Wind, Solar, Wasserstoff und mehr",
        href: "/entwickeln/technologien",
      },
      {
        title: "Referenzprojekte",
        description: "Erfolgreich umgesetzte Energieprojekte",
        href: "/entwickeln/referenzen",
      },
    ],
  },
  {
    title: "Betreiben",
    icon: "/icons/settings-wrench-double.svg",
    href: "/betreiben",
    items: [
      {
        title: "Technisches Management",
        description: "Optimierung von Energieanlagen",
        href: "/betreiben/technisches-management",
      },
      {
        title: "Kaufmännisches Management",
        description: "Wirtschaftliche Verwaltung von Energieprojekten",
        href: "/betreiben/kaufmaennisches-management",
      },
      {
        title: "Service & Wartung",
        description: "Wartungs- und Reparaturleistungen",
        href: "/betreiben/service",
      },
    ],
  },
  {
    title: "Informieren",
    icon: "/icons/newspaper.svg",
    href: "/informieren",
    items: [
      {
        title: "Aktuelle News",
        description: "Neuigkeiten zu Projekten und Entwicklungen",
        href: "/informieren/news",
      },
      {
        title: "Wissensportal",
        description: "Fachartikel zu erneuerbaren Energien",
        href: "/informieren/wissen",
      },
      {
        title: "Veranstaltungen",
        description: "Termine für Messen und Veranstaltungen",
        href: "/informieren/veranstaltungen",
      },
    ],
  },
  {
    title: "Kennenlernen",
    icon: "/icons/handshake.svg",
    href: "/kennenlernen",
    items: [
      {
        title: "Über uns",
        description: "Unternehmensprofil und Geschichte",
        href: "/kennenlernen/ueber-uns",
      },
      {
        title: "Team",
        description: "Unsere Experten stellen sich vor",
        href: "/kennenlernen/team",
      },
      {
        title: "Standorte",
        description: "Unsere Büros und Ansprechpartner",
        href: "/kennenlernen/standorte",
      },
    ],
  },
  {
    title: "Mitarbeiten",
    icon: "/icons/collaboration-meeting-team-file.svg",
    href: "/mitarbeiten",
    items: [
      {
        title: "Stellenangebote",
        description: "Offene Positionen und Karrieremöglichkeiten",
        href: "/mitarbeiten/stellenangebote",
      },
      {
        title: "Benefits",
        description: "Was wir unseren Mitarbeitern bieten",
        href: "/mitarbeiten/benefits",
      },
      {
        title: "Bewerbungsprozess",
        description: "So bewerben Sie sich bei uns",
        href: "/mitarbeiten/bewerbungsprozess",
      },
    ],
  },
];

export default function MainNav() {
  return (
    <NavigationMenu className="font-myriad-pro mb-8">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.items ? (
              <>
                <NavigationMenuTrigger className="flex items-center gap-1.5">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "flex items-center gap-1.5"
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none font-myriad-pro">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-zinc-500 dark:text-zinc-400 font-myriad-pro">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
