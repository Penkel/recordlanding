import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytycs = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>ВИДЕОПРОИЗВОДСТВО ВЫСШЕГО КАЧЕСТВА</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py2'>Делайте видеоконтент правильно</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique inventore nobis dolor. Quam aut velit assumenda earum adipisci voluptate deserunt, dolore aspernatur, iure voluptas sequi ducimus sed in laborum.</p>
            <button >Начать</button>
        </div>
        </div>

    </div>
  )
}

export default Analytycs
