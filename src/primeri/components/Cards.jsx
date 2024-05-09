import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Tripple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="Single"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Один пользователь
          </h2>
          <p className="text-center text-4xl font-bold">$69</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 видео в год</p>
            <p className="py-2 border-b mx-8">1 пользователь</p>
            <p className="py-2 border-b mx-8">Предпоказ иногда</p>
          </div>
          <button>Начать использовать</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 bg-gray-100 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="Два"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Два пользователя
          </h2>
          <p className="text-center text-4xl font-bold">$420</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">3 видео в год</p>
            <p className="py-2 border-b mx-8">2 пользователь</p>
            <p className="py-2 border-b mx-8">Предпоказ всегда</p>
          </div>
          <button className="bg-black text-[#00df9a]">Начать использовать</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Tripple}
            alt="тройной"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Мультиподписка
          </h2>
          <p className="text-center text-4xl font-bold">$6969</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 видео в год</p>
            <p className="py-2 border-b mx-8">Неограниченно пользователей</p>
            <p className="py-2 border-b mx-8">Элитные тусы с Сеником</p>
          </div>
          <button>Начать использовать</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
