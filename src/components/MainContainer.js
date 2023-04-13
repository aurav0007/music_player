import React ,{useEffect} from 'react'
import { Banner } from './Banner';

import '../styles/MainContainer.css';
import { FaUser } from 'react-icons/fa';

function MainContainer() {

  useEffect(() => {
    const allLi = document.querySelector('.menuList ul').querySelectorAll("li");
     
    function changeMenuActive() {
      allLi.forEach(n => n.classList.remove("active"));
      this.classList.add("active");
    }
    // console.log(allLi);
    allLi.forEach( n => n.addEventListener('click',changeMenuActive));

  }, [])

  return (
    <div className='mainContainer'>
      <Banner />
      <div className='menuList'>
        <ul>
          <li><a href='#'>Popular</a></li>
          <li><a href='#'>Albums</a></li>
          <li><a href='#'>Songs</a></li>
          <li><a href='#'>Fans</a></li>
          <li><a href='#'>About</a></li>
        </ul>
        <p>
          <i><FaUser /></i>
          12.3M <span>Followers</span>
        </p>
      </div>
    </div>
  )
}

export {MainContainer}
