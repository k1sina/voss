"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 py-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-5 text-gray-800">Voss</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing quality services and solutions since 2023.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-5 text-gray-800">Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-5 text-gray-800">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li className="text-gray-600">info@voss.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
              <li className="text-gray-600">123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Voss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
