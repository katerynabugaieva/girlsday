import React from 'react';
import './RMV.css'

export const RMV = () => {
  return (
    <form className="login-form-rmv">
        <h2 id="titleRM">Ich bin bereits meinRMV-Nutzer:</h2>
        <div className='inputDivRM'>
            <img src='user.png' className='icon'/>
            <input
                className="inputsR"
                type="text"
                placeholder="E-Mail"
            />
        </div>

        <div className="inputDivRM">
            <img src='lock.png' className='icon'/>
            <input
                className="inputsR"
                type="text"
                placeholder="Password"
            />
        </div>

        <div className='submitButtonDivRM'>
            <button id='submitButtonRM'>Anmelden</button>
        </div>

        <div className='submitButtonDivRM'>
            <button id='vergessenRM'>Vergessen</button>
        </div>

        <h4>wie es war</h4>
    </form>
   
  );
};