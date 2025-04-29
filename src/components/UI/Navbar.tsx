"use client";

import { FC, useState } from "react";
import Logo from "./Logo";
import { loveloBlack } from "@/public/fonts/fonts";
import { FiMenu, FiX } from "react-icons/fi";
import { T_Link } from "@/types/types";

type Props = {};

const Navbar: FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const textColor = "text-[#0cc0dd]";

  return (
    <nav className="w-full h-[15vh] flex justify-center items-center bg-white shadow-md fixed top-0 z-50">
      <div className="flex w-11/12 max-w-7xl justify-between items-center px-4">
        <Logo width="w-[120px] sm:w-[140px] md:w-[180px]" />

        <div className="hidden md:flex gap-8 items-center font-light text-gray-700 text-lg tracking-wide">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`hover:text-blue-500 transition-colors cursor-pointer ${textColor} ${loveloBlack.className}`}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-[15vh] left-0 w-full bg-white shadow-md py-4 px-6 z-40">
          <div className="flex flex-col gap-4 font-light text-gray-700 text-lg tracking-wide">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`hover:text-blue-500 transition-colors ${textColor} ${loveloBlack.className}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const links: ReadonlyArray<T_Link> = [
  { label: "Anasayfa", href: "#anasayfa" },
  { label: "Misyonumuz", href: "#misyonumuz" },
  { label: "Hizmetler", href: "#hizmetlerimiz" },
  { label: "İletişim", href: "#iletisim" },
];
