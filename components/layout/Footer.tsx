"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 py-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <Image
                src="/icons/compass.svg"
                alt="Voss Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <h3 className="text-xl font-semibold text-gray-800">Voss</h3>
            </div>
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
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
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
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
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
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
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
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
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
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-5 text-gray-800">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li className="text-gray-600 flex items-center gap-2">
                <Image
                  src="/icons/envelope-sealed.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                info@voss.com
              </li>
              <li className="text-gray-600 flex items-center gap-2">
                <Image
                  src="/icons/phone.svg"
                  alt="Phone"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                +1 (555) 123-4567
              </li>
              <li className="text-gray-600 flex items-center gap-2">
                <Image
                  src="/icons/signpost.svg"
                  alt="Address"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                123 Main Street, City, Country
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5">
          <div className="flex justify-center items-center gap-3 mb-3">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Image
                src="/icons/share-network.svg"
                alt="Share"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Image
                src="/icons/telegram-logo.svg"
                alt="Telegram"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <Image
                src="/icons/youtube-logo.svg"
                alt="YouTube"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
          </div>
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Voss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
