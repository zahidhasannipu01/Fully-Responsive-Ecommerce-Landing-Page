import Container from "@/app/utils/Container";
import React from "react";
import Cat1 from "../../assets/images/1.png";
import Cat2 from "../../assets/images/2.png";
import Cat3 from "../../assets/images/3.png";
import Cat4 from "../../assets/images/4.png";
import Image from "next/image";
const FeaturedCategory = () => {
  return (
    <Container>
      <div className="pb-20">
        <div className="bg-[#F0F0F0] p-3 lg:p-16 rounded-3xl flex flex-col gap-y-5">
          <div className="text-center pb-5">
            <h3 className="text-3xl lg:text-5xl font-[800] uppercase">
              BROWSE BY dress STYLE
            </h3>
          </div>
          <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:grid grid-cols-3 gap-x-5">
            <div className="w-full h-[289px] overflow-hidden rounded-3xl">
              <Image
                src={Cat1}
                alt="cat1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 w-full h-[289px] overflow-hidden rounded-3xl">
              <Image
                src={Cat2}
                alt="cat2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:grid grid-cols-3 gap-x-5">
            <div className="col-span-2 w-full h-[289px] overflow-hidden rounded-3xl">
              <Image
                src={Cat3}
                alt="cat2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[289px] overflow-hidden rounded-3xl">
              <Image
                src={Cat4}
                alt="cat1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedCategory;
