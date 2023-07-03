import { Link } from 'react-router-dom';
import errorImg from '../../assets/Banner/errorimg.gif' 
const Error = () => {
  return (
    <div className="bg-[#051512] h-screen flex items-center justify-center flex-col">
      <img className="" src={errorImg} alt="" />
      <p>
        <span className=" font-bold text-white">Go Back To </span>
        <Link>
          <button className="btn font-bold text-white my-14">Home Page</button>
        </Link>
      </p>
    </div>
  );
};

export default Error;
