import { 
  CREATE_NOTE, 
  DELETE_NOTE, 
  CHANGE_VALUES_FORM, 
  CHANGE_OPENNESS_FORM, 
  CHANGE_ACTIVE_BURGER  } from '../store/types';

export type INote = {
  title: string;
  content: string;
  isSaveLineBreakTabs: boolean;
  key: string;
}
export type IFormValues = {
  title: string,
  content: string,
  isSaveLineBreakTabs: boolean,
}

export type DefaultState = {
  UI: {
    isActiveBurger: boolean,
    form: {
      values: IFormValues,
      isOpenForm: boolean,
    }
  },
  notes: INote[],
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
