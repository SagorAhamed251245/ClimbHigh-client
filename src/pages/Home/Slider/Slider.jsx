import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Container from "../../../components/Container/Container";
import { Bounce } from "react-awesome-reveal";
import SliderButton from "./SliderButton";

const Slider = () => {
  const word = "Hello";
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
      <div className="my-32 ">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          
          
          className="mySwiper relative "
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChangeTransitionEnd={handleSlideChange}
          centeredSlides={true}
          initialSlide={activeIndex}

        >
          {repeatedWords.map((word, index) => (
            <SwiperSlide key={index} >
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
