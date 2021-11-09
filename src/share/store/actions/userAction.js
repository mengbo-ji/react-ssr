import axios from 'axios';

export const SAVE_USER = 'save_user';

export const fetchUser = () => async dispatch => {
  const res = await axios('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: SAVE_USER,
    payload: res
  })
}
