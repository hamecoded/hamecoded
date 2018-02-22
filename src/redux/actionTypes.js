const asyncActionType = actionType => ({
  PENDING: `${actionType}_PENDING`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`,
  BASE: actionType
});

export const API = 'API';

export const COMMAND_FETCH = asyncActionType('COMMANDS_FETCH');
