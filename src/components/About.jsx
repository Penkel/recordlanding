import React from 'react'
import Laptop from '../images/logo.png'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4 about'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Дом молодежи</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py2'>Бесплатно для молодёжи 14-35 лет!</h1>
            <p className='mt-4'>Ф133 - молодежный клуб, где ты сможешь найти новых Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, corporis sunt? Incidunt animi corrupti fuga dolores optio quibusdam amet ipsum cupiditate at consequuntur asperiores quos in illum, est molestias totam!</p>
            <button >Начать</button>
        </div>
        </div>

    </div>
  )
}

export default About
