import { toast } from "react-hot-toast";
import { addProductToLocalStorage } from "../../api/LocalStorage";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import ProductApi from "../../api/productApi";

const AllProducts = () => {
  const [products] = ProductApi();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2  gap-5  h-auto my-32   w-[85%] mx-auto uppercase">
        {products.map((item) => (
          <div
            key={item._id}
            className=" flex flex-col h-[450px] group   text-white mt-32 border p-5"
          >
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
              <div
                onClick={() => {
                  addProductToLocalStorage({ id: item._id }),
                    toast.success("Item successfully Added To Cart.");
                }}
              >
                <ButtonPrimary title={"Add To Cart"}></ButtonPrimary>
              </div>
            </div>
            {/* end card */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
