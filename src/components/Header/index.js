import React, { useState } from 'react';
import './style.css';
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const renderMenu = () => (
    <nav>
      <ul>
        <li><a href="#perfil">Perfil</a></li>
        <li><a href="#abilities">Skills</a></li>
        <li><a href="#projects">Projetos</a></li>
      </ul>
    </nav>
  )

  return (
    <header>
        <h1><a href="#">Portfólio</a></h1>
        <AiOutlineBars onClick={ () => setMenu(!menu) } />
        { menu && renderMenu() }
    </header>
  )
};

export default Header;
