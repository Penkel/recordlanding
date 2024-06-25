import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ setClub }) => {
  const [nav, setNav] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

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

  const navStyle = {
    backgroundColor: "#000",
  };

  return (
    <div
      className="text-black flex justify-between items-center w-full px-4 h-35 relative z-10"
      style={navStyle}
    >
      <div className="flex items-center">
      
        <div className="w-[300px] mr-2">
          <img
            src={require("./../images/record.png")}
            alt=""
            className="w-auto h-auto max-h-24"
          />
        </div>
      </div>
      <ul className="hidden md:flex">
        <li
          className="p-4 text-xl text-white bold"
          onClick={() => scrollToSection("about")}
        >
          О нас
        </li>
        <li
          className="p-4 text-xl text-white bold"
          onClick={() => scrollToSection("studios")}
        >
          Студии
        </li>
        <li
          className="p-4 text-xl text-white bold"
          onClick={() => scrollToSection("where")}
        >
          Как найти
        </li>
      </ul>
      <div className="flex items-center">
        <label className="switch">
          <span className="slider round"></span>
        </label>
        <select
          onChange={(e) => changeClubHere(e.target.value)}
          className="ml-4 p-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <option value="Ф133">Ф133</option>
          <option value="Прометей">Прометей</option>
          <option value="Двор">Двор</option>
        </select>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <IoMdClose size={40} /> : <MdMenu size={40} />}
        </div>
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r-gray-900 ease-in-out duration-500 z-20"
            : "fixed left-[-100%]"
        }
      >
        <div className="w-[300px] mr-2">
          <img
            src={require("./../images/record.jpg")}
            alt=""
            className="w-auto h-auto max-h-24"
          />
        </div>
        <ul className="pt-24 uppercase p-7">
          <li
            className="p-4 text-xl text-white bold border-b border-gray-600"
            onClick={() => scrollToSection("about")}
          >
            О нас
          </li>
          <li
            className="p-4 text-xl text-white bold border-b border-gray-600"
            onClick={() => scrollToSection("studios")}
          >
            Студии
          </li>
          <li
            className="p-4 text-xl text-white bold border-b border-gray-600"
            onClick={() => scrollToSection("where")}
          >
            Как найти
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
