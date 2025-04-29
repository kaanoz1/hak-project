"use client";

import { NextPage } from "next";
import Image from "next/image";
import IconPath from "@/public/assets/home-page-icon.png";
import {
  decalotypeBold,
  decalotypeRegular,
  helveticaRegular,
} from "@/public/fonts/fonts";

type Props = { id: string };

const Page: NextPage<Props> = ({ id }) => {
  const buttonBackgroundColorStyle = "bg-[#80cc28]";

  return (
    <section
      id={id}
      className="w-full min-h-screen bg-white flex flex-col items-center"
    >
      <div className="w-11/12 max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-[15vh]">
        <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start flex-1">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${decalotypeBold.className}`}
          >
            Evinize bir dost eli değsin!
          </h2>
          <p
            className={`text-lg sm:text-xl md:text-2xl ${decalotypeRegular.className}`}
          >
            Profesyonel yardım ve hizmet detayları için bizimle iletişime geçin.
          </p>
        </div>

        <div className="flex justify-center items-center flex-1">
          <Image
            src={IconPath}
            alt="Home Page logo"
            className="max-w-[80%] sm:max-w-[70%] md:max-w-[500px] h-auto"
            priority
          />
        </div>
      </div>

      <div className="mt-8">
        <a href="#contact">
          <button
            className={`cursor-pointer px-6 py-3 border rounded-full text-white text-lg ${buttonBackgroundColorStyle} ${helveticaRegular.className}`}
          >
            Daha fazlası için tıkla
          </button>
        </a>
      </div>
    </section>
  );
};

export default Page;
