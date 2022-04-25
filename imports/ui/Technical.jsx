import React from 'react';
import './Technical.css'

export const Technical= () => {
  return (
    <form className="login-form-rmv">
        <h2 id="titleRM">Ich bin bereits meinRMV-Nutzer:</h2>
        <div className='inputDivRM'>
            <img src='user.png' className='icon'/>
            <input
                className="inputsRt"
                type="text"
                placeholder="E-Mail"
            />
        </div>

        <div className="inputDivRM">
            <img src='lock.png' className='icon'/>
            <input
                className="inputsRt"
                type="text"
                placeholder="Password"
            />
        </div>

        <div className='submitButtonDivRM'>
            <button id='submitButtonRMt'type='button'>Anmelden</button>
        </div>

        <div className='submitButtonDivRM'>
            <button id='vergessenRMt'>Vergessen</button>
        </div>
    </form>
  );
};