import React from "react";
import { useEffect} from "react";
// Here we destructure the props that we have passed
// either destructure it here or just write props(take is as an object) and use prop.title etc everywhere
function Menu({ title, menuObject }) {

  useEffect(() => {
    const allLi = document.querySelector('.menuContainer ul').querySelectorAll("li");
     
    function changeMenuActive() {
      allLi.forEach(n => n.classList.remove("active"));
      this.classList.add("active");
    }
    // console.log(allLi);
    allLi.forEach( n => n.addEventListener('click',changeMenuActive));

  }, [])

  return (
    <div className="menuContainer">
      <p className="title">{title}</p>

      <ul>
        {menuObject &&
          menuObject.map((list) => (
            <li key={Menu.id}>
              <a href="#">
                <i>{list.icon}</i>
                <span>{list.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
