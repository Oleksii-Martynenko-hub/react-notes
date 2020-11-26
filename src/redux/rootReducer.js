import { combineReducers } from 'redux';

import notesReducer from './notesReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  form: formReducer,
});

export default rootReducer;
