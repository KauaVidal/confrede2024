import React from 'react';
import Banner from './Banner/Banner';
import Form from './Formulario/Form';
import Video from './VideoLP/Video';
import Cards from './Cards/Cards';
import Carrossel from './Carrosel/Carrossel';
import Songs from './Songs/Songs';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';

function Home() {
    return (
        <div>
            <Banner />
            <Form />
            <Video />
            <Cards />
            <Carrossel />
            <Songs />
            <FAQ />
            <Footer />
        </div>
    );
}

export default Home;