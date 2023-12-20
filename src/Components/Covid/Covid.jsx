const Covid = () => {
  return (
    <div className="  bg-white dark:bg-[#2D2322] shadow p-3 shadow-[#b8b7b7] dark:shadow-none text-[#2E1619] dark:text-white font-medium rounded-md overflow-scroll mt-10 large:mt-0 h-full">
      <div className=" flex justify-between">
        <h1>Covid-19 Updates</h1>

        <div className=" flex flex-col items-end">
          <h1>
            10 September 2022 <br />
          </h1>
          <h1 className=" text-[#8A8686] dark:text-white">Thursday 10:00:00 AM</h1>
        </div>
      </div>
      <div className=" flex flex-col mid:flex-row justify-between items-center mt-4 gap-10 large:gap-0">
        <div>
          <img className=" h-fit" src="/public/assets/Svg_sample2.png" alt="" />
        </div>
        <div className=" bg-gradient-to-r from-[#FF7594] to-[#FF7C65] h-full text-white text-[14px] px-4 py-6 rounded-md text-center leading-10 mid:max-h-[200px] overflow-scroll w-48 mid:w-full large:w-fit ">
          <div className=" grid grid-cols-1 mid:grid-cols-2 gap-5 large:gap-0 large:grid-cols-1">
            <div>
              <h1>Infection Number</h1>
              <h1 className=" text-3xl font-medium">500</h1>
            </div>
            <div>
              <h1>Total Infection</h1>
              <h1 className=" text-3xl font-medium">500,000</h1>
            </div>
            <div>
              <h1>Infection Rate</h1>
              <h1 className=" text-3xl font-medium">10%</h1>
            </div>
            <div>
              <h1 className=" text-[14px] large:text-[10px]">Number of Death</h1>
              <h1 className=" text-3xl font-medium">20</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covid;
