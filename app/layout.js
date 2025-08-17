import MainHeader from "./components/header/MainHeader";
import MiniHeader from "./components/header/MiniHeader";
import "./globals.css";
import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./components/footer/Footer";
export const metadata = {
  title: "Shop.co | E-commerce Store",
  description: "Develop by Md Zahid Hasan Nipu",
};
const integralcf = localFont({
  src: [
    {
      path: "./assets/fonts/integralcf-regular.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./assets/fonts/integralcf-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/integralcf-extrabold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/integralcf-heavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-integralcf",
});
const satoshi = localFont({
  src: [
    {
      path: "./assets/fonts/Satoshi-Variable.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./assets/fonts/Satoshi-Variable.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Satoshi-Variable.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${integralcf.variable} ${satoshi.variable} w-100vh h-100vh`}
      >
        <div className="sticky top-0 z-50 bg-white ">
          <MiniHeader />
          <MainHeader />
        </div>
        <div className="pb-40">{children}</div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
