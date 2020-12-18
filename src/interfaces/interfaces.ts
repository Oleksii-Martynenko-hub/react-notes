import { 
  CREATE_NOTE, 
  DELETE_NOTE, 
  CHANGE_ACTIVE_BURGER,  
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_VALUES_FORM_NOTE,
  CHANGE_VALUES_FORM_TODO,
  CHANGE_OPENNESS_FORM_NOTE,
  CHANGE_OPENNESS_FORM_TODO,
  COMPLETE_TODO} from '../store/types';

export type INote = {
  title: string;
  content: string;
  isSaveLineBreakTabs: boolean;
  key: string;
}
export type ITodo = {
  title: string;
  isComplete: boolean;
  key: string;
}
export type IFormNoteValues = {
  title: string,
  content: string,
  isSaveLineBreakTabs: boolean,
}

export type DefaultState = {
  UI: {
    isActiveBurger: boolean,
    formNote: {
      values: IFormNoteValues,
      isOpenFormNote: boolean,
    }
    formTodo: {
      value: string,
      isOpenFormTodo: boolean,
    }
  },
  notes: INote[],
  todos: ITodo[],
}


export interface CreateNote {
  type: typeof CREATE_NOTE;
  payload: INote;
}
export interface DeleteNote {
  type: typeof DELETE_NOTE;
  payload: string;
}

export type NoteActions = CreateNote | DeleteNote;

export interface CreateTodo {
  type: typeof CREATE_TODO;
  payload: ITodo;
}
export interface CompleteTodo {
  type: typeof COMPLETE_TODO;
  payload: string;
}

export interface DeleteTodo {
  type: typeof DELETE_TODO;
  payload: string;
}

export type TodoActions = CreateTodo | CompleteTodo | DeleteTodo;

export interface ChangeValuesFormNote {
  type: typeof CHANGE_VALUES_FORM_NOTE;
  payload: IFormNoteValues;
}
export interface ChangeValuesFormTodo {
  type: typeof CHANGE_VALUES_FORM_TODO;
  payload: string;
}
export interface ChangeOpennessFormNote {
  type: typeof CHANGE_OPENNESS_FORM_NOTE;
  payload: boolean;
}
export interface ChangeOpennessFormTodo {
  type: typeof CHANGE_OPENNESS_FORM_TODO;
  payload: boolean;
}
export interface ChangeActiveBurger {
  type: typeof CHANGE_ACTIVE_BURGER;
  payload: boolean;
}

export type UIActions = ChangeValuesFormNote | ChangeValuesFormTodo | ChangeOpennessFormNote | ChangeOpennessFormTodo | ChangeActiveBurger;

export type Actions = UIActions | NoteActions;
