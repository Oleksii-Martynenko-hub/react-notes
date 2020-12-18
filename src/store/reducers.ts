import { 
  CREATE_NOTE, 
  DELETE_NOTE, 
  CREATE_TODO, 
  DELETE_TODO, 
  CHANGE_VALUES_FORM_NOTE, 
  CHANGE_VALUES_FORM_TODO, 
  CHANGE_OPENNESS_FORM_NOTE, 
  CHANGE_OPENNESS_FORM_TODO, 
  CHANGE_ACTIVE_BURGER, 
  COMPLETE_TODO} from './types';

import { DefaultState, NoteActions, UIActions, INote, ITodo, TodoActions } from '../interfaces/interfaces';
import localStore from '../helpers/localStore';

const localNotes = localStore.get('myNotes') || [];
const localTodos = localStore.get('myTodos') || [];

const initialState: DefaultState = {
  UI: {
    isActiveBurger: false,
    formNote: {
      values: {
        title: '',
        content: '',
        isSaveLineBreakTabs: false,
      },
      isOpenFormNote: false,
    },
    formTodo: {
      value: '',
      isOpenFormTodo: false,
    }
  },
  notes: [...localNotes],
  todos: [...localTodos]
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
export const todosReducer = (state: DefaultState = initialState, action: TodoActions): DefaultState => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case COMPLETE_TODO:
      return { ...state, todos: [...state.todos ].map((todo: ITodo) => todo.key === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo) };
    case DELETE_TODO:
      return { ...state, todos: [...state.todos ].filter((todo: ITodo) => todo.key !== action.payload) };
    default:
      return state;
  }
};
export const UIReducer = (state: DefaultState = initialState, action: UIActions): DefaultState => {
  switch (action.type) {
    case CHANGE_VALUES_FORM_NOTE:
      return { ...state, UI: { ...state.UI, formNote: { ...state.UI.formNote, values: action.payload }}};
    case CHANGE_VALUES_FORM_TODO:
      return { ...state, UI: { ...state.UI, formTodo: { ...state.UI.formTodo, value: action.payload }}};
    case CHANGE_OPENNESS_FORM_NOTE:
      return { ...state, UI: { ...state.UI, formNote: { ...state.UI.formNote, isOpenFormNote: action.payload }}};
    case CHANGE_OPENNESS_FORM_TODO:
      return { ...state, UI: { ...state.UI, formTodo: { ...state.UI.formTodo, isOpenFormTodo: action.payload }}};
    case CHANGE_ACTIVE_BURGER:
      return { ...state, UI: { ...state.UI, isActiveBurger: action.payload} };
    default:
      return state;
  }
};
