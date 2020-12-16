import { 
  CREATE_NOTE, 
  DELETE_NOTE, 
  CHANGE_VALUES_FORM, 
  CHANGE_OPENNESS_FORM, 
  CHANGE_ACTIVE_BURGER  } from '../store/types';
import { 
  ChangeValuesForm, 
  ChangeOpennessForm, 
  CreateNote, 
  DeleteNote, 
  IFormValues, 
  INote, 
  ChangeActiveBurger} from '../interfaces/interfaces';

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
