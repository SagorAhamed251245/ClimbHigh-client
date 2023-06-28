import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper";




const Category = ({products}) => {
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
          {products.slice(0,9).map((item) => (
            <SwiperSlide key={item._id} className="relative">
              <div className="w-full h-36 md:h-96  flex">
                <img
                  src={item.images[0]}
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
