import React from 'react';

function List() {

  function handleClick() {
    console.log('list')
  }

  return (
    <div onClick={handleClick}>
      List
    </div>
  );
};

export default List;