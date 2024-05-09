import React from 'react'
import Laptop from '../images/logo.png'

const HowToFind = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Как нас найти?</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py2'>А как нас найти?</h1>
            <p className='mt-4'>Мы находимся в примерно в 15 минутах от метро Технологический институт или Садовая. Как можно догадаться, наш адрес - это <span><a className='underline text-yellow-400' href="https://yandex.ru/maps/-/CDbRqCjw">набережная реки Фонтанки, 133</a></span> </p>
        </div>
        <img className='w-[400px] mx-auto my-4' src={require('../images/map.jpg')} alt="Laptop" />
        </div>

    </div>
  )
}

export default HowToFind