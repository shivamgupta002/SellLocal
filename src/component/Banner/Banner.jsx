import { styled } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BannerImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: 280,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));

const HeroSection = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        slidesToSlide={1}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <BannerImage src="/HomeImage/home1.webp" alt="banner" />

        <BannerImage src="/HomeImage/home2.jpg" alt="banner2" />

        <BannerImage src="/HomeImage/home3.jpg" alt="banner3" />
      </Carousel>
    </>
  );
};

export default HeroSection;
