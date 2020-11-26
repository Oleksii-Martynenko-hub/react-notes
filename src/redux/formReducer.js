import { CHANGE_INPUT_VALUE_NOTE } from './types';

const initialState = {
  valueInputs: { title: '', content: '' },  
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_NOTE:
      return { ...state, valueInputs: action.payload };
    default:
      return state;
  }
};

export default formReducer;