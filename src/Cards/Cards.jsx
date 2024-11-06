import React from 'react';
import './Cards.css';
import img from '../IMG/image.png';

function Cards() {
    return (
        <div className='background'>
            <div className='card container'>
                <div className='box-image'>
                    <img src={img} alt="imagem rede"/>
                </div>
                <div className='box-text'>
                    <h2>O QUE É A <b>REDE</b>?</h2>
                    <p>A REDE é o Ministério de Jovens da Primeira Igreja Batista em Vila Maria. Nossa igreja é liderada pelo pastor Laurindo Silva e a REDE é coordenada pelo pastor Raphael Xavier.</p>
                    <p> A REDE existe para Reunir os jovens em torno de Jesus Cristo para ser como Ele.</p>
                    <p>A REDE existe para Evangelizar e Discipular nossos amigos para que conheçam a Salvação por meio de Cristo.</p>
                    <p>A REDE existe para Encorajar a viver os propósitos de Deus por meio da Palavra dEle!</p>
                </div>
            </div>

            <div className='card container'>
                <div className='box-image'>
                    <img src={img} alt="imagem rede" />
                </div>
                <div className='box-text'>
                    <h2>O QUE É A <b>CONFERÊNCIA</b>?</h2>
                    <p>A Conferência REDE é o fechamento do trabalho anual do Ministério de Jovens. Ao longo dos anos, já tivemos convidados como Alexandre Magnani, Projeto Sola, Sillas Campos, Felipe Nunes e muitos outros amigos do Reino. </p>
                </div>
            </div>

            <div className='card container'>
                <div className='box-image'>
                    <img src={img} alt="imagem rede" />
                </div>
                <div className='box-text'>
                    <h2>CONFERÊNCIA <b>REDE TIMEOUT</b></h2>
                    <p>A Conferência REDE 2024 é chamada de Time Out, uma expressão que significa: Descanso/Repouso. </p>
                  <p>Em um ano que falamos sobre Produtividade, Graça e Trabalho, nossa Conferência 2024 fechará os trabalhos com o intuito de anunciar o Descanso que só há em Cristo.</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;