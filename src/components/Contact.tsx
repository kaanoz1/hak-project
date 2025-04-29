"use client";

import { NextPage } from "next";
import Image from "next/image";
import ContactPageIconPath from "@/public/assets/contact-page-icon.png";
import ContactPageLogoPath from "@/public/assets/logo-trimmed.png";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { decalotypeMedium } from "@/public/fonts/fonts";

type Props = { id: string };

const Page: NextPage<Props> = ({ id }) => {
  return (
    <section
      id={id}
      className="w-full min-h-screen bg-white flex flex-col justify-end items-center px-4 py-[15vh]"
    >
      <div className="w-full h-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 ">
        <div className="flex justify-center items-center w-full md:w-1/2">
          <Image
            src={ContactPageIconPath}
            alt="Contact Page Logo"
            className="w-[70%] sm:w-[60%] md:w-[450px] h-auto"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-evenly items-center ">
          <Image
            src={ContactPageLogoPath}
            alt="Logo"
            width={300}
            className="mb-4"
          />

          <div className="flex flex-col gap-6 w-1/2">
            <div className="flex items-center gap-4">
              <div className="border p-3 rounded-full">
                <FaMapMarkerAlt size={18} />
              </div>
              <span
                className={`text-base md:text-lg ${decalotypeMedium.className}`}
              >
                Lüleburgaz / Kırklareli
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="border p-3 rounded-full">
                <FaPhone size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <span className={`${decalotypeMedium.className}`}>
                  +90 541 299 71 88 (Ofis)
                </span>
                <span className={`${decalotypeMedium.className}`}>
                  +90 545 307 81 60 (Ofis)
                </span>
                <span className={`${decalotypeMedium.className}`}>
                  +90 538 592 64 32 (Saha)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="border p-3 rounded-full">
                <FaEnvelope size={18} />
              </div>
              <span
                className={`text-base md:text-lg ${decalotypeMedium.className}`}
              >
                info@kartaltemizlik.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
