"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Voss</h3>
            <p className={styles.description}>
              Providing quality services and solutions since 2023.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.link}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.linkList}>
              <li className={styles.contactItem}>info@voss.com</li>
              <li className={styles.contactItem}>+1 (555) 123-4567</li>
              <li className={styles.contactItem}>
                123 Main Street, City, Country
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Voss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
