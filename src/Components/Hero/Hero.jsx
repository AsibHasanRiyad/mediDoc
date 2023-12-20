import Cards from "../Cards/Cards";

const Hero = () => {
  return (
   <div className=" col-span-4 order-1">
     <div className=" grid grid-cols-2 justify-between items-center bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] rounded-lg">
      <div>
        <img src="/public/assets/Svg_sample1.png" alt="" />
      </div>
      <div className=" text-white leading-10">
        <h1 className=" text-2xl font-semibold">Hello, Mary Jane!</h1>
        <p>
          Stay Up-to-Date with your appointments. <br />
          You Have No pending Reports
        </p>
      </div>
    </div>
    <Cards />
   </div>
  );
};

export default Hero;
