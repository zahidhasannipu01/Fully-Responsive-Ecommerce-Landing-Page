import React from "react";
import { AiTwotoneMail } from "react-icons/ai";

const Subscription = () => {
  return (
    <div className="bg-black p-5 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-0 items-center rounded-3xl absolute top-0 translate-x-1/2 -translate-y-1/2 right-1/2 w-[330px] lg:w-[1240px]">
      <div className="text-2xl text-center lg:text-start lg:text-4xl title  text-white">
        <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
      </div>
      <div className="space-y-5">
        <div className="flex justify-start items-center w-auto h-auto py-0 bg-white px-4 rounded-full">
          <AiTwotoneMail size={25} className="text-black/40" />
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full focus:outline-none px-5 py-3 uppercase  title text-md lg:text-lg  "
          />
        </div>
        <div className="w-auto h-auto  bg-white hover:bg-gray-200 transition-all duration-300 px-4 rounded-full text-center cursor-pointer">
          <button className="px-5 py-2 text-center uppercase rounded-full title text-lg lg:text-2xl cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
