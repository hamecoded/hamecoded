import * as actionTypes from '../actionTypes';

export const initialState = [
  {"id": 1, "snippet": "(num) => num + 1", "description": "some description", "output": "42", "tags": ["JavaScript", "ES6"]},
  {"id": 2, "snippet": "(num) => num + 2", "description": "some description", "output": "42", "tags": ["JavaScript", "ES6"]}
];

const commandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMMAND_FETCH.SUCCESS:
      return action.payload;
    case actionTypes.COMMAND_FETCH.FAILURE:
      return [];
    default:
      return state;
  }
};

export default commandsReducer;