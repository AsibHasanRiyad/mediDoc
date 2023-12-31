

const Appointments = () => {
  const appointments = [
    {
      id:1,
      year: "2022",
      month: "Sep",
      date: "22",
      name: "Dr. Muhammad Abdul Hussein",
      role: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
      color:'#FF9898'
    },
    {
      id:2,
      year: "2022",
      month: "Sep",
      date: "22",
      name: "Dr. Muhammad Abdul Hussein",
      role: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
      color:'#FFF598'
    },
    {
      id:3,
      year: "2022",
      month: "Sep",
      date: "22",
      name: "Dr. Muhammad Abdul Hussein",
      role: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
      color:'#98FFC1'
    },
    {
      id:4,
      year: "2022",
      month: "Sep",
      date: "22",
      name: "Dr. Muhammad Abdul Hussein",
      role: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
      color:'#98C7FF'
    },
  ];
  return (
    <div className="  mid:mt-10 large:mt-0">
        <div className="bg-white dark:bg-[#2D2322] dark:shadow-none dark:text-white shadow p-3 shadow-[#b8b7b7] rounded-md h-[570px] overflow-scroll ">
      <h1 >Upcoming Appointments</h1>
      {/* appointments */}
      <div className=" mt-6">
        {appointments.map((appointment) => (
          <ol
            key={appointment.id}
            className="relative border-s border-gray-200 dark:border-gray-700"
          >
            <li className="mb-10 ms-4">
              <div 
              style={{
                backgroundColor: appointment.color
              }}
              className="absolute w-3 h-3 rounded-full mt-10 -start-1.5 border border-white  "></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <div className=" flex">
                  <div className=" text-[#384449] bg-white dark:bg-white text-[20px] font-medium border border-[#EDEBEB] z-10 p-3 rounded-2xl flex flex-col justify-center items-center">
                    <h1 className=" text-[14px]">{appointment.year}</h1>
                    <h1 className=" text-[#384449] font-bold py-2">
                      {appointment.date}
                    </h1>
                    <h1>{appointment.month}</h1>
                  </div>
                  <div className=" w-full border border-[#FDDAD6] bg-[#FFF5F5] dark:bg-[#8A8686] -ml-4 z-0 pl-6 px-2 py-[6px] rounded-2xl leading-6">
                    <h1 className=" text-[16px] text-[#384449] dark:text-white font-medium">
                      {appointment.name}
                    </h1>
                    <h1 className=" text-[14px] text-[#2E1619] py-1 dark:text-white">
                      {appointment.role}
                    </h1>
                    <div className=" flex gap-5 items-center text-[#8A8686] font-medium small:text-xs">
                      <h1 className="bg-white px-2 py-1 rounded-md">
                        {" "}
                        Slot:{" "}
                        <span className=" text-[#384449]">
                          {" "}
                          {appointment.slot}
                        </span>{" "}
                      </h1>
                      <h1 className="bg-white px-2 py-1 rounded-md">
                        {" "}
                        Time:{" "}
                        <span className=" text-[#384449]">
                          {" "}
                          {appointment.time}
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </time>
            </li>
          </ol>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Appointments;
