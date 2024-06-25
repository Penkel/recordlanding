import React from 'react'
import f133logo from '../images/logo.png'
import dvorlogo from '../images/dvor.png'
import promlogo from '../images/prom.png'

const About = ({ club }) => {
  // Function to determine the logo based on the club
  const getClubLogo = () => {
    switch (club) {
      case "Прометей":
        return promlogo;
      case "Ф133":
        return f133logo;
      case "Двор":
        return dvorlogo;
      default:
        return f133logo; // Default logo if club is not recognized
    }
  };

  return (
    <div className='w-full bg-white py-16 px-4 about'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={getClubLogo()} alt="Club Logo" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Твори вместе с нами</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Бесплатно для молодёжи 14-35 лет!</h1>
          <p className='mt-4'>{club} - молодежный клуб, где ты сможешь найти новых друзей, развить свои таланты и открыть для себя множество интересных и полезных занятий. Наш клуб предлагает широкий спектр студий и мастерских, где каждый найдет что-то по душе.</p>
          {/* <button >Начать</button> */}
        </div>
      </div>
    </div>
  )
}

export default About
