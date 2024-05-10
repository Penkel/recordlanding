import React from 'react';
import Laptop from '../images/logo.png';

const Join = () => {
  return (
    <div className='w-full bg-yellow-300 py-16 px-4 flex justify-center items-center'>
      <div className='max-w-[1240px] grid md:grid-cols-1'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-[#00df9a] font-bold'>Мы ждём тебя!</p>
          <h1 className='md:text-4xl sm:text-3xl text-4xl font-bold py-2 text-blue-700'>Записывайся к нам на занятия!</h1>
          <p className='mt-4'></p>
        </div>
        <div className='flex justify-center items-center'>
          <button> <a href="https://vk.com/vcentre_club?w=app6013442_-57496873%2523form_id%253D57">Записаться в студию</a> </button>
          <button className='bg-white w-[200px] border rounded-md font-medium my-6 mx-4 mx-auto py-3 text-black'>
            <a href="https://vk.com/vcentre_club">Подписаться в ВК</a>
          </button>
        </div>
        {/* <img className='w-[400px] mx-auto my-4' src={require('../images/map.jpg')} alt="Laptop" /> */}
      </div>
    </div>
  );
};

export default Join;