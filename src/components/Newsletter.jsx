import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white my-2'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-col-3'>
        <div className='lg:col-span-2'>
        <h1 className='md:text-2xl sm:text-1xl text-xl font: bold p-2 pl-2'>Хочешь получать уведомления о новых видосах?</h1>
        <p>Подпишись на нашу рассылку</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full px-4'>
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Введите email'/>
            <button className='ml-1 md:ml-4'>Уведомлять меня</button>
            </div>
            <p>Мы не забываем про вашу приватность! Прочитайте наши <span className='text-[#00df9a]'>принципы обработки персональных данных</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
