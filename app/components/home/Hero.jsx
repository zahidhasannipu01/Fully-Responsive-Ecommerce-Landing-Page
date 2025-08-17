import React from "react";
import Image from "next/image";
import HeroImage from "../../assets/images/heroimage.png";
import Stars from "../../assets/images/star.svg";
const Hero = () => {
  return (
    <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5 gap-5 items-center pt-10 lg:pt-20">
      <div className="">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold title">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-black/50 para pt-5 pr-0 lg:pr-10">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>
        <div className="pt-10">
          <button className="py-3 px-10 bg-black rounded-full text-center text-white para cursor-pointer hover:bg-black/80 transition-all duration-300">
            Shop Now{" "}
          </button>
        </div>
        <div className="flex justify-start items-center gap-x-4 pt-10">
          <div className="border-r pr-4 border-black/30">
            <p className="text-3xl lg:text-5xl font-bold para">200+</p>
            <p className="para text-black/50">International Brands</p>
          </div>
          <div className="border-r pr-4 border-black/30">
            <p className="text-3xl lg:text-5xl font-bold para">200+</p>
            <p className="para text-black/50">International Brands</p>
          </div>
          <div>
            <p className="text-3xl lg:text-5xl font-bold para">200+</p>
            <p className="para text-black/50">International Brands</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center ">
        <div className="relative">
          <div>
            <Image src={HeroImage} alt="Hero Image" />
          </div>
          <div className="absolute top-1/2 left-0 w-[50px] h-[50px] z-10">
            <Image src={Stars} alt="Stars" />
          </div>
          <div className="absolute top-10 lg:top-20 right-0 lg:right-10 w-[100px] h-[100px] z-10">
            <Image src={Stars} alt="Stars" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
