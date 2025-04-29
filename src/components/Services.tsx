"use client";

import { decalotypeBold } from "@/public/fonts/fonts";
import { T_Service } from "@/types/types";
import { NextPage } from "next";
import Service from "@/components/UI/Service";

type Props = { id: string };

const Page: NextPage<Props> = ({ id }) => {
  const mainBackgroundColorStyle = "bg-[#c1ff72]";

  return (
    <section
      id={id}
      className={`pt-[15vh] w-full min-h-screen flex flex-col items-center justify-start px-4 ${mainBackgroundColorStyle}`}
    >
      <main className="w-full max-w-7xl flex flex-col">
        <div className="w-full my-5 py-5">
          <h3
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${decalotypeBold.className} text-black`}
          >
            HİZMETLERİMİZ
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {services.map((s, i) => (
            <Service key={i} service={s} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Page;

const services: ReadonlyArray<T_Service> = [
  {
    title: "KAPSAMLI EV TEMİZLİĞİ",
    text: "Kartal Temizlik, mutfak, salon, banyo ve yatak odasında detaylı ve düzenli temizlik hizmeti sunar; tüm yüzeyler silinir, toz alınır, çöpler toplanır ve alanlar özenle düzenlenir.",
  },
  {
    title: "APARTMAN TEMİZLİĞİ",
    text: "Kartal Temizlik, apartman girişinden merdivenlere, korkuluklardan camlara kadar tüm ortak alanları titizlikle temizler ve düzenli bir görünüm kazandırır.",
  },
  {
    title: "İNŞAAT TEMİZLİĞİ",
    text: "Kartal Temizlik, inşaat sonrası oluşan kaba ve ince tozları özenle temizleyerek yaşam alanlarını kullanıma hazır hâle getirir.",
  },
  {
    title: "OFİS & İŞYERİ TEMİZLİĞİ",
    text: "Kartal Temizlik, ofis ve işyerlerinde masa, zemin, cam ve ortak alanları hijyen standartlarına uygun şekilde temizleyerek ferah ve düzenli çalışma ortamları sağlar.",
  },
  {
    title: "CAM & PENCERE TEMİZLİĞİ",
    text: "Kartal Temizlik, cam ve pencere yüzeylerini iz bırakmadan, detaylı ve özenli bir şekilde temizleyerek ışığı içeriye tam geçirir, ferah bir görünüm sunar. ",
  },
  {
    title: "BOŞ EV & TAŞINMA TEMİZLİĞİ",
    text: "Kartal Temizlik, taşınma öncesi veya sonrası boş evleri baştan sona detaylı şekilde temizleyerek yeni yaşam alanınızı hijyenik ve tertemiz hâle getirir.",
  },
];
