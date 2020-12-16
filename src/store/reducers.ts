import { 
  CREATE_NOTE, 
  DELETE_NOTE, 
  CHANGE_VALUES_FORM, 
  CHANGE_OPENNESS_FORM, 
  CHANGE_ACTIVE_BURGER } from './types';

import { DefaultState, NoteActions, UIActions, INote } from '../interfaces/interfaces';
import localStore from '../helpers/localStore';

const localNotes = localStore.get('myNotes') || [];

const initialState: DefaultState = {
  UI: {
    isActiveBurger: false,
    form: {
      values: {
        title: '',
        content: '',
        isSaveLineBreakTabs: false,
      },
      isOpenForm: false,
    }
  },
  notes: [...localNotes],  
};
  
export const notesReducer = (state: DefaultState = initialState, action: NoteActions): DefaultState => {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE_NOTE:
      return { ...state, notes: [...state.notes ].filter((note: INote) => note.key !== action.payload) };
    default:
      return state;
  }
};
export const UIReducer = (state: DefaultState = initialState, action: UIActions): DefaultState => {
  switch (action.type) {
    case CHANGE_VALUES_FORM:
      return { ...state, UI: { ...state.UI, form: { ...state.UI.form, values: action.payload }}};
    case CHANGE_OPENNESS_FORM:
      return { ...state, UI: { ...state.UI, form: { ...state.UI.form, isOpenForm: action.payload }}};
    case CHANGE_ACTIVE_BURGER:
      return { ...state, UI: { ...state.UI, isActiveBurger: action.payload} };
    default:
      return state;
  }
};
