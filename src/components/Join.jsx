import React from 'react';
import Laptop from '../images/logo.png';

const Join = ({ club }) => {

  const getLink = () => {
    switch (club) {
      case "Двор":
        return "https://vk.com/pmk_r?w=wall-217513911_619";
      case "Прометей":
        return "https://vk.com/topic-65875314_48744642";
      case "Ф133":
      default:
        return "https://vk.com/vcentre_club?w=app6013442_-57496873%2523form_id%253D57";
    }
  };

  const getBackgroundColor = () => {
    switch (club) {
      case "Двор":
        return "bg-[#875DFF]";
      case "Прометей":
        return "bg-[#FE7111]";
      case "Ф133":
      default:
        return "bg-yellow-300";
    }
  };

  const getTextColor = () => {
    switch (club) {
      case "Двор":
        return "text-white";
      case "Прометей":
        return "text-white";
      case "Ф133":
      default:
        return "text-[#00df9a]";
    }
  };

  const getHeadingTextColor = () => {
    switch (club) {
      case "Двор":
        return "text-white";
      case "Прометей":
        return "text-white";
      case "Ф133":
      default:
        return "text-blue-700";
    }
  };

  return (
    <div className={`w-full py-16 px-4 flex justify-center items-center ${getBackgroundColor()}`}>
      <div className='max-w-[1240px] grid md:grid-cols-1'>
        <div className='flex flex-col justify-center items-center'>
          <p className={`${getTextColor()} font-bold`}>Мы ждём тебя!</p>
          <h1 className={`md:text-4xl sm:text-3xl text-4xl font-bold py-2 ${getHeadingTextColor()}`}>Записывайся к нам на занятия!</h1>
          <p className='mt-4'></p>
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-[#00df9a] w-[200px] border rounded-md font-medium my-6 mx-4 mx-auto py-3 text-black'>
            <a href={getLink()}>Записаться в студию</a>
          </button>
          <button className='bg-white w-[200px] border rounded-md font-medium my-6 mx-4 mx-auto py-3 text-black'>
            <a href="https://vk.com/dmrecord">Подписаться на Рекорд</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
