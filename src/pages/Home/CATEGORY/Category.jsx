import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";

// image

import galleryImg1 from "../../../assets/gallery/gallery1.jpg";
import galleryImg2 from "../../../assets/gallery/gallery2.jpg";
import galleryImg3 from "../../../assets/gallery/gallery3.jpg";
import galleryImg4 from "../../../assets/gallery/gallery4.jpg";
import galleryImg5 from "../../../assets/gallery/gallery5.jpg";
import bannerImg1 from "../../../assets/Banner/banner1.jpeg";
import bannerImg2 from "../../../assets/Banner/banner2.jpeg";
import bannerImg3 from "../../../assets/Banner/banner3.jpeg";
import bannerImg4 from "../../../assets/Banner/banner4.jpeg";

const items = [
  {
    image: galleryImg1,
    category: "BagPack",
  },
  {
    image: galleryImg2,
    category: "BagPack2",
  },
  {
    image: galleryImg3,
    category: "BagPack3",
  },
  {
    image: galleryImg4,
    category: "BagPack4",
  },
  {
    image: galleryImg5,
    category: "BagPack5",
  },
  {
    image: bannerImg1,
    category: "BagPack2",
  },
  {
    image: bannerImg2,
    category: "BagPack2",
  },
  {
    image: bannerImg3,
    category: "BagPack2",
  },
  {
    image: bannerImg4,
    category: "BagPack2",
  },
];

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper my-32 w-[80%] mx-auto"
      >
        <div>
          {items.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="w-full h-36 md:h-96  flex">
                <img
                  src={item.image}
                  className="object-cover w-full rounded-2xl"
                  alt=""
                />
              </div>
              <div className="absolute h-full w-full top-0 bg-black opacity-50 z-0"></div>
              <div className="absolute h-full w-full  top-0 z-10 ml-4">
                <div className="flex flex-col h-full justify-between">
                  <p className="font-bold">ClimbHigh</p>
                  <div>
                    <p className=" text-sm md:text-2xl font-bold mb-4 ">{item.category}</p>
                    <button className="py-2 hidden lg:inline-block w-28 bg-white text-black  rounded-sm font-bold">Add To Cart</button>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Category;
