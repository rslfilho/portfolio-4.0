import React from 'react'
import { useHistory } from 'react-router';
import Header from '../components/Header'

const NotFound = () => {
  const history = useHistory();

  return (
    <div>
      <Header />
      <main>
        <h2>Error 404</h2>
        <p>Aconteceu algum erro!!</p>
        <button type="button" onClick={ () => history.goBack() }>Voltar</button>
      </main>
    </div>
  );
}

export default NotFound;
