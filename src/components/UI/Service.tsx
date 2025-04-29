import { decalotypeExtraBold, decalotypeSemiBold } from "@/public/fonts/fonts";
import type { T_Service } from "@/types/types";
import { FC } from "react";

type Props = {
  service: T_Service;
};

const Service: FC<Props> = ({ service }) => {
  const serviceName: string = service.title;
  const serviceDescription: string = service.text;
  return (
    <section className="flex flex-col gap-4 py-5">
      <h2
        className={`w-full py-3 px-2 text-2xl text-white bg-black text-center ${decalotypeExtraBold.className}`}
      >
        {serviceName}
      </h2>
      <p className={`${decalotypeSemiBold.className} leading-relaxed`}>
        {serviceDescription}
      </p>
    </section>
  );
};

export default Service;
