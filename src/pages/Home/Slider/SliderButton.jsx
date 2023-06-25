import { useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex w-full justify-between   absolute top-6 z-10">
      <button
        className="bg-white text-black font-bold h-8 w-8 rounded-full flex justify-center items-center"
        onClick={() => swiper.slidePrev()}
      >
        <FaAngleLeft></FaAngleLeft>
      </button>
      <button
        className="bg-white text-black font-bold h-8 w-8 rounded-full    flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <FaAngleRight></FaAngleRight>
      </button>
    </div>
  );
};

export default SliderButton;
