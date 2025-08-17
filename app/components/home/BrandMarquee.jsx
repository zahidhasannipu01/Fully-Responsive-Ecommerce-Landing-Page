import Container from "@/app/utils/Container";
import React from "react";
import Marquee from "react-fast-marquee";
import brand0 from "../../assets/logos/Group.png";

import brand1 from "../../assets/logos/Group-1.png";
import brand2 from "../../assets/logos/prada.png";
import brand3 from "../../assets/logos/gucci-logo-1 1.png";
import brand4 from "../../assets/logos/zara.png";
import Image from "next/image";
const BrandMarquee = () => {
  return (
    <div className="py-5 bg-black">
      <Container>
        <Marquee
          gradientColor={["#F2F0F1", "#F2F0F1"]}
          gradientWidth={0}
          speed={50}
        >
          <div className="flex items-center justify-center space-x-20">
            <Image src={brand0} alt="brand1" />
            <Image src={brand1} alt="brand1" />
            <Image src={brand2} alt="brand2" />
            <Image src={brand3} alt="brand3" />
            <Image src={brand4} alt="brand4" />
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default BrandMarquee;
