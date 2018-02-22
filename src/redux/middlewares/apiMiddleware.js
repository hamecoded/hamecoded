import {API} from '../actionTypes';

const BASE_URL = 'http://private-3eeb4e-hamecodedgithubio.apiary-mock.com/';
const apiMiddleware = ({dispatch}) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const {url, success, failure, headers, method} = action.payload;

  const options = {
    method,
    headers: new Headers({
      'content-type': 'application/json',
      ...headers
    })
  };

  return fetch(BASE_URL + url, options)
    .then(response => {
      return response.json();
    })
    .then(payload => dispatch({type: success, payload}))
    .catch(error => {
      dispatch({type: failure, payload: {message: error.message}});
      console.log(`Network error:`, error)
    });
};


export default apiMiddleware;