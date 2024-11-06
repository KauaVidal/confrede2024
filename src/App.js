import React from 'react';
import Banner from './Banner/Banner';
import Form from './Formulario/Form';
import Video from './VideoLP/Video';
import Cards from './Cards/Cards';
import Carrossel from './Carrosel/Carrossel';
import Songs from './Songs/Songs';
import FAQ from './FAQ/FAQ';

function App () {
  return (
    <div className="App">
      {/* <h1>Conferencia 2024</h1> */}
      {/* <div className='banner'></div> */}
      <Banner />
      <Form />
      <Video />
      <Cards />
      <Carrossel />
      <Songs />
      <FAQ />
    </div>
  );
}

export default App;
