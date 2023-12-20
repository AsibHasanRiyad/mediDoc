/* eslint-disable react/prop-types */
import { FiMenu } from "react-icons/fi";
import Cards from "../Cards/Cards";

const Hero = ({ setOpen }) => {
  const handelOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] ">
        {/* for mobile device  */}
        <div className=" p-5">
          <FiMenu
            onClick={() => handelOpen()}
            className=" text-4xl p-1 text-[#FF7594] shadow-md bg-white rounded-md  cursor-pointer"
          />
        </div>
        <div className=" grid grid-cols-1 mid:grid-cols-2 justify-between items-center  mid:rounded-lg mid:mx-5 ">
          <div className=" flex small:justify-center mid:justify-start items-center">
            <img src="/public/assets/Svg_sample1.png" alt="" />
          </div>
          <div className=" text-white leading-10 ml-5 mid:ml-0 mb-10 mid:mb-0">
            <h1 className=" text-2xl font-semibold">Hello, Mary Jane!</h1>
            <p>
              Stay Up-to-Date with your appointments. <br />
              You Have No pending Reports
            </p>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Hero;
