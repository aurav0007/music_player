import React from 'react'

import { PlayList } from './Playlist';

import { FaPlus} from "react-icons/fa";
import { BsMusicNoteList, BsTrash} from "react-icons/bs";
function Menuplaylist() {
  return (
    <div className='playListContainer'>
        <div className='nameContainer'>
          <p>Playlist</p>
          <i><FaPlus/></i>
        </div>
        <div className='playListScroll'>
              {
                PlayList && PlayList.map((list) =>(
                <div className='playList' key={list.id}>
                <i className='list'>
                  <BsMusicNoteList></BsMusicNoteList>
                </i>
                  <p>{list.name}</p>
                  <i className='trash'><BsTrash /></i>
              </div>
              ))}
          
        </div>
      
    </div>
  )
}

export  {Menuplaylist};
