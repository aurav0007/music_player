import React from "react";
// Here we destructure the props that we have passed
// either destructure it here or just write props(take is as an object) and use prop.title etc everywhere
function Menu({ title, menuObject }) {
  return (
    <div className="menuContainer">
      <p className="title">{title}</p>

      <ul>
        {menuObject &&
          menuObject.map((list) => (
            <li>
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
