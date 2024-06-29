import React from "react";
import { Splide, SplideSlide, SplideProps } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import hero1 from "../assets/images/hero-section/hero1.webp";
import hero2 from "../assets/images/hero-section/hero2.webp";
import hero3 from "../assets/images/hero-section/hero3.webp";
import hero4 from "../assets/images/hero-section/hero4.webp";

const HeroCarousel: React.FC = () => {
  const options: SplideProps["options"] = {
    type: "loop",
    autoplay: true,
    interval: 3000, // Interval for autoplay (3000ms = 3s)
    pauseOnHover: false, // Determines if autoplay pauses on hover
    pauseOnFocus: false, // Determines if autoplay pauses on focus
    arrows: false, // Hide the navigation arrows
  };

  const images = [
    {
      src: hero1,
      alt: "Image 1",
    },
    {
      src: hero2,
      alt: "Image 2",
    },
    {
      src: hero3,
      alt: "Image 3",
    },
    {
      src: hero4,
      alt: "Image 4",
    },
  ];

  return (
    <div className="mx-6 py-4">
      <Splide aria-label="My Favorite Images" options={options}>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              loading="lazy"
              src={image.src}
              alt={image.alt}
              className="h-[400px] w-full rounded-lg object-cover object-top"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HeroCarousel;
