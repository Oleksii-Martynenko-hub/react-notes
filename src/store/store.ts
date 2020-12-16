import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { UIReducer, notesReducer } from './reducers';
// import formReducer from './formReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  UI: UIReducer,
});

export type AppStore = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools());

export default store;
