'use client'

import React from "react";
import Image from "next/image";
import s148EngineeringWithLogoImage from "../../../../public/images/s148-engineering-with-logo-trimmed.png";

const LogoBanner: React.FC = () => {
  return (
    <Image
      src={s148EngineeringWithLogoImage}
      alt="S148 Engineering Logo"
      layout="responsive"
      width={100}
      height={50}
    />
  );
};

export default LogoBanner;
