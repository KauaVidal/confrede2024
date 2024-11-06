import React, { useState } from "react";
import GoogleFormsPopUp from "../GoogleFormsPopUp/GoogleFormsPopUp";
import "./Form.css";
import calendarIcon from "../IMG/calendar-icon.svg";
import userIcon from "../IMG/user-icon.svg";
import locationIcon from "../IMG/map-pin-icon.svg";
import dollarSignIcon from "../IMG/circle-dollar-sign.svg";

const Form = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    setIsActive(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsActive(false);
  };

  return (
      <div className='box-form container'>
          <div className="event-infos">
            <div className="icon-div">
                <img
                    className="icon-form"
                    src={calendarIcon}
                    alt="Icone de localização"
                />
                <p>6 e 7 DE DEZEMBRO</p>
            </div>

            <div className="icon-div">
                <img
                    className="icon-form"
                    src={locationIcon}
                    alt="Icone de localização"
                />
                <p><a href="https://g.co/kgs/eAuiCdo">PIBVM</a></p>
            </div>

            <div className="icon-div">
                <img
                    className="icon-form"
                    src={userIcon}
                    alt="Icone de localização"
                />
                <p>+X CONVIDADOS</p>
            </div>

            <div className="icon-div">
                <img
                    className="icon-form"
                    src={dollarSignIcon}
                    alt="Icone de dinheiro"
                />
                <p>GRATUITO</p>
            </div>
          </div>

          <button onClick={handleOpenPopup} className="sign-up-btn">Inscreva-se</button>

          <GoogleFormsPopUp isOpen={isPopupOpen} onClose={handleClosePopup} className={isPopupOpen ? 'active' : ''} />
      </div>
  );
};

export default Form;
