import * as actionTypes from '../actionTypes';

export const fetchCommands = () => ({
  type: actionTypes.COMMANDS_FETCH,
  meta: {
    success: actionTypes.COMMANDS_FETCH_SUCCESS
  }
});