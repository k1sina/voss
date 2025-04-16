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
  Link as TypographyLink,
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
              <CardContent className="p-6">
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
                  <Button className="mr-2" variant="outline">
                    <Image
                      src="/icons/phone.svg"
                      alt="Phone"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </Button>
                  <Button className="mr-2" variant="outline">
                    <Image
                      src="/icons/envelope-simple.svg"
                      alt="Email"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </Button>
                  <Button className="mr-2" variant="outline">
                    <Image
                      src="/icons/variant78.svg"
                      alt="Linkedin"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </Button>
                  <Button className="mr-2" variant="outline">
                    <Image
                      src="/icons/variant82.svg"
                      alt="Youtube"
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </Button>
                </div>
                <div className="text-gray-600">
                  <ParagraphBold>VOSS Energy GmbH</ParagraphBold>
                  <Paragraph>
                    Admannshäger Damm 20 <br />
                    18211 Admannshagen-Bargeshagen
                    <br />
                    Landkreis Rostock
                  </Paragraph>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex md:col-span-6 bg-background p-8 gap-8">
            <Card className="border-0 shadow-none py-0 flex-1">
              <CardHeader>
                <CardTitle>
                  <H4Uppercase>Das könnte Sie interessieren</H4Uppercase>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>Fläche prüfen</ButtonText>
                  </Button>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>Kontakt</ButtonText>
                  </Button>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>Unser Projektablauf</ButtonText>
                  </Button>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>Investieren</ButtonText>
                  </Button>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>Projekte</ButtonText>
                  </Button>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>Antrieb & Anspruch</ButtonText>
                  </Button>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>News</ButtonText>
                  </Button>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>Faq</ButtonText>
                  </Button>
                  <Button variant="outline" className="mr-2 mb-2">
                    <ButtonText>Jobs</ButtonText>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none py-0 flex-1">
              <CardContent className="px-0">
                <Paragraph className="text-gray-600 mb-2">
                  <span className="font-bold">VOSS Energy</span> steht für die
                  qualifizierte Entwicklung erneuerbarer Energieprojekte mit
                  expliziter Orientierung auf Eigenbetrieb und
                  Standortentwicklung.
                </Paragraph>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className=" py-4 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-14">
              <Link href="/" className="no-underline">
                <TypographyLink>Datenschutz</TypographyLink>
              </Link>
              <Link href="/" className="no-underline">
                <TypographyLink>Impressum</TypographyLink>
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
