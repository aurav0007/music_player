import React from 'react'
import "../styles/LeftMenu.css";

import { Menu } from './Menu';
import { MenuList } from './MenuList';



import { FaSpotify ,FaEllipsisH } from "react-icons/fa";
import {BiSearchAlt} from 'react-icons/bi';

function LeftMenu() {
  return (
    <div className='leftMenu'>
      <div className='logoContainer'>
        <i><FaSpotify /></i>
        <h2>Spotify</h2>
        <i><FaEllipsisH/></i>
      </div>
      <div className='searchBox'>
        <input type="text" placeholder='Search...'></input>
        <i className='searchIcon'><BiSearchAlt></BiSearchAlt></i>
      </div>
    
      <Menu title={"Menu"} menuObject={MenuList} />
      
    </div>
  )
}

export {LeftMenu}
