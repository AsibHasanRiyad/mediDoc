import Covid from "../Covid/Covid";

const Appointments = () => {
  const appointments = [
    {
      year: "2022",
      month: "Sep",
      date: "22",
      name: "Dr. Muhammad Abdul Hussein",
      role: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
    },
    {
      year: "2022",
      month: "Sep",
      date: "22",
      name: "Dr. Muhammad Abdul Hussein",
      role: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
    },
    {
      year: "2022",
      month: "Sep",
      date: "22",
      name: "Dr. Muhammad Abdul Hussein",
      role: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
    },
    {
      year: "2022",
      month: "Sep",
      date: "22",
      name: "Dr. Muhammad Abdul Hussein",
      role: "Cardiologist",
      slot: "Morning",
      time: "10.00 AM",
    },
  ];
  return (
    <div className=" order-2">
        <div className="bg-white shadow p-3 shadow-[#b8b7b7] rounded-md h-[570px] overflow-scroll ">
      <h1>Upcoming Appointments</h1>
      {/* appointments */}
      <div className=" mt-6">
        {appointments.map((appointment) => (
          <ol
            key={appointment.id}
            className="relative border-s border-gray-200 dark:border-gray-700"
          >
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-[#98FFC1] rounded-full mt-10 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <div className=" flex">
                  <div className=" text-[#384449] text-[20px] font-medium border border-[#EDEBEB] p-3 rounded-2xl flex flex-col justify-center items-center">
                    <h1 className=" text-[14px]">{appointment.year}</h1>
                    <h1 className=" text-[#384449] font-bold py-2">
                      {appointment.date}
                    </h1>
                    <h1>{appointment.month}</h1>
                  </div>
                  <div className=" w-full border border-[#FDDAD6] bg-[#FFF5F5] px-2 py-[6px] rounded-2xl leading-6">
                    <h1 className=" text-[16px] text-[#384449] font-medium">
                      {appointment.name}
                    </h1>
                    <h1 className=" text-[14px] text-[#2E1619]">
                      {appointment.role}
                    </h1>
                    <div className=" flex gap-0 large:gap-5 items-center text-[#8A8686] ">
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

    {/* Covid */}
    <Covid />
    </div>
  );
};

export default Appointments;
