import Container from "@/app/utils/Container";
import React from "react";
import Subscription from "./Subscription";
import Logo from "../../assets/logos/mainLogo.svg";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#F0F0F0] pt-36 lg:pt-40 pb-20 relative">
      <Subscription />
      <Container>
        <div className="grid grid-cols-5 gap-10">
          <div>
            <Image src={Logo} alt="Main Logo" className="w-[150px] h-auto" />
            <h4 className="para text-balance text-black/40 pt-4">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </h4>
            <div className="flex items-center gap-x-3 pt-5">
              <div className="bg-white p-2 rounded-full">
                <FaFacebookF
                  size={20}
                  className="text-black cursor-pointer hover:text-black/50 transition-all duration-300"
                />
              </div>
              <div>
                <FaYoutube
                  size={20}
                  className="text-black/40 cursor-pointer hover:text-black transition-all duration-300"
                />
              </div>
              <div>
                <FaInstagram
                  size={20}
                  className="text-black/40 cursor-pointer hover:text-black transition-all duration-300"
                />
              </div>
              <div>
                <FaLinkedin
                  size={20}
                  className="text-black/40 cursor-pointer hover:text-black transition-all duration-300"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3 className="para font-bold tracking-widest uppercase">
                Company
              </h3>
            </div>
            <div className="pt-5 space-y-5">
              <Link href="/" className="block">
                <p className="para text-black/50">About</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Features</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Works</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Career</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <h3 className="para font-bold tracking-widest uppercase">Help</h3>
            </div>
            <div className="pt-5 space-y-5">
              <Link href="/" className="block">
                <p className="para text-black/50">Customer Support</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Delivery Details</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Terms and Conditions</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Privacy Policy</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <h3 className="para font-bold tracking-widest uppercase">FAQ</h3>
            </div>
            <div className="pt-5 space-y-5">
              <Link href="/" className="block">
                <p className="para text-black/50">Account</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Manage Deliveries</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Orders</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Payments</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <h3 className="para font-bold tracking-widest uppercase">
                Resources
              </h3>
            </div>
            <div className="pt-5 space-y-5">
              <Link href="/" className="block">
                <p className="para text-black/50">Free eBooks</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Development Tuitorial</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">How to Blog</p>
              </Link>
              <Link href="/" className="block">
                <p className="para text-black/50">Youtube Playlist</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-10">
          <hr className="border-black/20" />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="para text-black/50">
              © {new Date().getFullYear()} Shop.co All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
