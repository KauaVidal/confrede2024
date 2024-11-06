import React from 'react';
import './Songs.css';
import spotifyImg from '../IMG/spotify.svg';
import youtubeMusicImg from '../IMG/youtube-music.svg';
import songImg from '../IMG/song.png';
import leftDetailImg from '../IMG/left-detail.png';
import rightDetailImg from '../IMG/right-detail.png';

function Songs() {
    return (
        <div className='songs-wrapper'>
            <div className="container">
                <div className='box-text'>
                    <h2>Ouça as músicas da CONFERÊNCIA REDE TIMEOUT 2024 no Spotify</h2>
                    <p>Prepare os seus ouvidos para louvar ao Senhor como nunca antes</p>
                    <div className="song-streamings">
                        <div className="spotify" onClick={()=> window.location.href = 'https://open.spotify.com/intl-pt/artist/2glJ3LARmTlvWe3aTLms33?si=RGIaVNPbQWuAhhDnohQ6Jg'}>
                            <img src={spotifyImg} alt="Spotify logo"/>
                            <div>
                                <p>Ouça <b>BANDA ECOS</b> no</p>
                                <p>Spotify</p>
                            </div>
                        </div>  
                        <div className="spotify" onClick={()=> window.location.href = 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO3Mha7e?si=2871edd4f11644d9'}>
                            <img src={spotifyImg} alt="Spotify logo"/>
                            <div>
                                <p>Ouça <b>TEMPLO SOUL</b> no</p>
                                <p>Spotify</p>
                            </div>
                        </div>
                        {/* NÃO SERÁ USADO POR ENQUANTO
                        <div className="youtube">
                            <img src={youtubeMusicImg} alt="YouTube Music logo"/>
                            <div>
                                <p>Ouça no</p>
                                <p>YouTube Music</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='box-image'>
                    <img src={songImg} alt="imagem rede"/>
                </div>
            </div>
            
            <img className='left-detail' src={leftDetailImg} alt="Detalhe laranja esquerda"/>
            <img className='right-detail' src={rightDetailImg} alt="Detalhe laranja direita"/>
        </div>
    )
}

export default Songs;