import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../store/actions/userAction'

function List() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [])

  function handleClick() {
    console.log('list')
  }

  return (
    <div onClick={handleClick}>
      List
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

function loadData(store) {
  return store.dispatch(fetchUser());
}

export default {
  component: List,
  loadData,
}