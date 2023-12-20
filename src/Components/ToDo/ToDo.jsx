/* eslint-disable react/no-unknown-property */
const ToDo = () => {
  return (
    <div className="bg-white dark:bg-[#2D2322] min-h-screen-h-[570px] max-h-[571px] overflow-scroll shadow p-5 shadow-[#b8b7b7] rounded-md mr-0   large:mr-0 block dark:shadow-none ">
      <h1 className=" text-[18px] font-medium text-[#2E1619] dark:text-white pb-2">
        TO-DO-LIST
      </h1>
      <div className=" flex items-start large:gap-5 relative">
        <textarea
          name=""
          id=""
          rows="4"
          className=" border border-[#EDEBEB] dark:bg-[#959190] rounded-md w-full p-2"
        ></textarea>
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none" className=" block large:hidden absolute top-16 right-[10px] ">
  <g filter="url(#filter0_d_1_19982)">
    <rect x="2" y="1" width="24.566" height="24.566" rx="12.283" fill="url(#paint0_linear_1_19982)" shape-rendering="crispEdges"/>
    <path d="M14.3821 13.184V9.71698H13.3915V13.184H9.92453V14.1745H13.3915V17.6415H14.3821V14.1745H17.8491V13.184H14.3821Z" fill="white"/>
  </g>
  <defs>
    <filter id="filter0_d_1_19982" x="0.415094" y="0.207547" width="27.7359" height="27.7359" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="0.792453"/>
      <feGaussianBlur stdDeviation="0.792453"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_19982"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_19982" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_1_19982" x1="5.90454" y1="-28.8701" x2="38.7876" y2="-22.3203" gradientUnits="userSpaceOnUse">
      <stop offset="0.00315941" stop-color="#FF7594"/>
      <stop offset="0.942708" stop-color="#FF7C65"/>
    </linearGradient>
  </defs>
</svg>
        <div>
          
        </div>
        <button className=" bg-gradient-to-r from-[#FF7594] to-[#FF7C65] hidden large:flex items-center gap-1 p-3 rounded-md w-28 justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z"
              fill="#FBFBFB"
            />
          </svg>
          Add
        </button>
      </div>
      {/* select all */}
      <div className=" flex justify-between items-center mt-6">
        <h1 className=" flex items-center gap-3">
          <input
            type="checkbox"
            checked
            className="checkbox border-white checked:border-white [--chkbg:theme(colors.gray.300)] [--chkfg:white] "
          />
          Select All
        </h1>
        <button className=" bg-gradient-to-r from-[#FF7594] to-[#FF7C65] flex items-center gap-1 p-3 rounded-md w-28 justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M5.75356 10.5C5.59256 10.5 5.43856 10.4335 5.32831 10.3163L2.49156 7.29521C2.27047 7.06071 2.28272 6.69146 2.51722 6.47096C2.75231 6.25046 3.12156 6.26213 3.34147 6.49663L5.74773 9.05804L10.6524 3.69021C10.8706 3.45163 11.2392 3.43588 11.4772 3.65288C11.7146 3.86988 11.731 4.23913 11.514 4.47655L6.18406 10.3099C6.07498 10.43 5.91981 10.4989 5.75764 10.5H5.75356Z"
              fill="#FBFBFB"
            />
          </svg>
          Done
        </button>
      </div>
      <div className=" mt-7 font-medium text=[#2E1619] text-[18px] space-y-5">
        <h1 className=" flex items-center gap-3">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox border-white checked:border-white [--chkbg:theme(colors.rose.400)] [--chkfg:white]  "
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span className=" text-[#E0E0E0]">Last Added: 10 sep 2022</span>
        </h1>
        <h1 className=" flex items-center gap-3 ">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox border-white checked:border-white [--chkbg:theme(colors.gray.300)] [--chkfg:white]   "
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span className=" text-[#E0E0E0]">Last Added: 10 sep 2022</span>
        </h1>
        <h1 className=" flex items-center gap-3">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox border-white checked:border-white [--chkbg:theme(colors.gray.300)] [--chkfg:white] "
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span className=" text-[#E0E0E0]">Last Added: 10 sep 2022</span>
        </h1>
        <h1 className=" flex items-center gap-3">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox border-white checked:border-white [--chkbg:theme(colors.gray.300)] [--chkfg:white] "
          />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span className=" text-[#E0E0E0]">Last Added: 10 sep 2022</span>
        </h1>
      </div>
    </div>
  );
};

export default ToDo;
