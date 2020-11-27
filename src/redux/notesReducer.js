import { CREATE_NOTE } from './types';

const initialState = {
  notes: [],
  fetchedPosts: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export default notesReducer;
