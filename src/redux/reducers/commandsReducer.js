import * as actionTypes from '../actionTypes';

export const initialState = [
  {id: 1, snippet: '(num) => num + 1', description: 'some description', output: '42', tags: ['JavaScript','ES6']}
];

const commandsReducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.COMMANDS_FETCH:
      return initialState;
    default:
      return state;
  }
};

export default commandsReducer;