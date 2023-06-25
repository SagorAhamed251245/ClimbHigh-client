import Banner from "./Banner/Banner";
import SimpleCard from "./SimpleCard/SimpleCard";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="text-white h-auto scroll-smooth">
      <Banner className="scroll-smooth "></Banner>
      <SimpleCard></SimpleCard>
      <Slider></Slider>
    </div>
  );
};

export default Home;
