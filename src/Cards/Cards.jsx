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
                    <p>O ministério REDE da PIBVM é onde a juventude se encontra para viver a fé com intensidade! Em um ambiente cheio de energia e propósito, os jovens se conectam, compartilham, e são desafiados a crescer espiritualmente e impactar o mundo.</p>
                    <p> A cada encontro, a REDE oferece um espaço para fortalecer amizades, explorar a Palavra e se inspirar para enfrentar desafios com coragem e fé. Venha fazer parte e descubra o poder de uma juventude unida em Cristo!</p>
                </div>
            </div>

            <div className='card container'>
                <div className='box-image'>
                    <img src={img} alt="imagem rede"/>
                </div>
                <div className='box-text'>
                    <h2>O QUE É A <b>CONFERÊNCIA</b>?</h2>
                    <p>A Conferência REDE é o evento anual mais aguardado pela juventude da PIBVM! Um dia inteiro de celebração, com cultos vibrantes, apresentações de teatro, shows com cantores convidados e mensagens impactantes de preletores especiais. Além de momentos de louvor e reflexão.</p>
                </div>
            </div>

            <div className='card container'>
                <div className='box-image'>
                    <img src={img} alt="imagem rede"/>
                </div>
                <div className='box-text'>
                    <h2>CONFERÊNCIA REDE TIMEOUT</h2>
                    <p>A Conferência REDE é o evento anual mais aguardado pela juventude da PIBVM! Um dia inteiro de celebração, com cultos vibrantes, apresentações de teatro, shows com cantores convidados e mensagens impactantes de preletores especiais. Além de momentos de louvor e reflexão.</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;