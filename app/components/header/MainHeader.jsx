import Container from "@/app/utils/Container";
import React from "react";
import MainLogo from "../../assets/logos/mainLogo.svg";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const MainHeader = () => {
  return (
    <Container>
      <div className="bg-white py-3 flex items-center justify-between lg:justify-center  gap-x-12">
        <div>
          <Image src={MainLogo} alt="Main Logo" />
        </div>
        <div className="hidden lg:flex justify-center items-center gap-x-8">
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
          <p>Home</p>
        </div>
        <div className=" hidden lg:flex justify-start items-center w-auto h-auto py-0 bg-[#F0F0F0] px-4 rounded-full">
          <div>
            <IoSearchOutline size={25} className="text-black/40" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-[500px] focus:outline-none text-lg para py-2 px-2"
            />
          </div>
        </div>
        <div className="px-4 flex justify-center items-center gap-x-4">
          <div className="cursor-pointer">
            <IoCartOutline size={28} className="text-black" />
          </div>

          <div className="cursor-pointer">
            <FaRegUserCircle size={25} className="text-black" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainHeader;
