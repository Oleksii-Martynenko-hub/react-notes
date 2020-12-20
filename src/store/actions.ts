import { 
  CREATE_NOTE, 
  DELETE_NOTE, 
  CHANGE_ACTIVE_BURGER,  
  CHANGE_VALUES_FORM,
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_OPENNESS_FORM,
  COMPLETE_TODO} from '../store/types';
import { 
  ChangeActiveBurger,
  CreateNote, 
  DeleteNote, 
  INote, 
  IFormValues,
  ChangeValuesForm,
  CreateTodo,
  DeleteTodo,
  ITodo,
  ChangeOpennessForm,
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

export const changeValuesForm = (values: IFormValues): ChangeValuesForm => {
  return {
    type: CHANGE_VALUES_FORM,
    payload: values,
  };
};
export const changeOpennessForm = (isOpen: boolean): ChangeOpennessForm => {
  return {
    type: CHANGE_OPENNESS_FORM,
    payload: isOpen,
  };
};
export const changeActiveBurger = (isActive: boolean): ChangeActiveBurger => {
  return {
    type: CHANGE_ACTIVE_BURGER,
    payload: isActive,
  };
};
