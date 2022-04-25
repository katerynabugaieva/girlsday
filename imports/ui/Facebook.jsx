import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import './Facebook.css'

export const Facebook= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password);
  };

  return (
    <form onSubmit={submit} className="login-form-facebook">
        <h1 id="titleFb">facebook</h1>
        <div className='inputDivFb'>

      <input
        className='inputsFb'
        type="text"
        placeholder="E-Mail-Adresse oder Telefonnummer"
        name="username"
        required
        onChange={e => setUsername(e.target.value)}
      />
</div>
<div className='inputDivFb'>
      <input
        className='inputsFb'
        type="text"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />
</div>
<div className='submitButtonDivFb'>
      <button type="submit" id='submitButtonFb'>Anmelden</button>
      </div>

     <div className='linkDivFb'> <a className='linkFb' href='#'>Passwort vergessen?</a>
     </div>
      <hr className='dividerFb'/>
      <div className='submitButtonDivFb'>
      <button className='forgotButtonFb'>Neues Konto erstellen</button>
      </div>
    </form>
   
  );
};