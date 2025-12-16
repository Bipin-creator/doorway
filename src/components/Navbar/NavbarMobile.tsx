"use client";

import { LOGO_WHITE } from "@/constants/imagePath";
import { Contact, RightArrow } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "../Icons/Menu";
import CrossIcon from "../Icons/CrossIcon";

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  // === MENU DATA ===
  const headings = [
    { name: "Our Hotels", link: "/hotels" },
    { name: "The Experience", link: "/experience" },
    { name: "Offers", link: "/offers" },
    { name: "Meetings & Celebrations", link: "/meetings" },
    { name: "Hospitality", link: "/hospitality" },
    { name: "Tourism", link: "/tourism" },
    { name: "The Doorway Tech", link: "/thedoorwaytech" },
    { name: "Sustainability", link: "/sustainability" },
  ];

  const subMenu: Record<string, { title: string; link: string }[]> = {
    "Our Hotels": [
      { title: "All Regions", link: "/hotels" },
      { title: "Asia", link: "/hotels/asia" },
      { title: "Europe", link: "/hotels/europe" },
      { title: "Americas", link: "/hotels/americas" },
    ],
    "The Experience": [
      { title: "Dining", link: "/experience/dining" },
      { title: "Spa", link: "/experience/spa" },
      { title: "Activities", link: "/experience/activities" },
    ],
    Offers: [
      { title: "Exclusive Deals", link: "/offers/exclusive" },
      { title: "Packages", link: "/offers/packages" },
      { title: "Seasonal Offers", link: "/offers/seasonal" },
    ],
  };

  // === Disable scroll when menu open ===
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleToggleSubmenu = (name: string) => {
    setActiveHeading((prev) => (prev === name ? null : name));
  };

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-white z-50 flex items-center justify-between px-4">
      {/* === Left: Menu Icon === */}
      <button
        onClick={() => setMenuOpen(true)}
        className="flex items-center gap-x-2 text-black"
      >
        <Menu />
      </button>

      {/* === Center: Logo === */}
      <div className="relative h-full w-[100px] flex items-center justify-center">
        <Image
          src={LOGO_WHITE}
          alt="Company Logo"
          fill
          className="object-contain invert p-2"
        />
      </div>

      {/* === Right: Contact Icon === */}
      <a href="/contact">
        <Contact className="h-10" />
      </a>
      {/* === Fullscreen Left Slide Menu === */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white z-40 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* === Close Button === */}
        <div className="flex justify-end px-6 pt-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-gray-600 hover:text-black transition-all"
          >
            <CrossIcon />
          </button>
        </div>

        {/* === Scrollable Menu Content === */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto mt-4 pb-20 px-4">
          {headings.map((item, idx) => {
            const hasSubmenu = !!subMenu[item.name];
            const isOpen = activeHeading === item.name;

            return (
              <div key={idx} className="w-full border-b border-gray-200">
                {hasSubmenu ? (
                  <>
                    <button
                      onClick={() => handleToggleSubmenu(item.name)}
                      className="w-full flex justify-between items-center py-4 text-gray-800 hover:text-black transition-all"
                    >
                      <span className="text-xl font-garamondlight">
                        {item.name}
                      </span>
                      <RightArrow
                        className={`transition-transform duration-300 h-5 w-5 ${
                          isOpen ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* === Submenu Dropdown === */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-[400px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-4 pb-4 space-y-2 text-[17px] text-gray-600">
                        {subMenu[item.name].map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={sub.link}
                              onClick={() => setMenuOpen(false)}
                              className="block text-black hover:text-black transition-all font-garamondlight"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-xl font-garamondlight text-black hover:text-black transition-all"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default NavbarMobile;
