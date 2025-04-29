import Image from "next/image";
import { FC } from "react";
import LogoImg from "@/public/assets/logo-trimmed.png";
type Props = {
  width?: string;
};

const Logo: FC<Props> = ({ width = "w-[150px]" }) => {
  const alt = "Kartal Temizlik Logo";

  return (
    <div className={`relative ${width} h-[80px]`}>
      <Image
        src={LogoImg}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100px, 150px"
      />
    </div>
  );
};

export default Logo;
