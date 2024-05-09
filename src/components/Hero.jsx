import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div
      className="text-white relative"
      style={{
        backgroundImage: `url(${require("../images/hero.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen m-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
        Центр молодежного творчества и семейного досуга
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
        Ф133 ждёт вас!
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-1xl text-xl font: bold p-2">
            Приходи в{""}
          </p>
          <ReactTyped
            className=" md:text-2xl sm:text-1xl text-xl font: bold p-2 pl-2"
            strings={["разговорный клуб английского языка", "художественную студию", "мастерскую апсайклинга", "студию игры на гитаре", 'студию фотографию', 'студию танцев', 'театр-студию', 'клуб "ПОКОЛЕНИЕ Ф"', 'клуб "Семейный Квартал"']}
            typeSpeed={50}
            backSpeed={10}
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