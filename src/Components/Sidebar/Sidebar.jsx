import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiMenu, FiHome, FiUser, FiCalendar } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { MdHistory } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const iconData = [
    { icon: <FiHome />, name: "Home" },
    { icon: <FiUser />, name: "Patient Profile" },
    { icon: <FiCalendar />, name: "Appointment" },
    { icon: <MdHistory />, name: "Medical History" },
    { icon: <RiSettings4Line />, name: "Settings" },
    // Add more items as needed
  ];
  return (
    <div className=" flex">
      <div
        style={{
          position:
            (open && window.innerWidth <= 640) || window.innerWidth <= 834
              ? "fixed"
              : "relative",
        }}
        className={`bg-white min-h-screen relative  duration-300 ${
          open ? "w-[270px]" : " w-[70px] "
        }`}
      >
        {open ? (
          <IoIosArrowBack
            onClick={() => setOpen(false)}
            className=" text-4xl p-1 text-[#FF7594] shadow-md bg-white rounded-full absolute -right-4 top-5 cursor-pointer"
          />
        ) : (
          <FiMenu
            onClick={() => setOpen(true)}
            className=" text-4xl p-1 text-[#FF7594] shadow-md bg-white rounded-full absolute -right-4 top-5 cursor-pointer"
          />
        )}
        <div className={`flex items-center m-5 gap-6   ${!open && "scale-0"}`}>
          <img
            className=" w-9 h-9"
            src="/public/assets/fluent_doctor-48-filled.png"
            alt=""
          />
          <h1 className="text-2xl font-normal">
            Medi<span className=" text-[#FF7594;]">Doc</span>
          </h1>
        </div>
        <div className=" text-3xl mt-16 m-5 flex flex-col gap-6">
          {iconData.map((icon) => (
            <div
              key={icon.name}
              className=" inline-flex text-[#2E1619] whitespace-nowrap cursor-pointer hover:text-[#FF7594] transition-all transform duration-300 items-center"
            >
              {icon.icon}
              <h1
                className={` origin-left ml-7  text-base font-medium  ${
                  !open && "hidden  "
                }`}
              >
                {icon.name}
              </h1>
            </div>
          ))}
        </div>

        {/* appointment button */}
        {!open ? (
          <div className=" mt-48">
            <div
              className={`p-2 w-10 h-10 bg-[#FF7C65] rounded-full m-4 flex flex-col gap-6`}
            >
              <img src="/public/assets/Default.png" alt="" />
            </div>
          </div>
        ) : (
          <div className=" mt-48">
            <div className=" flex justify-center ">
              <button className="origin-left text-base font-medium bg-gradient-to-r from-[#FF7594]  to-[#FF7C65] p-3 rounded text-white whitespace-nowrap">
                New Appointment
              </button>
            </div>
          </div>
        )}
      </div>
      <div className=" bg-[#F9F9F9] w-full  text-justify pl-[80px] large:ml-0 ">
        <div className="flex justify-between items-center p-4">
          <button className="btn btn-ghost text-xl text-[#646F75]">Home</button>

          {/* toggle and profile*/}
          <div className=" flex justify-center item-center gap-3">
          <div className=" flex justify-center items-center">
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
