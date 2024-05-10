import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Laptop from '../images/logo.png';
import { logDOM } from '@testing-library/react';

class Sections extends Component {
    constructor(props) {
        super(props);
        this.list = [{
            title: 'Разговорный клуб английского языка',
            image: 'eng-club.jpg',
            text: 'На занятиях разговорного клуба ты сможешь пообщаться на различные интересные и актуальные темы на английском языке, найдешь новых друзей и прокачаешь свои речевые навыки!',
            link: {
                text: 'Группа ВК',
                url: 'https://vk.com/club218587342'
            }
        },
        {
            title: 'Театр-студия ФЛИГЕЛЬ',
            image: 'drama.jpg',
            text: 'В студии театра "ФЛИГЕЛЬ" тебя научат актерскому мастерству и сценической речи, научат правильно работать над текстом и готовиться к спектаклям и публичным выступлениям.',
            link: {
                text: "Руководитель студии",
                url: 'https://vk.com/v.fait'
            }
        },
        {
            title: 'Студия фотографии',
            image: 'photo.jpg',
            text: 'Студия фотографии даст тебе возможность познакомиться с искусством фотографии и делать отличные снимки даже на смартфон!',
            link: {
                text: 'Группа ВК',
                url: 'https://vk.com/f133otograf'
            }
        },
        {
            title: 'Студия игры на гитаре',
            image: 'guitar.jpg',
            text: 'На занятиях тебя познакомят с инструментом, научат нотной грамоте и правильной постановке рук, сделают из тебя настоящего гитариста!',
            link: {
                text: 'Группа ВК',
                url: 'https://vk.com/gtrvcentre'
            }
        },
        {
            title: 'Художественная студия Образ',
            image: 'art.jpg',
            text: 'Если любишь рисовать, тебе обязательно понравится это делать вместе с нами. У нас даже есть портреты с натуры!',
            link: {
                text: 'Группа ВК',
                url: 'https://vk.com/club71852695'
            }
        },
        {
            title: 'Мастерская апсайклинга',
            image: 'upskl.jpg',
            text: 'Создание потрясащющих вещей из простейших подручных материалов!',
            link: {
                text: 'Группа ВК',
                url: 'https://vk.com/club64043499'
            }
        }, 
        {
            title: 'Студия танцев и пластического развития Этника',
            image: 'dance.jpg',
            text: 'Основы танцевальных техник и навыков, развитие пластического развития и импровизации. Практикуются различные танцевальные направления!',
            link: {
                text: 'Группа ВК',
                url: 'https://vk.com/ethnicdance'
            }
        },
        {
            title: 'Швейная мастерская',
            image: 'sewer.jpg',
            text: 'Платья, шляпы, рубашки, шоперы... Всё это в нашей швейной мастерской!',
            link: {
                text: 'Группа ВК',
                url: 'https://vk.com/vcentre_club?w=wall-57496873_5370'
            }
        },
        {
            title: 'Психологические консультации: индивидуальные и групповые тренинги',
            image: 'sewer.jpg',
            text: 'Да-да, в Ф133 работает профессиональный практикующий психолог, к которому ты можешь обратиться по любым вопросам! ',
            link: {
                text: 'Группа ВК',
                url: 'https://vk.com/club171696104'
            }
        },

    ];
    }
    

    render() {
        return (
            <Carousel className='studios' axis='horizontal' infiniteLoop={true} >
                {this.list.map((item, index) => (
                    <div key={index} className="flex items-center justify-center h-full">
                        <a className='w-full h-full flex flex-col items-center justify-center' href={item.link.url}>
                            <h2 className='absolute top-20 bg-green-500 text-xl  text-white font-bold py-2 px-4 rounded mt-2 my-7'>{item.title}</h2>
                            <img src={require(`../images/sections/${item.image}`)} alt="slide" className="" />
                            <p className=" bg-yellow-300 absolute bottom-12 p-5 text-lg m-4 border rounded-lg shadow-lg">{item.text}</p>
                            {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 my-7 absolute bottom">
                                {item.link.text}
                            </button> */}
                        </a>
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default Sections;