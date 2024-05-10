import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(`.${id}`);
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (!nav) setNav(!nav)
  };

  return (
    <div className="text-black flex justify-between items-center max-w-[1240px] px-4 h-24 relative z-10">
      <div className="flex items-center">
        <div className="w-[300px] mr-2">
          <img src={require("./../images/logo.png")} alt="" className="w-full" />
        </div>
        {/* <h1 className="text-3xl font-bold text-[#00df9a] m-0">Ф133</h1> */}
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 text-xl text-white bold" onClick={() => scrollToSection("about")}>О нас</li>
        <li className="p-4 text-xl text-white bold" onClick={() => scrollToSection("studios")}>Студии</li>
        <li className="p-4 text-xl text-white bold" onClick={() => scrollToSection("where")}>Как найти</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <IoMdClose size={40} /> : <MdMenu size={40} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r-gray-900 ease-in-out duration-500 z-20' : 'fixed left-[-100%]'}>
        {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Ф133
        </h1> */}
        <div className="w-[300px] mr-2">
          <img src={require("./../images/logo.png")} alt="" className="w-full" />
        </div>
        <ul className="pt-24 uppercase p-7">
          <li className="p-4 text-xl text-white bold border-b border-gray-600" onClick={() => scrollToSection('about')}>О нас</li>
          <li className="p-4 text-xl text-white bold border-b border-gray-600" onClick={() => scrollToSection('studios')}>Студии</li>
          <li className="p-4 text-xl text-white bold border-b border-gray-600" onClick={() => scrollToSection('where')}>Как найти</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;