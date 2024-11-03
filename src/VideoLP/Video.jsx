import React from 'react';
import './Video.css';
function Video(){
    return(
        <div className="video-container">
            <iframe 
            className="reponsive-iframe"
            width="100%" 
            height="550" 
            src="https://www.youtube.com/embed/ntblNvYeGYs" 
            title="SOMOS A PIBVM! UMA IGREJA EM CONSTRUÇÃO | Institucional" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            ></iframe>
        </div>
    )
}

export default Video;