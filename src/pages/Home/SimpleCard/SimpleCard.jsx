import cardImage1 from "../../../assets/Items/cardItem1.jpg";
import cardImage2 from "../../../assets/Items/cardItem2.jpg";
import cardImage3 from "../../../assets/Items/cardItem3.jpg";
import cardImage4 from "../../../assets/Items/cardItem4.jpg";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";

const cardItems = [
  {
    _id: 1,
    image: cardImage1,
    name: "Item1",
    color: "blue",
    price: "33.59",
  },
  {
    _id: 2,
    image: cardImage2,
    name: "Item2",
    color: "blue",
    price: "33.59",
  },
  {
    _id: 3,
    image: cardImage3,
    name: "Item3",
    color: "blue",
    price: "33.59",
  },
  {
    _id: 4,
    image: cardImage4,
    name: "Item4",
    color: "blue",
    price: "33.59",
  },
];
const SimpleCard = () => {
  return (
    <>
      
        <div className="grid grid-cols-4 gap-3 h-auto  mt-32 w-[85%] mx-auto uppercase">
          {cardItems.map((item, index) => (
            <div key={index} className=" flex flex-col h-[450px] group  ">
              {/* Card Image */}
              <div className="h-[40%] mb-3 w-full flex justify-center ">
                <img
                  className="object-cover  group-hover:scale-[110%]"
                  src={item.image}
                  alt=""
                />
              </div>
              {/* Card body */}

              <div className="flex flex-col   h-[60%] justify-between ">
                <p className="text-sm font-bold"> ----ClimbHigh</p>
                <h3 className="text-3xl  font-bold">
                  {item.name.slice(0, 10)}...
                </h3>
                <p className="font-bold  text-sm">{item.color}</p>
                <p className="text-2xl font-bold">{item.price}</p>
                <div>
                <ButtonPrimary title={"Add To Cart"}></ButtonPrimary>
                </div>
              </div>
              {/* end card */}
            </div>
          ))}
        </div>
     
    </>
  );
};

export default SimpleCard;
