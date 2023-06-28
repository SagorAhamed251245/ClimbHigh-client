import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { setUser } from "../../api/userApi";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const { singInUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    const { email, password } = data;
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        {
          location.state?.from?.pathname
            ? navigate(location.state.from.pathname)
            : navigate("/");
        }
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error.message);
        
      });
  };
  return (
    <div className="w-full bg-white h-[90vh] ">
      <div className="border text-black   bg-white font-bold w-[45%] mx-auto   flex items-center justify-center">
        <div className="w-full ">
          <div className="w-full h-16 border p-5">
            <p>Allray register</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  items-center  flex-col w-full"
          >
            <div className="flex w-full h-60 p-5 flex-col ">
              <p>I am a returning customer</p>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  className="w-[80%] py-2 px-4  shadow-sm border-gray-400 border"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="mb-4 ">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <input
                  {...register("password")}
                  id="password"
                  className="w-[80%] py-2 px-4  shadow-sm border-gray-400 border"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
            </div>
            <div className="w-full flex h-16  border items-center justify-end pr-5">
              <button
                type="submit"
                className="py-2 hover:bg-slate-400 text-black bg-slate-300 w-28 rounded-sm font-bold h-10 "
              >
                Login
              </button>
            </div>
          </form>
          <div className="w-full flex h-16 border items-center justify-end pr-5 gap-3">
            <p>If you dont have account</p>
            <Link to="/register">
              <button className="py-2 hover:bg-slate-400  text-black bg-slate-300 w-28 rounded-sm font-bold h-10 ">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
