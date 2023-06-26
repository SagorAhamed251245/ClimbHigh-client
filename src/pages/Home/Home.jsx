import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import SimpleCard from "./SimpleCard/SimpleCard";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="text-white h-auto scroll-smooth">
      <Banner className="scroll-smooth "></Banner>
      <SimpleCard></SimpleCard>
      <Slider></Slider>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
