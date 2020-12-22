import {
  CREATE_NOTE,
  DELETE_NOTE,
  CHANGE_ACTIVE_BURGER,
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_VALUES_FORM,
  CHANGE_OPENNESS_FORM,
  COMPLETE_TODO,
} from '../store/types';

export type INote = {
  title: string;
  content: string;
  isSaveLineBreakTabs: boolean;
  key: string;
};
export type ITodo = {
  title: string;
  isComplete: boolean;
  key: string;
};
export type IFormValues = {
  title: string;
  content: string;
  isSaveLineBreakTabs: boolean;
};

export type DefaultState = {
  UI: {
    isActiveBurger: boolean;
    form: {
      values: IFormValues;
      isOpenForm: boolean;
    };
  };
  notes: INote[];
  todos: ITodo[];
};

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

export interface ChangeValuesForm {
  type: typeof CHANGE_VALUES_FORM;
  payload: IFormValues;
}
export interface ChangeOpennessForm {
  type: typeof CHANGE_OPENNESS_FORM;
  payload: boolean;
}
export interface ChangeActiveBurger {
  type: typeof CHANGE_ACTIVE_BURGER;
  payload: boolean;
}

export type UIActions = ChangeValuesForm | ChangeOpennessForm | ChangeActiveBurger;

export type Actions = UIActions | NoteActions;
