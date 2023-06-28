import ProductApi from "../../api/productApi";
import Banner from "./Banner/Banner";
import Category from "./CATEGORY/Category";
import Gallery from "./Gallery/Gallery";
import SimpleCard from "./SimpleCard/SimpleCard";
import Slider from "./Slider/Slider";

const Home = () => {
  const [products]= ProductApi()
  

  return (
    <div className="text-white h-auto scroll-smooth">
      <Banner className="scroll-smooth "></Banner>
      <SimpleCard products={products} ></SimpleCard>
      <Slider></Slider>
      <Gallery></Gallery>
      <Category products={products}></Category>
    </div>
  );
};

export default Home;
