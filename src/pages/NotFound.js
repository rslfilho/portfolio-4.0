import React from 'react'
import { useHistory } from 'react-router';

const NotFound = () => {
  const history = useHistory();

  return (
    <>
      <h2>Error 404</h2>
      <p>Aconteceu algum erro!!</p>
      <button type="button" onClick={ () => history.goBack() }>Voltar</button>
    </>
  );
}

export default NotFound;
