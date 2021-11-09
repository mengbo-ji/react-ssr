import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  function handleClick() {
    console.log('hello')
  }

  return (
    <div onClick={handleClick}>
      Home
      <Link to={'/list'}>go to list</Link>
    </div>
  );
};

export default Home;