import React from 'react';

import {BsFillVolumeUpFill, BsMusicNoteList} from 'react-icons/bs';
import { FaDesktop} from 'react-icons/fa';
import Track from "../img/track.png";

function TrackLIst() {
  return (
    <div className='trackList'>
        <div className='top'>
         <img src={Track} alt='' />
         <p>Song Name <span>Artist</span></p>
        </div>
        <div className='bottom'>
          <i><BsFillVolumeUpFill /></i>
          <input type="range" />
          <i><BsMusicNoteList /></i>
          <i><FaDesktop /></i>
        </div>
      
    </div>
  )
}

export { TrackLIst };
