import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";

import Container from "../../../components/Container/Container";
import { Bounce } from "react-awesome-reveal";
import SliderButton from "./SliderButton";

SwiperCore.use([Pagination, Navigation]);

const Slider = () => {
  const word = "ClimbHigh";
  const repeatCount = 24;

  const repeatedWords = Array(repeatCount).fill(word);

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  };

  return (
    <Container>
      <div className="my-32 hidden md:block">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          className="mySwiper relative"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChangeTransitionEnd={handleSlideChange}
          centeredSlides={true}
          initialSlide={activeIndex}
          breakpoints={{
            // When window width is >= 640px
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // When window width is >= 1280px
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {repeatedWords.map((word, index) => (
            <SwiperSlide key={index}>
              <div className="w-36 h-20 flex items-center justify-center font-bold text-2xl">
                {activeIndex === index ? (
                  <Bounce triggerOnce>
                    <div className="text-white">{word}</div>
                  </Bounce>
                ) : (
                  <div className="text-white opacity-20">{word}</div>
                )}
              </div>
            </SwiperSlide>
          ))}
          <SliderButton></SliderButton>
        </Swiper>
      </div>
    </Container>
  );
};

export default Slider;
