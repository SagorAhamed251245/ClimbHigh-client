import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { setUser } from "../../api/userApi";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, setUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    const { name, email, password, photo } = data;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUserProfile(name, photo);
        const userInfo = {
          displayName: name,
          email: result.user.email,
        };

        setUser(userInfo);

        location.state?.from?.pathname
          ? navigate(location.state.from.pathname)
          : navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full bg-white h-[90vh] ">
      <div className="border text-black   bg-white font-bold w-[45%] mx-auto   flex items-center justify-center">
        <div className="w-full ">
          <div className="w-full h-16 border p-5">
            <p>I am new, want register</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  items-center  flex-col w-full"
          >
            <div className="flex w-full h-auto p-5 flex-col ">
              <p>YOUR PERSONAL DETAILS</p>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  className="w-[80%] py-2 px-4  shadow-sm border-gray-400 border"
                  placeholder="Enter your Full Name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="photo" className="block mb-2">
                  PhotoUrl
                </label>
                <input
                  {...register("photo")}
                  id="photo"
                  className="w-[80%] py-2 px-4  shadow-sm border-gray-400 border"
                  placeholder="Enter your Photo url"
                  type="text"
                />
              </div>
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
                Register
              </button>
            </div>
          </form>
          <div className="w-full flex h-16 border items-center justify-end pr-5 gap-3">
            <p>If you have account go to</p>
            <Link to="/login">
              <button className="py-2 hover:bg-slate-400  text-black bg-slate-300 w-28 rounded-sm font-bold h-10 ">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
