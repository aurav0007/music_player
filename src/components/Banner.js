import React from 'react'

import Artist from '../img/Artist.jpg'
// import check from '../img/verfied.png'
import bk from '../img/backjpg.jpg'
function Banner() {
  return (
    <div className='banner'>
        <img src={Artist} alt ='' className='bannerImg'></img>
      
    </div>
  )
}

export { Banner }
