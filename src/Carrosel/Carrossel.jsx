import React from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import eco from '../IMG/ECOS.jpg'
import nissi from '../IMG/NISSI.jpg'
import vini from '../IMG/VINIBALA.jpg'
import templo from '../IMG/TemploSoul.jpg'
import arthur from '../IMG/ArthurRibeiro.jpg'
import decoracao from '../IMG/decoration.png'
import './Carrossel.css';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

register()
function Carrossel() {

    const slides = [
        { id: 1, image: templo, url: 'https://www.instagram.com/p/DCFW_LQP5FU/?igsh=dnFuYnR2amhsNDh5&img_index=1', titulo: 'Banda Templo Soul' },
        { id: 2, image: eco, url: 'https://www.instagram.com/p/C_MAsqZPrFK/?igsh=MWx1bjc0eDl6ZHpmeg==', titulo: 'Banda Ecos' },
        { id: 3, image: vini, url: 'https://www.instagram.com/p/C_OldxKv5c4/?igsh=OWI0NWpoOWU3ZW54', titulo: 'Preletor Vinicius Bala' },
        { id: 4, image: arthur, url: 'https://www.instagram.com/p/DCFh2gdPGVv/?igsh=MTNqOHYzcDM0YXV6Mw%3D%3D&img_index=1', titulo: 'Preletor Arthur Ribeiro' },
        { id: 5, image: nissi, url: 'https://www.instagram.com/p/C_RKSPXvHar/?igsh=ZHVkZzI3cTBwY2lj', titulo: 'Teatro CIA Nissi' },
    ];

    return (
        <div className='container-geral guests-carousel'>
            <div className='box-decoration'>
                <img src={decoracao} alt="" />
            </div>
            <h2>Nossos convidados</h2>

            <p>Saiba quem estará conosco nesse dia especial !</p>

            <div className='box-carrossel'>

                <Swiper
                    pagination={{ clickable: false }}
                    navigation
                    loop={false}
                    className='swiper'
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
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