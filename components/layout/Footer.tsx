"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Paragraph,
  ParagraphBold,
  ParagraphSmall,
  H4Uppercase,
  ButtonText,
  ParagraphSmallUppercaseBold,
  ParagraphBoldUppercase,
} from "@/lib/typography";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full mt-auto bg-cover bg-center pt-16 last"
      style={{ backgroundImage: 'url("/images/map-bg.png")' }}
    >
      {/* Background Effect */}
      <div className="grid grid-cols-1 md:grid-cols-12 h-96 -mb-96">
        <div
          className="flex flex-col md:col-span-6 relative bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/map-caption.svg")' }}
        ></div>
      </div>
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex flex-col md:col-span-6">
            <Card className="relative z-10 max-w-md -mt-16 p-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-8">
                  <Image
                    src="/logos/voss-energy-logo-with-slogan.svg"
                    alt="Voss Energy"
                    width={180}
                    height={60}
                    className="h-auto w-48"
                  />
                </div>
                <div className="mb-8">
                  <ParagraphBold>VOSS Energy GmbH</ParagraphBold>
                  <Paragraph>
                    Admannshäger Damm 20 <br />
                    18211 Admannshagen-Bargeshagen
                    <br />
                    Landkreis Rostock
                  </Paragraph>
                </div>
                <div className="flex items-center">
                  <Button className="w-10 h-10 p-0 mr-2" variant="outline">
                    <Image
                      src="/icons/phone.svg"
                      alt="Phone"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Button>
                  <Button className="w-10 h-10 p-0 mr-2" variant="outline">
                    <Image
                      src="/icons/envelope-simple.svg"
                      alt="Email"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Button>
                  <Button className="w-10 h-10 p-0 mr-2" variant="outline">
                    <Image
                      src="/icons/variant78.svg"
                      alt="Linkedin"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Button>
                  <Button className="w-10 h-10 p-0 mr-2" variant="outline">
                    <Image
                      src="/icons/variant82.svg"
                      alt="Youtube"
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex md:col-span-6 bg-background p-8 gap-8">
            <div className="border-0 shadow-none py-0 flex-1">
              <ParagraphBoldUppercase>
                Das könnte Sie interessieren
              </ParagraphBoldUppercase>
              <div className="mt-4">
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>
                    Fläche prüfen
                  </ParagraphSmallUppercaseBold>
                </Button>
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>
                    Kontakt
                  </ParagraphSmallUppercaseBold>
                </Button>
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>
                    Unser Projektablauf
                  </ParagraphSmallUppercaseBold>
                </Button>
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>
                    Investieren
                  </ParagraphSmallUppercaseBold>
                </Button>
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>
                    Projekte
                  </ParagraphSmallUppercaseBold>
                </Button>
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>
                    Antrieb & Anspruch
                  </ParagraphSmallUppercaseBold>
                </Button>
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>
                    News
                  </ParagraphSmallUppercaseBold>
                </Button>
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>Faq</ParagraphSmallUppercaseBold>
                </Button>
                <Button variant="outline" className="mr-2 mb-2">
                  <ParagraphSmallUppercaseBold>
                    Jobs
                  </ParagraphSmallUppercaseBold>
                </Button>
              </div>
            </div>
            <div className="border-0 shadow-none py-0 flex-1">
              <Paragraph className="text-gray-600 mb-2">
                <span className="font-bold">VOSS Energy</span> steht für die
                qualifizierte Entwicklung erneuerbarer Energieprojekte mit
                expliziter Orientierung auf Eigenbetrieb und
                Standortentwicklung.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className=" py-4 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-14">
              <Link href="/">
                <ParagraphSmall>Datenschutz</ParagraphSmall>
              </Link>
              <Link href="/">
                <ParagraphSmall>Impressum</ParagraphSmall>
              </Link>
            </div>
            <div className="flex justify-center items-center gap-8">
              <ParagraphSmall className="text-gray-500 text-center">
                Ein Unternehmen der VOSS Gruppe
              </ParagraphSmall>
              <Link href="/">
                <Image
                  src="/logos/voss-logo.svg"
                  alt="Voss Logo"
                  width={125}
                  height={16}
                  className="h-4 w-auto"
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
