"use client";
import React from "react";
import Verified from "../../assets/icons/verified.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Container from "@/app/utils/Container";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
      image: Verified,
    },
    {
      id: 2,
      name: "Jane Smith",
      review:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 4,
      image: Verified,
    },
    {
      id: 3,
      name: "Alice Johnson",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      image: Verified,
    },
    {
      id: 4,
      name: "Alice Johnson",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 4,
      image: Verified,
    },
    {
      id: 5,
      name: "Alice Johnson",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      image: Verified,
    },
    {
      id: 6,
      name: "Alice Johnson",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      image: Verified,
    },
    {
      id: 7,
      name: "Alice Johnson",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      image: Verified,
    },
    {
      id: 8,
      name: "Alice Johnson",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      image: Verified,
    },
    ,
    {
      id: 9,
      name: "Alice Johnson",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      image: Verified,
    },
    {
      id: 10,
      name: "Alice Johnson",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
      image: Verified,
    },
  ];

  return (
    <>
      <div className="pb-32">
        <Container>
          <div className="flex justify-between items-center ">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-center uppercase title">
              Our Happy Customers
            </h2>
            <div className="flex items-center gap-x-2">
              <button className="prev bg-white p-2 lg:p-4 hover:bg-gray-200 rounded-full transition-all duration-300 cursor-pointer text-2xl">
                <FaLongArrowAltLeft />
              </button>
              <button className="next bg-white p-2 lg:p-4 hover:bg-gray-200 rounded-full transition-all duration-300 cursor-pointer">
                <FaLongArrowAltRight size={22} />
              </button>
            </div>
          </div>
        </Container>
        <div className="py-10 relative">
          <div className="p-5">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              slidesPerView={5}
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-white p-6 rounded-lg border border-black/10">
                    <div className="pb-3 flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-2xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-x-2">
                      <h3 className="text-xl font-semibold">{review.name}</h3>
                      <Image
                        src={review.image}
                        alt="Verified"
                        className="w-5 h-5 rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600">{review.review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden lg:block">
            <div className="absolute top-10 left-0 w-[20%] h-[80%] bg-white/20 backdrop-blur-xs rounded-3xl border border-white/30 z-30"></div>

            <div className="absolute top-10 right-0 w-[20%] h-[80%] bg-white/20 backdrop-blur-xs rounded-3xl border border-white/30 z-30"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
