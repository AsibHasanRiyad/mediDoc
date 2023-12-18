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
    { icon:<RiSettings4Line />,   name: "Settings" },
    // Add more items as needed
  ];
  return (
    <div className=" flex">
      <div
        className={`bg-white w-60 min-h-screen relative  duration-200 ${
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
        <div className=" text-3xl mt-24 m-5 space-y-5">
          {iconData.map((icon) => (
            <div
              key={icon.id}
              className=" inline-flex text-[#2E1619] cursor-pointer hover:text-[#FF7594] items-center"
            >
              {/* <FiHome className=" text-3xl" /> */}
              {icon.icon}
              <h1
                className={` origin-left ml-7  text-base font-medium  ${
                  !open && "hidden "
                }`}
              >
                {icon.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-[#F9F9F9] w-screen pl-8 pt-5 ">Home</div>
    </div>
  );
};

export default Sidebar;
