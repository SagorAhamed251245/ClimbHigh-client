import galleryImg1 from "../../../assets/gallery/gallery1.jpg";
import galleryImg2 from "../../../assets/gallery/gallery2.jpg";
import galleryImg3 from "../../../assets/gallery/gallery3.jpg";
import galleryImg4 from "../../../assets/gallery/gallery4.jpg";
import galleryImg5 from "../../../assets/gallery/gallery5.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2  md:grid-cols-3 w-full h-auto lg:h-[500px] mb-32">
      {/* 1 */}
      <div className="  flex w-full flex-col relative">
        <div className="h-[400px] w-full  flex">
          <img src={galleryImg1} className="object-cover rounded-lg" alt="" />
        </div>
        <div className=" h-[200px] flex   absolute  bottom-0 left-[50%]">
          <img src={galleryImg2} className="object-cover rounded-lg" alt="" />
        </div>
      </div>
      {/* 2 */}

      <div className="w-full hidden  md:flex justify-center  flex-col gap-6 pl-3">
        <h2 className="font-bold text-xs md:text-base">ClimbHigh</h2>
        <h3 className="lg:text-5xl font-bold text-xl ">Get your GEAR AND EQUIPMENT</h3>
        <p className="w-[90%] text-xs font-bold">Mountaineering, mountain climbing, or alpinism, is a set of outdoor activities that involves ascending mountains.</p>
      </div>
      {/* 3 */}
      <div className=" flex w-full flex-col relative">
        <div className="h-[200px] absolute  flex right-0">
          <img src={galleryImg3} className="object-cover rounded-lg" alt="" />
        </div>
        <div className=" h-[200px] flex   absolute top-[30%]  left-[20%]">
          <img src={galleryImg5} className="object-cover rounded-lg" alt="" />
        </div>
        <div className=" h-[200px] flex   absolute bottom-0 left-0">
          <img src={galleryImg4} className="object-cover rounded-lg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
