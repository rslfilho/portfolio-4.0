import React from 'react';
import './style.css';
import perfil from '../../images/2021-2.jpg';
import { Link } from 'react-router-dom';

const MainHome = () => (
  <div className="home">
    <img src={ perfil } alt="Foto Perfil" />
    <p>Seja bem-vindo ao meu Portfólio!!</p>
    <p>Aqui você encontra tudo sobre o que estou aprendendo e desenvolvendo.</p>
    <p>Clique ali embaixo, ou navegue pelo menu!</p>
    <Link to="/perfil">Saiba Mais</Link>
  </div>
);

export default MainHome;
