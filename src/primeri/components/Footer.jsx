import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Светлый свет</h1>
      <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nihil nemo nulla impedit iure ipsam, aspernatur quibusdam neque rerum voluptatem perspiciatis excepturi veniam expedita molestias non enim! Sunt, vitae similique?</p>
      <div className='flex justify-between md:w-[75%] my-6'>
        <FaFacebookSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaDribbbleSquare size={30}/>
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Решения</h6>
            <ul>
                <li className='py-2 text-sm'>Производство</li>
                <li className='py-2 text-sm'>Маркетинг</li>
                <li className='py-2 text-sm'>Распространение</li>
                <li className='py-2 text-sm'>Спонсорство</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Поддержка</h6>
            <ul>
                <li className='py-2 text-sm'>Цены</li>
                <li className='py-2 text-sm'>Документация</li>
                <li className='py-2 text-sm'>Туториалы</li>
                <li className='py-2 text-sm'>Статусы</li>
            </ul>
      </div>
        <div>
            <h6 className='font-medium text-gray-400'>Компания</h6>
            <ul>
                <li className='py-2 text-sm'>О нас</li>
                <li className='py-2 text-sm'>Блог</li>
                <li className='py-2 text-sm'>Вакансии</li>
                <li className='py-2 text-sm'>Для прессы</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Юридическая информация</h6>
            <ul>
                <li className='py-2 text-sm'>Устав</li>
                <li className='py-2 text-sm'>Политика</li>
                <li className='py-2 text-sm'>Условия</li>
            </ul>
        </div>
      </div>
      </div>
  )
}

export default Footer
