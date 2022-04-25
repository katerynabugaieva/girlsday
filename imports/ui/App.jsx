import React from 'react';
import { Facebook } from './Facebook.jsx';
import { LP } from './LP.jsx';
import { Technical } from './Technical.jsx';

import { LPB } from './LPB.jsx';
import { Tiktok } from './Tiktok.jsx';
import { Insta } from './Insta.jsx';
import { RMV } from './RMV.jsx';

export const App = () => (
  <div>
    {/* <LP/> */}
    {/* <LPB/> */}
    <div className='container'>
      {/* <Facebook/>
      <Tiktok/> */}
      
      {/* <Technical />  */}
      <RMV/> 
      <Insta />
    </div>
  </div>
);
