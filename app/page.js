import BrandMarquee from "./components/home/BrandMarquee";
import FeaturedCategory from "./components/home/FeaturedCategory";
import Hero from "./components/home/Hero";
import Products from "./components/home/Products";
import Review from "./components/home/Review";
import Container from "./utils/Container";

export default function Home() {
  return (
    <>
      <div className="bg-[#F2F0F1]">
        <Container>
          <Hero />
        </Container>
      </div>
      <BrandMarquee />
      <Products />
      <FeaturedCategory />
      <Review />
    </>
  );
}
