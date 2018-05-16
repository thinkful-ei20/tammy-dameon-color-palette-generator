import React from 'react';

export default function NavBar(){
  return(
    <nav>
      <ul className="control-menu">
        <li>
          <a className="restart" href="http://localhost:3000/">
           restart
          </a>
        </li>
      </ul>
    </nav>
  )
}