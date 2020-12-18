import { 
  CREATE_NOTE, 
  DELETE_NOTE, 
  CHANGE_ACTIVE_BURGER,  
  CHANGE_VALUES_FORM_NOTE,
  CHANGE_VALUES_FORM_TODO,
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_OPENNESS_FORM_NOTE,
  CHANGE_OPENNESS_FORM_TODO,
  COMPLETE_TODO} from '../store/types';
import { 
  ChangeValuesFormNote,
  ChangeActiveBurger,
  CreateNote, 
  DeleteNote, 
  INote, 
  IFormNoteValues,
  ChangeValuesFormTodo,
  CreateTodo,
  DeleteTodo,
  ITodo,
  ChangeOpennessFormNote,
  ChangeOpennessFormTodo,
  CompleteTodo} from '../interfaces/interfaces';

export const createNote = (note: INote): CreateNote => {
  return {
    type: CREATE_NOTE,
    payload: note,
  };
};
export const deleteNote = (key: string): DeleteNote => {
  return {
    type: DELETE_NOTE,
    payload: key,
  };
};

export const createTodo = (todo: ITodo): CreateTodo => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};
export const completeTodo = (key: string): CompleteTodo => {
  return {
    type: COMPLETE_TODO,
    payload: key,
  };
};

export const deleteTodo = (key: string): DeleteTodo => {
  return {
    type: DELETE_TODO,
    payload: key,
  };
};

export const changeValuesFormNote = (values: IFormNoteValues): ChangeValuesFormNote => {
  return {
    type: CHANGE_VALUES_FORM_NOTE,
    payload: values,
  };
};
export const changeValuesFormTodo = (value: string): ChangeValuesFormTodo => {
  return {
    type: CHANGE_VALUES_FORM_TODO,
    payload: value,
  };
};
export const changeOpennessFormNote = (isOpen: boolean): ChangeOpennessFormNote => {
  return {
    type: CHANGE_OPENNESS_FORM_NOTE,
    payload: isOpen,
  };
};
export const changeOpennessFormTodo = (isOpen: boolean): ChangeOpennessFormTodo => {
  return {
    type: CHANGE_OPENNESS_FORM_TODO,
    payload: isOpen,
  };
};
export const changeActiveBurger = (isActive: boolean): ChangeActiveBurger => {
  return {
    type: CHANGE_ACTIVE_BURGER,
    payload: isActive,
  };
};
