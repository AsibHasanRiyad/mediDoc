const Covid = () => {
  return (
    <div className=" mid:col-span-4 large:col-span-2 order-4 bg-white shadow p-3 shadow-[#b8b7b7] text-[#2E1619] font-medium rounded-md overflow-scroll mt-10 large:mt-0">
      <div className=" flex justify-between">
        <h1>Covid-19 Updates</h1>

        <div className=" flex flex-col items-end">
          <h1>
            10 September 2022 <br />
          </h1>
          <h1 className=" text-[#8A8686]">Thursday 10:00:00 AM</h1>
        </div>
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
