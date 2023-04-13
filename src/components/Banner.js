import React from 'react'

import Artist from '../img/Artist.jpg'
import verified from '../img/verified.png'

import {FaEllipsisH, FaHeadphones, FaCheck} from 'react-icons/fa'
function Banner() {
  return (
    <div className='banner'>
        <img src={Artist} alt ='' className='bannerImg'></img>
         <div className='content'>
          <div className='breadCrump'>
            <p>
              Home <span>/Popular Artist</span>
            </p>
            <i>
              <FaEllipsisH />
            </i>
          </div>
          <div className='artist'>
            <div className='left'>
             <div className='name'>
              <h2>AR</h2>
              <img src={verified} alt =''></img>
             </div>
             <p>
              <i><FaHeadphones /></i>
              11,184,126 <span> Monthly listeners</span>
             </p>
            </div>
            <div className='right'>
              <a href='#'>Play</a>
              <a href='#'>
              <i><FaCheck /></i>
                Following
              </a> 
            </div>
          </div>
         </div>
         <div className='bottomLayer'></div>
    </div>
  );
}

export { Banner }
