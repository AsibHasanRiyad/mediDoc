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
        className={`bg-white w-60 min-h-screen relative  duration-300 ${
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
      <div className=" bg-[#F9F9F9] w-screen p-8 pt-5  text-justify ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nihil velit
        dolor iure aliquid earum possimus exercitationem odit, beatae veniam
        quod dolores molestiae deleniti architecto nostrum, temporibus tenetur
        nobis asperiores eum delectus dolorum dolore dolorem? Deleniti
        laudantium inventore non cumque in doloribus aliquam, fugiat quis
        voluptas, sit tempore rerum sunt expedita quae nesciunt. Quisquam vitae
        molestiae eum mollitia debitis esse?Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Maiores non sit consectetur nobis unde
        obcaecati inventore deserunt dolore, animi veritatis et! Provident nemo
        corrupti temporibus aliquam neque laborum optio, rerum exercitationem
        aliquid deleniti nobis magni fugiat officia fuga deserunt dolore ut?
        Deserunt porro cumque laboriosam optio sit esse iste rerum iusto debitis
        dicta molestias incidunt, nesciunt unde earum fugiat. Quo quod,
        veritatis cum illo explicabo maxime id? Repellat ab animi quia nisi
        porro sit facilis asperiores doloremque, rerum, libero nostrum commodi
        unde pariatur maxime? Quae, ex porro dicta voluptate fugiat dignissimos
        ab quisquam itaque placeat iusto! Iusto inventore id incidunt! Ex
        dolorum quod odit sunt et mollitia ea non odio. Eius numquam nulla vel
        nostrum sit odit voluptatem voluptatibus delectus corrupti consectetur,
        odio voluptate sunt eum! Eos quisquam impedit quidem aperiam voluptatem
        eum placeat officia quia, voluptas sint nihil omnis repellendus
        veritatis, deleniti incidunt sequi? Provident laborum eos reiciendis,
        perferendis iste fugiat repellendus doloribus ex, impedit similique odit
        accusamus, accusantium velit sapiente voluptas nostrum possimus
        aspernatur aliquid? Repudiandae possimus dignissimos incidunt magnam
        perferendis quis ad ducimus obcaecati tempore cumque! Rerum quod aliquid
        quaerat aperiam error delectus facilis ullam non laboriosam. Cum rem
        dolores commodi? Aspernatur optio ad quae explicabo dignissimos
        asperiores minus. Illum earum minima animi velit, labore adipisci id
        repellendus explicabo necessitatibus dolorum commodi autem reiciendis!
        Ducimus nulla dolorem totam maiores quasi odit! Cupiditate aut eaque
        dolor laborum nisi quidem a quisquam fugit esse repudiandae ad ipsa,
        neque quibusdam autem dolores, soluta ex deserunt, consequuntur veniam!
        Temporibus, vero? Mollitia tempora, eaque non quo corrupti iste rem
        repellat, vero nobis architecto ipsam veniam enim dolor voluptatum.
        Ratione tenetur, et suscipit, exercitationem eos excepturi blanditiis
        nesciunt hic, atque quas praesentium inventore perspiciatis maiores esse
        quae? Earum, odit fugit dolores exercitationem harum rerum soluta
        eveniet doloremque perspiciatis sapiente obcaecati, quod beatae,
        deleniti dicta error hic veniam qui. Eveniet praesentium minus, voluptas
        excepturi aliquid ut nobis necessitatibus sed dolorum consectetur nemo
        nulla nam rerum quas cum et possimus suscipit, alias rem quae nostrum.
        Est ratione in illum ducimus, nostrum, deleniti, iste eveniet placeat
        repellendus voluptas repudiandae quam sequi natus doloremque odit
        dolorem saepe nobis qui distinctio consectetur. Mollitia alias quasi, a
        quos nam corrupti magnam? Voluptatum vero vitae voluptate repudiandae
        ratione hic, quisquam est veniam architecto dolore possimus, harum
        veritatis ex. Minus soluta dolor alias vitae repudiandae quas esse sint,
        doloribus doloremque fugiat harum eum, obcaecati facilis molestiae id
        explicabo sunt iure quisquam quos possimus. Voluptatibus nemo ab maiores
        hic iure blanditiis a quis deleniti error voluptas debitis, at molestiae
        neque! Enim quos tempora placeat dolor? A neque autem facilis quis
        distinctio dolorum quas itaque quibusdam in. Cupiditate, rem provident?
        Sint rem in animi facilis deleniti quae, omnis atque dolorem cum est,
        similique placeat aliquam praesentium eum. Consectetur molestiae esse
        ullam ex, quisquam deleniti omnis necessitatibus quam nam reprehenderit
        cum perspiciatis nihil. Amet illo quam, minima dicta corrupti atque
        repellat dolores nemo voluptate ut est itaque, repellendus ad magnam?
        Amet neque voluptates sit omnis nemo repudiandae quia atque cupiditate
        et temporibus! Blanditiis numquam doloremque iste culpa recusandae,
        necessitatibus excepturi provident sit voluptate accusantium mollitia
        reprehenderit, hic porro nulla vero? Sapiente dolore voluptas doloribus
        cum, necessitatibus rerum voluptatibus provident et earum quam dolores
        maiores tempore? Sint possimus neque ex cum quod obcaecati aliquid,
        minima, autem velit itaque ut hic accusantium magni ipsam omnis
        aspernatur odio consectetur quia. Voluptas, id magni laudantium debitis
        excepturi doloribus ratione in sunt aperiam sint non illo quo
        repudiandae, earum ex hic recusandae minima labore vitae aut architecto!
        Aliquam ad eveniet sunt blanditiis deserunt, velit sequi error? Quo,
        voluptatem quae, quibusdam, corporis laboriosam iste ducimus doloremque
        natus vel repudiandae aliquid!
      </div>
    </div>
  );
};

export default Sidebar;
