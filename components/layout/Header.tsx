"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Voss</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link
            href="/"
            className={pathname === "/" ? styles.activeLink : styles.link}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? styles.activeLink : styles.link}
          >
            About
          </Link>
          <Link
            href="/services"
            className={
              pathname === "/services" ? styles.activeLink : styles.link
            }
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact" ? styles.activeLink : styles.link
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
