import React from 'react'
import f133map from '../images/map.jpg'
import dvormap from '../images/dvormap.png'
import prommap from '../images/prommap.png'

const HowToFind = ({ club }) => {

  const getClubMap = () => {
    switch (club) {
      case "Прометей":
        return prommap;
      case "Ф133":
        return f133map;
      case "Двор":
        return dvormap;
      default:
        return f133map; // Provide a default map
    }
  };

  const getPathDesc = () => {
    switch (club) {
      case "Прометей":
        return "Мы находимся всего в 5 минутах от метро Технологический институт. Наш точный адрес - <span><a className='underline text-yellow-400' href=\"https://yandex.ru/maps/-/CDvxuIKh\">Серпуховская ул. 26-28</a></span>";
      case "Двор":
        return "Наш молодежный клуб находится в 5 минутах от метро Пушкинская/Звенигородская, во дворе, где стоит Дом-Кольцо. Точный адрес - <span><a className='underline text-yellow-400' href=\"https://yandex.ru/maps/-/CDvxuLya\">набережная реки Фонтанки, 92Б</a></span>";
      case "Ф133":
      default:
        return "Мы находимся примерно в 15 минутах от метро Технологический институт или Садовая. Как можно догадаться, наш адрес - это <span><a className='underline text-yellow-400' href=\"https://yandex.ru/maps/-/CDbRqCjw\">набережная реки Фонтанки, 133</a></span>";
    }
  }

  return (
    <div className='w-full bg-white py-16 px-4 where'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Как нас найти?</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>А как нас найти?</h1>
          <p className='mt-4' dangerouslySetInnerHTML={{ __html: getPathDesc() }}></p>
        </div>
        <img className='w-[400px] mx-auto my-4' src={getClubMap()} alt="Map" />
      </div>
    </div>
  )
}

export default HowToFind;
