import {  useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiMenu, FiHome, FiUser } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { RiSettings4Line } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import Appointments from "../Appoinments/Appointments";
import Covid from "../Covid/Covid";
import ToDo from "../ToDo/ToDo";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const iconData = [
    { icon: <FiHome />, name: "Home" },
    { icon: <FiUser />, name: "Patient Profile" },
    { icon: <IoCalendarOutline />, name: "Appointment" },
    { icon: <MdHistory />, name: "Medical History" },
    { icon: <RiSettings4Line />, name: "Settings" },
    // Add more items as needed
  ];

  return (
    <div className="flex">
      <div
        style={{
          position:
            (open && window.innerWidth <= 640) || window.innerWidth <= 834
              ? "fixed"
              : "relative",
        }}
        className={`bg-white dark:bg-[#2E1619]  min-h-screen relative  duration-300 z-20 mid:inline ${
          open ? "w-[270px]" : " w-0 mid:w-[70px] "
        }`}
      >
        {open ? (
          <IoIosArrowBack
            onClick={() => setOpen(false)}
            className=" text-4xl p-1 text-[#FF7594] dark:text-white dark:bg-[#FF7594] shadow-md bg-white rounded-full absolute -right-4 top-5 cursor-pointer"
          />
        ) : (
          <FiMenu
            onClick={() => setOpen(true)}
            className=" text-4xl p-1 text-[#FF7594] dark:text-white dark:bg-[#FF7594] shadow-md bg-white rounded-md absolute right-4 top-5 cursor-pointer"
          />
        )}
        <div className={`flex items-center m-5 gap-6   ${!open && "scale-0"}`}>
          <img
            className=" w-9 h-9"
            src="https://i.ibb.co/T8Z0crG/fluent-doctor-48-filled.png"
            alt=""
          />
          <h1 className="text-2xl dark:text-white font-normal">
            Medi<span className=" text-[#FF7594;]">Doc</span>
          </h1>
        </div>
        <div className=" text-3xl mt-16 m-5 flex flex-col gap-6">
          {iconData.map((icon) => (
            <div
              key={icon.name}
              className=" inline-flex text-[#2E1619] dark:text-[#D1D5DB] whitespace-nowrap cursor-pointer hover:text-[#FF7594] dark:hover:text-[#FF7594] transition-all transform duration-300 items-center"
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
          <div className=" mt-48 small:hidden mid:inline">
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

      {/* Content */}
      <div className=" bg-[#F9F9F9] dark:bg-[#150A09] w-full small:pl-0 mid:pl-[100px] large:pl-[50px] pr-0 mid:pr-10 pb-10">
        <Navbar setOpen={setOpen} />

  
        
        <div
          className={` mid:grid mid:grid-cols-1 large:grid-cols-6 grid-flow-row-dense ${
            open ? "gap-6" : " gap-0 large:gap-28"
          }`}
        >
          <div className="col-span-4 order-1">
            <Hero  />
          </div>
          <div className={`order-2 small:px-5 mid:px-0 mid:mr-5 large:mr-0  large:order-3 col-span-1 mid:col-span-2 large:col-span-4 ${open ? ' mt-5 large:-mt-24' : ' mt-10 large:-mt-48'} `}>
            <ToDo />
          </div>
          <div className={` order-3 small:px-5 mid:px-0 col-span-1 mid:col-span-2  large:order-2 small:mt-10 mid:mt-0  ${open ? ' -mt-5 mid:-mt-5 large:-mt-0' : ' mt-0 large:-mt-0'}`}>
            <Appointments />
          </div>
          <div className={` order-4 small:px-5 mid:px-0 col-span-1 mid:col-span-4 large:col-span-2  ${open ? ' -mt-5 large:mt-0' : ' mt-0 large:-mt-20'}`}>
            <Covid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
