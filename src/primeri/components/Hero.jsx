import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen m-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Зацени наши видосики, друг!
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Светлый свет - кино будущего!
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-1xl text-xl font: bold p-2">
            Лучшие проекты в формате{" "}
          </p>
          <ReactTyped
            className=" md:text-2xl sm:text-1xl text-xl font: bold p-2 pl-2"
            strings={["VHS", "Хромакей", "Раскадровка"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Почувствуйте себя самым главным светлосветом года
        </p>
        <button>Начать</button>
      
      </div>
    </div>
  );
};

export default Hero;
