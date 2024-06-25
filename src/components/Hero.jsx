import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const Hero = ({ club }) => {
  const [backgroundImage, setBackgroundImage] = useState(
    require("../images/hero-f.jpg")
  );

  useEffect(() => {
    switch (club) {
      case "Ф133":
        setBackgroundImage(require("../images/hero-f.jpg"));
        break;
      case "Прометей":
        setBackgroundImage(require("../images/hero-prom.jpg"));
        break;
      case "Двор":
        setBackgroundImage(require("../images/hero-dvor.jpg"));
        break;
      default:
        // setBackgroundImage(require("../images/default-hero.jpg"));
    }
  }, [club]);

  const getColor = () => {
    switch (club) {
      case "Двор":
        return "#875DFF";
      case "Прометей":
        return "#FE7111";
      case "Ф133":
        return "#00df9a";
      default:
        return "#FFFFFF"; // default color
    }
  };

  const getTypedStrings = () => {
    switch (club) {
      case "Прометей":
        return [
          "танцевальный коллектив Вива",
          "студию классического танца",
          "хореографический ансамбль Радуга",
          "студию изобразительного искусства",
          "мастерскую современного искусства",
          "вокальную студию",
        ];
      case "Двор":
        return ["клуб корейского языка", "мастерскую Кунг-Фу"];
      case "Ф133":
        return [
          "разговорный клуб английского языка",
          "художественную студию",
          "мастерскую апсайклинга",
          "студию игры на гитаре",
          "студию фотографии",
          "студию танцев",
          "театр-студию",
          'клуб "ПОКОЛЕНИЕ Ф"',
          'клуб "Семейный Квартал"',
        ];
      default:
        return [];
    }
  };

  return (
    <div
      className="text-white relative transition-all duration-500"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen m-auto text-center flex flex-col justify-center">
        <p
          className="font-extrabold p-4 text-1xl md:text-2xl bg-black bg-opacity-50 rounded-lg shadow-lg"
          style={{ color: getColor() }}
        >
          Центр молодежного творчества и семейного досуга
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-extrabold md:py-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
          {club} ждёт вас!
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-1xl text-xl font-bold p-2">
            Приходи в{" "}
          </p>
          <ReactTyped
            className="md:text-2xl sm:text-1xl text-xl font-bold p-2 pl-2"
            strings={getTypedStrings()}
            typeSpeed={50}
            backSpeed={10}
            loop
          />
        </div>
        <button
          className="mt-4 px-6 py-2 text-black font-bold rounded-lg shadow-lg hover:bg-[#00bf7e] transition-all"
          style={{ backgroundColor: getColor() }}
        >
          <a href="https://vk.com/vcentre_club?w=app6013442_-57496873%2523form_id%253D57">
            Записаться на занятия
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
