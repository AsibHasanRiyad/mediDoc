const ToDo = () => {
  return (
    <div className="bg-white shadow p-3 shadow-[#b8b7b7] rounded-md mt-8">
      <h1>TO-DO-LIST</h1>
      <div className=" flex items-start gap-5">
        <textarea
          name=""
          id=""
          rows="4"
          className=" border border-[#EDEBEB] rounded-md w-full"
        ></textarea>
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
          Add
        </button>
      </div>
    </div>
  );
};

export default ToDo;