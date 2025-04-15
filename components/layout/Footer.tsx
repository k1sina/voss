"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 py-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="flex flex-col md:col-span-6 relative bg-cover bg-center" style={{ backgroundImage: 'url("/images/map-caption.svg")' }}>
            <div className="mb-5 relative z-10">
              <Image
                src="/logos/voss-energy-logo-with-slogan.svg"
                alt="Voss Energy"
                width={180}
                height={60}
                className="h-auto w-48"
              />
            </div>
            <p className="text-gray-600 leading-relaxed relative z-10">
              Providing quality services and solutions since 2023.
            </p>
          </div>

          <div className="flex flex-col md:col-span-3">
            <h3 className="text-xl font-semibold mb-5 text-gray-800">
              DAS KÖNNTE SIE INTERESSIEREN
            </h3>
            <div>
              <Button>Fläche prüfen</Button>
              <Button>Kontakt</Button>
              <Button>Unser Projektablauf</Button>
              <Button>Investieren</Button>
              <Button>Projekte</Button>
              <Button>Antrieb & Anspruch</Button>
              <Button>News</Button>
              <Button>FaQ</Button>
              <Button>JOBS</Button>
            </div>
          </div>

          <div className="flex flex-col md:col-span-3">
            <p className="text-gray-600 mb-2">
              <b>VOSS Energy</b> steht für die qualifizierte Entwicklung
              erneuerbarer Energieprojekte mit expliziter Orientierung auf
              Eigenbetrieb und Standortentwicklung.
            </p>
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
