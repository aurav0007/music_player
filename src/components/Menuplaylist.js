import React from 'react'

import { FaPlus} from "react-icons/fa";
function Menuplaylist() {
  return (
    <div className='playListContainer'>
        <div className='nameContainer'>
          <p>Playlist</p>
          <i><FaPlus/></i>
        </div>
        <div className='playListScroll'>

        </div>
      
    </div>
  )
}

export  {Menuplaylist}
