import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>
        <Link to="/create-event">
          Criar evento
        </Link>
      </div>
      <div>
        <Link to="/update-event">
          Alterar evento
        </Link>
      </div>
    </>
  );
}

export default Home;