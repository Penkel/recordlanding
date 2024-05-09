import React, {useState} from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="text-white flex justify-between items-center max-w-[1240px] px-4 h-24">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Светлый свет</h1>
      <ul className="hidden md:flex">
        <li className="p-4">VHS</li>
        <li className="p-4">Другие видосы</li> 
        <li className="p-4">О создателях</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <IoMdClose size={40}/> : <MdMenu size={40} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Светлый свет
        </h1>
        <ul className="pt-24 uppercase p-7">
          <li className="p-4 border-b border-gray-600">VHS</li>
          <li className="p-4 border-b border-gray-600">Другие видосы</li>
          <li className="p-4 border-b border-gray-600">О создателях</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
