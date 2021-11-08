import React from 'react';

function Home() {

  function handleClick() {
    console.log('hello')
  }

  return (
    <div onClick={handleClick}>
      Home
    </div>
  );
};

export default Home;