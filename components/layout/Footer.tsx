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
          <div
            className="flex flex-col md:col-span-6 relative bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/map-caption.svg")' }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 relative z-10 max-w-md">
              <div className="mb-5">
                <Image
                  src="/logos/voss-energy-logo-with-slogan.svg"
                  alt="Voss Energy"
                  width={180}
                  height={60}
                  className="h-auto w-48"
                />
              </div>
              <div className="flex items-center mb-5">
                <Button className="mr-2">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </Button>
                <Button className="mr-2">
                  <Image
                    src="/icons/envelope-simple.svg"
                    alt="Email"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </Button>
                <Button className="mr-2">
                  <Image
                    src="/icons/variant78.svg"
                    alt="Linkedin"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </Button>
                <Button className="mr-2">
                  <Image
                    src="/icons/variant82.svg"
                    alt="Youtube"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </Button>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <b>VOSS Energy GmbH</b> <br />
                Admannshäger Damm 20 <br />
                18211 Admannshagen-Bargeshagen
                <br />
                Landkreis Rostock
              </p>
            </div>
          </div>

          <div className="flex flex-col md:col-span-3">
            <h3 className="text-xl font-semibold mb-5 text-gray-800">
              DAS KÖNNTE SIE INTERESSIEREN
            </h3>
            <div>
              <Button className="mr-1 mb-1">Fläche prüfen</Button>
              <Button className="mr-1 mb-1">Kontakt</Button>
              <Button className="mr-1 mb-1">Unser Projektablauf</Button>
              <Button className="mr-1 mb-1">Investieren</Button>
              <Button className="mr-1 mb-1">Projekte</Button>
              <Button className="mr-1 mb-1">Antrieb & Anspruch</Button>
              <Button className="mr-1 mb-1">News</Button>
              <Button className="mr-1 mb-1">Faq</Button>
              <Button className="mr-1 mb-1">Jobs</Button>
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
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-3">
              <Link href="/">Datenschutz</Link>
              <Link href="/">Impressum</Link>
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="text-gray-500 text-sm text-center">
                Ein Unternehmen der VOSS Gruppe
              </p>
              <Link href="/">
                <Image
                  src="/logos/voss-logo.svg"
                  alt="Voss Logo"
                  width={60}
                  height={20}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
