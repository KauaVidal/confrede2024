import React from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import eco from '../IMG/ECOS.jpg'
import nissi from '../IMG/NISSI.jpg'
import vini from '../IMG/VINIBALA.jpg'
import decoracao from '../IMG/decoration.png'
import './Carrossel.css';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

register()
function Carrossel() {

    const slides = [
        { id: 1, image: eco, url: 'https://www.instagram.com/p/C_MAsqZPrFK/?igsh=MWx1bjc0eDl6ZHpmeg==', titulo: 'Banda Ecos' },
        { id: 2, image: vini, url: 'https://www.instagram.com/p/C_OldxKv5c4/?igsh=OWI0NWpoOWU3ZW54', titulo: 'Preletor Vinicius Bala' },
        { id: 3, image: nissi, url: 'https://www.instagram.com/p/C_RKSPXvHar/?igsh=ZHVkZzI3cTBwY2lj', titulo: 'Teatro CIA Nissi' },
    ];

    return (
        <div className='container-geral'>
            <div className='box-decoration'>
                <img src={decoracao} alt="" />
            </div>
            <h1>Nossos convidados</h1>

            <p>Saiba quem estará conosco nesse dia especial !</p>

            <div className='box-carrossel'>

                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: false }}
                    navigation
                    loop={true}
                    className='swiper'
                >
                    {slides.map((slide) => (
                        <SwiperSlide
                            className='slide'
                            key={slide.id}>
                            <a href={slide.url}>
                                <img
                                    src={slide.image}
                                    alt={slide.titulo}
                                    className='slide-item' />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Carrossel;