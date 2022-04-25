
import React  from 'react';
import './Tiktok.css'


const Sources = [
  {img: 'qrcode.png', link:'QR-Code nutzen' },
  {img: 'user.png', link:'Telefonnr./E-mail/Benutzernamen nutzen' },
  {img: 'fb.png', link:'Weiter mit Facebook' },
  {img: 'google.png', link:'Weiter mit Google' },
  {img: 'twitter.png', link:'Weiter mit Twitter' }
]

export const Tiktok= () => {
  return (
    <form id='tiktokContainer'>
      <img src='tiktok.png' alt='tik' id='titleTT'/>

<p id='placeholderTT'>Verwalte dein Konto, shau dir Benachrichtungen an, kommentiere Videos und mehr.</p>
     <ul>
        { Sources.map((item, key) => 
        <div className='linkTiktokDiv' key={key}>
          <div className='linkTiktokIcon'>
            <img src={item.img} className='linkTiktokIcon' />
          </div>
          <div className='linkTiktok'>
            {item.link}
          </div>
        </div>
          
          ) }
      </ul>
    </form>
   
  );
};