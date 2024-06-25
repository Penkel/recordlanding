import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Sections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.getList(props.club)
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.club !== this.props.club) {
            this.setState({ list: this.getList(this.props.club) });
        }
    }

    getList(club) {
        switch (club) {
            case "Двор":
                return [
                    {
                        title: 'Клуб Корейского языка',
                        image: 'kor-club.jpg',
                        text: 'Приходи, если хочешь смотреть дорамы в оригинале, проникнуться культурой Кореи и завести новые интересные знакомства!',
                        link: {
                            text: 'Записаться',
                            url: 'https://vk.com/pmk_r?w=app6013442_-217513911%2523form_id%253D2'
                        }
                    },
                    {
                        title: 'Кунг-фу',
                        image: 'kfu.jpg',
                        text: 'Ударная техника, бросковая техника и другие боевые навыки! Работай над своим духом и телом!',
                        link: {
                            text: 'Записаться',
                            url: 'https://vk.com/pmk_r?w=app6013442_-217513911%2523form_id%253D1'
                        }
                    }
                ];
            case "Прометей":
                return [
                    {
                        title: 'Хореография',
                        image: 'danceprom.jpg',
                        text: 'Классический танец, эстрадный танец и другие - всему этому тебя научат здесь!',
                        link: {
                            text: 'Записаться',
                            url: 'https://vk.com/topic-65875314_48744642'
                        }
                    },
                    {
                        title: 'Cтудия изобразительного искусства "Панорама"',
                        image: 'pano.jpg',
                        text: 'Научись рисовать так, как всегда мечтал!',
                        link: {
                            text: 'Записаться',
                            url: 'https://vk.com/topic-65875314_48744642'
                        }
                    },
                    {
                        title: 'Мастерская современного искусства "Эстетика синтеза"',
                        image: 'wtf.jpg',
                        text: 'Познай навыки актерского мастерства и узнай много всего интересного!',
                        link: {
                            text: 'Записаться',
                            url: 'https://vk.com/topic-65875314_48744642'
                        }
                    },
                    {
                        title: 'Вокальные студии',
                        image: 'voc.jpg',
                        text: 'Разнообразные направления певческого искусства, участие в конурсах, концертах и многое другое!',
                        link: {
                            text: 'Записаться',
                            url: 'https://vk.com/topic-65875314_48744642'
                        }  
                    }
                ];
            default: // "Ф133"
                return [
                    {
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
                    }
                ];
        }
    }

    render() {
        return (
            <Carousel className='studios bg-black' axis='horizontal' infiniteLoop={true} >
                {this.state.list.map((item, index) => (
                    <div key={index} className="flex items-center justify-center h-screen">
                        <a className='w-full h-full flex flex-col items-center justify-center' href={item.link.url}>
                            <h2 className='absolute top-20 bg-green-500 text-xl text-white font-bold py-2 px-4 rounded mt-2 my-7'>{item.title}</h2>
                            <div className='w-full h-3/4 flex justify-center items-center'>
                                <img 
                                    src={require(`../images/sections/${item.image}`)} 
                                    alt="slide" 
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <p className="bg-yellow-300 absolute bottom-12 p-5 text-lg m-4 border rounded-lg shadow-lg">{item.text}</p>
                        </a>
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default Sections;