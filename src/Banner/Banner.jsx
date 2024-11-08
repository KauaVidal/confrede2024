import React from 'react';
import './Banner.css';
import bannerDesktop from '../IMG/banner-rede-desktop.jpg';
import bannerMobile from '../IMG/banner-rede-mobile.jpg';

const Banner = () => (
    <div className='banner'>
        <picture>
            <source srcSet={bannerDesktop} media='(min-width: 768px)' />
            <img src={bannerMobile} alt='Banner' />
        </picture>
    </div>
);

export default Banner;