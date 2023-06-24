import { useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex  absolute top-[50%] left-[43.2%] z-10">
      <button
        className="bg-white text-black font-bold pl-2 py-2 rounded-l-full flex justify-center items-center"
        onClick={() => swiper.slidePrev()}
      >
        
        <FaAngleLeft></FaAngleLeft>
      </button>
      <button
        className="bg-white text-black font-bold pr-2 py-2 rounded-r-full flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <FaAngleRight></FaAngleRight>
      </button>
    </div>
  );
};
