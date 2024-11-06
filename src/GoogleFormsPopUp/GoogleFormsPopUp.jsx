import React from "react";
import ReactDom from 'react-dom';
import "./GoogleFormsPopUp.css";
import closeIcon from "../IMG/circle-x.svg";

const GoogleFormsPopUp = ({ isOpen, onClose, className = '' }) => {
    if (!isOpen) return null;

    return ReactDom.createPortal(
        <div className={`popup ${className}`}>
            <div className="popup-content">
                <button onClick={onClose} className="close-btn">
                    <img src={closeIcon} alt="Botao de fechar"/>
                </button>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSek73U1GPcxe9witCSLDED1dA4sSu82uhBAWoanD_2CsSqUGA/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>,
        document.getElementById('popup-root')
    );
};

export default GoogleFormsPopUp;
