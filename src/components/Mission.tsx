"use client";

import { decalotypeBold, decalotypeLight } from "@/public/fonts/fonts";
import { NextPage } from "next";
import Image from "next/image";
import MissionPageIconPath from "@/public/assets/icon-mission-page.png";

type Props = { id: string };

const Page: NextPage<Props> = ({ id }) => {
  const mainBackgroundColorStyle = "bg-[#0cc0df]";

  return (
    <section
      id={id}
      className={`flex flex-col w-full min-h-screen pt-[15vh] justify-between items-center px-4 ${mainBackgroundColorStyle}`}
    >
      <div className="w-full max-w-7xl text-white flex flex-col gap-8">
        <div className="w-full my-5 py-5">
          <h3
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${decalotypeBold.className}`}
          >
            MİSYONUMUZ
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={MissionPageIconPath}
              alt="Mission Page Icon"
              className="w-[75%] sm:w-[60%] md:w-[400px] h-auto"
              width={400}
              height={400}
            />
          </div>

          <div className="w-full md:w-1/2">
            <p
              className={`text-base sm:text-lg md:text-xl ${decalotypeLight.className}`}
            >
              Kartal Temizlik olarak, evlerinizi yalnızca temizlemekle kalmıyor,
              sizlere huzur, ferahlık ve güven dolu bir yaşam alanı sunuyoruz.
              Profesyonel ekibimiz, hijyen standartlarına uygun ürünlerle
              detaylı bir temizlik hizmeti sunarken; mutfaktan banyoya,
              camlardan halılara kadar her köşeyi titizlikle elden geçiriyor.
              <br />
              <br />
              Eşyalarınıza ve mahremiyetinize saygılı yaklaşımımızla, evinizde
              bir temizlik personeli değil, sanki tanıdık bir dost varmış gibi
              hissettiriyoruz. Günlük yaşamın temposunda size vakit kazandırmak,
              sevdiklerinizle daha huzurlu anlar yaşamanız için buradayız.
              <br />
              <br />
              Kartal Temizlik, evinizin görünmeyen yükünü omuzlarınızdan alır,
              siz sadece konforun keyfini çıkarırsınız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
