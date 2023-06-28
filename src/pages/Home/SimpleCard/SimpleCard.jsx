
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";


const SimpleCard = ({products}) => {
 


  return (
    <>
      
        <div className="grid grid-cols-4 gap-3 h-auto  mt-32 w-[85%] mx-auto uppercase">
          {products.slice(0, 4).map((item) => (
            <div key={item._id} className=" flex flex-col h-[450px] group  ">
              {/* Card Image */}
              <div className="h-[40%] mb-3 w-full flex justify-center ">
                <img
                  className="object-cover  group-hover:scale-[110%]"
                  src={item.img}
                  alt=""
                />
              </div>
              {/* Card body */}

              <div className="flex flex-col   h-[60%] justify-between ">
                <p className="text-sm font-bold"> ----ClimbHigh</p>
                <h3 className="text-xl  font-bold">
                  {item.name.slice(0, 15)}...
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
