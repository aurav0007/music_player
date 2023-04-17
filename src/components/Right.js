import React from 'react'
import '../styles/RightMenu.css';

import { FaBell, FaCrown ,FaSun ,FaCogs, FaHeart } from 'react-icons/fa';
function Right() {
  return (
    <div className='rightMenu'>
      <div className='goPro'>
        <i>
         <FaCrown/>
         <p>
          Go <span>Pro</span>
         </p>
        </i>
        <i><FaBell/></i>
        <i><FaHeart /></i>
      </div>
      <div className='profile'>
        <i><FaSun /></i>
        <i><FaCogs /></i>
        <div className='profileImage'>
          <img src='' alt=''></img>
        </div>
      </div>
    </div>
  )
}

export {Right}
