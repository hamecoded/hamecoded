import * as actionTypes from '../actionTypes';

export const fetchCommands = () => ({
  type: actionTypes.API,
  payload: {
    url: 'commands',
    method: 'GET',
    success: actionTypes.COMMAND_FETCH.SUCCESS,
    failure: actionTypes.COMMAND_FETCH.FAILURE
  }
});

