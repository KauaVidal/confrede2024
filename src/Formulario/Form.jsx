import React from 'react';
import './Form.css';
import calendario from '../IMG/calendario.png';
import usuario from '../IMG/usuario.png';
import local from '../IMG/local.png';

function Form() {
  return (
    <div className='container'>
    <div className='box-form'>

    <div className='icon-div'>
        <img className='icon-form' src={calendario} alt="Icone de localização" />
            07 de dezembro
    </div>

    <div className='icon-div'>
        <img className='icon-form' src={local} alt="Icone de localização" />
            <a href="https://g.co/kgs/eAuiCdo">PIBVM</a>
    </div>

    <div className='icon-div'>
        <img className='icon-form' src={usuario} alt="Icone de localização" />
            +20 convidados
    </div>



    <form className="form">


      <label>
        <input placeholder='Seu e-mail' type="email" name="email" />
      </label>
      <button type="submit">Enviar</button>
    </form>
    </div>
    </div>
  );
}

export default Form;