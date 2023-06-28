import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import bannerImg1 from "../../../assets/Banner/banner1.jpeg";
import bannerImg2 from "../../../assets/Banner/banner2.jpeg";
import bannerImg3 from "../../../assets/Banner/banner3.jpeg";
import bannerImg4 from "../../../assets/Banner/banner4.jpeg";
import bannerImg5 from "../../../assets/Banner/banner5.jpeg";
import bannerImg6 from "../../../assets/Banner/banner6.jpeg";
import bannerImg7 from "../../../assets/Banner/banner7.jpeg";
import bannerImg8 from "../../../assets/Banner/banner8.jpeg";
import bannerImg9 from "../../../assets/Banner/banner9.jpeg";

import { SwiperNavButtons } from "../../../components/SwiperNavButtons/SwiperNavButtons";

const Banner = () => {
  const bannerImages = [
    bannerImg1,
    bannerImg2,
    bannerImg3,
    bannerImg4,
    bannerImg5,
    bannerImg6,
    bannerImg7,
    bannerImg8,
    bannerImg9,
  ];

  return (
    <>
      <div className="w-[90%] ml-auto -mt-32 uppercase">
        <Swiper className="mySwiper relative">
          {bannerImages.map((item, index) => (
            <SwiperSlide key={index}>
              <>
                <div className="w-full flex h-screen">
                  <div className="w-[45%] h-full flex   flex-col justify-center">
                    <p className="text-xl font-bold ">ClimbHigh</p>

                    <div className="text-4xl font-bold ">
                      <p className="font-semibold my-5">
                        Training and Fitness{" "}
                      </p>
                      <p>For Climbing</p>
                    </div>
                  </div>
                  <div className="w-[55%]  flex">
                    <div className="relative w-full -mt-32">
                      <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                          backgroundImage: `url(${item})`,
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    </div>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
          <SwiperNavButtons></SwiperNavButtons>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
