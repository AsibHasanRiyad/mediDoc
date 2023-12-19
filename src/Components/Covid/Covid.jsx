const Covid = () => {
  return (
    <div className=" bg-white shadow p-3 shadow-[#b8b7b7] rounded-md overflow-scroll mt-5">
      <div className=" flex justify-between">
        <h1>Covid-19 Updates</h1>
        <h1>
          10 September 2022 <br />
          <span>Thursday 10:00:00 AM</span>
        </h1>
      </div>
      <div className=" flex justify-between items-center mt-4">
        <div>
          <img className=" h-fit" src="/public/assets/Svg_sample2.png" alt="" />
        </div>
        <div className=" bg-gradient-to-r from-[#FF7594] to-[#FF7C65] h-full text-white text-base px-4 py-6 rounded-md text-center leading-10">
          <h1>Infection Number</h1>
          <h1 className=" text-4xl font-medium">500</h1>
          <h1>Infection Rate</h1>
          <h1 className=" text-4xl font-medium">10%</h1>
        </div>
      </div>
    </div>
  );
};

export default Covid;
