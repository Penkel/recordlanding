import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ setClub }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const changeClubHere = (name) => {
    setClub(name);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(`.${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (!nav) setNav(!nav);
  };

  return (
    <div className="text-black flex justify-between items-center w-full px-4 h-20 relative z-10 bg-black">
      <div className="flex items-center">
        <div className="w-32 h-auto mr-2">
          <img
            src={require("./../images/record.png")}
            alt=""
            className="w-full h-auto max-h-24"
          />
        </div>
      </div>
      <ul className="hidden md:flex">
        <li
          className="p-4 text-xl text-white font-bold cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          О нас
        </li>
        <li
          className="p-4 text-xl text-white font-bold cursor-pointer"
          onClick={() => scrollToSection("studios")}
        >
          Студии
        </li>
        <li
          className="p-4 text-xl text-white font-bold cursor-pointer"
          onClick={() => scrollToSection("where")}
        >
          Как найти
        </li>
      </ul>
      <div className="flex items-center">
        <select
          onChange={(e) => changeClubHere(e.target.value)}
          className="ml-4 p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <option value="Ф133">Ф133</option>
          <option value="Прометей">Прометей</option>
          <option value="Двор">Двор</option>
        </select>
        <div onClick={handleNav} className="block md:hidden ml-4">
          {!nav ? <MdMenu size={30} /> : <IoMdClose size={30} />}
        </div>
      </div>
      <div
        className={`${
          nav ? "fixed" : "hidden"
        } left-0 top-0 w-full h-full bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center md:hidden`}
      >
        <div className="w-32 h-auto mb-8">
          <img
            src={require("./../images/record.png")}
            alt=""
            className="w-full h-auto max-h-24"
          />
        </div>
        <ul className="uppercase text-center text-white text-xl font-bold space-y-4">
          <li onClick={() => scrollToSection("about")} className="cursor-pointer">
            О нас
          </li>
          <li onClick={() => scrollToSection("studios")} className="cursor-pointer">
            Студии
          </li>
          <li onClick={() => scrollToSection("where")} className="cursor-pointer">
            Как найти
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
