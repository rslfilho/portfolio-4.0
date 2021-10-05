import React, { useState } from 'react';
import './style.css';
import { AiOutlineBars } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const renderMenu = () => (
    <nav>
      <ul>
        <li><Link to="/perfil" onClick={ () => setMenu(!menu) }>Perfil</Link></li>
        <li><Link to="/skills" onClick={ () => setMenu(!menu) }>Skills</Link></li>
        <li><Link to="/projects" onClick={ () => setMenu(!menu) }>Projetos</Link></li>
      </ul>
    </nav>
  )

  return (
    <header>
        <h1><Link to="/">Portfólio</Link></h1>
        <AiOutlineBars onClick={ () => setMenu(!menu) } />
        { menu && renderMenu() }
    </header>
  )
};

export default Header;
