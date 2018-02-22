import { combineReducers } from 'redux';

// reducers
import commands from './commandsReducer';

const rootReducer = combineReducers({
  commands
});

export default rootReducer;