import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import './Insta.css'
import './RMV.css'

export const Insta = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();
    alert('Ich bin drin!')
    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={submit} className="login-form-insta">
        <div className='inputDivFb'>
            <img src='instagram.png'/>
        </div>
      
        <div className='inputDivRM'>
            <input
                className="inputsI"
                type="text"
                name="username"
                required
                placeholder="E-Mail"
                onChange={e => setUsername(e.target.value)}
            />
        </div>

        <div className="inputDivRM">
            <input
                className="inputsI"
                type="password"
                placeholder="Passwort"
                name="password"
                required
                onChange={e => setPassword(e.target.value)}
            />
        </div>

        <div className='submitButtonDivRM'>
            <button id='submitButtonI'>Anmelden</button>
        </div>

        <div className='submitButtonDivRM'>
            <a id='vergessenI'>Passwort vergessen?</a>
        </div>

    <h4>resultat</h4>
    </form>
   
  );
};