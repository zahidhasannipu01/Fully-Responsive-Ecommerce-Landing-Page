"use client";

import Container from "@/app/utils/Container";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productData } from "../data/product";
import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Products = () => {
  const swiperBreakpoints = {
    0: { slidesPerView: 1.5, spaceBetween: 10 },
    320: { slidesPerView: 1.5, spaceBetween: 10 },
    480: { slidesPerView: 1.5, spaceBetween: -30 },
    640: { slidesPerView: 1, spaceBetween: -500 },
    1024: { slidesPerView: 4, spaceBetween: 30 },
  };

  return (
    <Container>
      <div className="py-20 w-full lg:w-full">
        <div>
          <div className="text-center">
            <h2 className="lg:text-5xl text-3xl font-extrabold uppercase title">
              New Arrival
            </h2>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={swiperBreakpoints}
              pagination={{ clickable: true }}
              className="mt-10"
            >
              {productData.map((item, index) => {
                const discountedPercentage =
                  (item.discountedPrice / item.productPrice) * 100;
                const Percentage = Math.round(100 - discountedPercentage);
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full max-w-[295px] h-full text-nowrap"
                  >
                    <div>
                      <div className="w-full max-w-[295px] h-[295px] rounded-3xl overflow-hidden  cursor-pointer ">
                        <Image
                          src={item.productImage}
                          alt={item.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <div className="pt-3 px-1">
                          <h3 className="text-lg font-bold cursor-pointer text-balance">
                            {item.productName}
                          </h3>
                        </div>
                        <div className="pt-3 px-1 flex items-center justify-start">
                          <div className="flex">
                            {Array.from({ length: 5 }, (_, i) =>
                              i + 1 <= Math.floor(item.rating) ? (
                                <FaStar
                                  key={i}
                                  size={20}
                                  className="text-yellow-500"
                                />
                              ) : i < item.rating ? (
                                <FaStarHalfAlt
                                  key={i}
                                  size={20}
                                  className="text-yellow-500"
                                />
                              ) : (
                                <FaRegStar
                                  key={i}
                                  size={20}
                                  className="text-gray-300"
                                />
                              )
                            )}
                          </div>
                          <div>
                            <p className="text-black/50 para pl-2">
                              <span className="text-black">{item.rating}</span>
                              /5
                            </p>
                          </div>
                        </div>
                        <div className="pt-3">
                          <div className="flex justify-start items-center gap-x-2">
                            <p className="text-xl para font-[600]">
                              ${item.productPrice}
                            </p>
                            {item.discountedPrice && (
                              <p className="text-lg para font-[600] line-through text-black/50">
                                ${item.discountedPrice}
                              </p>
                            )}
                            {item.discountedPrice && (
                              <p className="text-xs bg-red-500/20 px-2 py-1 rounded-full para font-[600] text-red-500">
                                {Percentage} %
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="py-10 flex justify-center items-center">
            <button className="text-center rounded-full py-3 px-10 border hover:bg-black/10 transition-all duration-300 border-black/20 text-black cursor-pointer para">
              View All
            </button>
          </div>
        </div>

        <div className="py-20">
          <hr className="border-black/20" />
        </div>

        <div className="w-full h-auto">
          <div className="text-center">
            <h2 className="lg:text-5xl text-3xl font-extrabold uppercase title">
              TOP selling
            </h2>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              breakpoints={swiperBreakpoints}
              pagination={{ clickable: true }}
              className="mt-10"
            >
              {productData.map((item, index) => {
                const discountedPercentage =
                  (item.discountedPrice / item.productPrice) * 100;
                const Percentage = Math.round(100 - discountedPercentage);
                return (
                  <SwiperSlide key={index} className="w-full h-full ">
                    <div>
                      <div className="w-full max-w-[295px] h-[295px] rounded-3xl overflow-hidden  cursor-pointer ">
                        <Image
                          src={item.productImage}
                          alt={item.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <div className="pt-3 px-1">
                          <h3 className="text-lg font-bold cursor-pointer text-balance">
                            {item.productName}
                          </h3>
                        </div>
                        <div className="pt-3 px-1 flex items-center justify-start">
                          <div className="flex">
                            {Array.from({ length: 5 }, (_, i) =>
                              i + 1 <= Math.floor(item.rating) ? (
                                <FaStar
                                  key={i}
                                  size={20}
                                  className="text-yellow-500"
                                />
                              ) : i < item.rating ? (
                                <FaStarHalfAlt
                                  key={i}
                                  size={20}
                                  className="text-yellow-500"
                                />
                              ) : (
                                <FaRegStar
                                  key={i}
                                  size={20}
                                  className="text-gray-300"
                                />
                              )
                            )}
                          </div>
                          <div>
                            <p className="text-black/50 para pl-2">
                              <span className="text-black">{item.rating}</span>
                              /5
                            </p>
                          </div>
                        </div>
                        <div className="pt-3">
                          <div className="flex justify-start items-center gap-x-2">
                            <p className="text-xl para font-[600]">
                              ${item.productPrice}
                            </p>
                            {item.discountedPrice && (
                              <p className="text-lg para font-[600] line-through text-black/50">
                                ${item.discountedPrice}
                              </p>
                            )}
                            {item.discountedPrice && (
                              <p className="text-xs bg-red-500/20 px-2 py-1 rounded-full para font-[600] text-red-500">
                                {Percentage} %
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="py-10 flex justify-center items-center lg:w-auto w-auto">
            <button className="w-auto text-center rounded-full py-3 px-10 border hover:bg-black/10 transition-all duration-300 border-black/20 text-black cursor-pointer para">
              View All
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
