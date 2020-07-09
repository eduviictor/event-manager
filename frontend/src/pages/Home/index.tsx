import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="/create-event">
        Criar evento
      </Link>
    </>
  );
}

export default Home;