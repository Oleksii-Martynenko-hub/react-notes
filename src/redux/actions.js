import { CREATE_NOTE, CHANGE_VALUES_NOTE, CHANGE_OPENNESS_FORM } from './types';

export function createNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note,
  };
}
export function changeValuesNote(values) {
  return {
    type: CHANGE_VALUES_NOTE,
    payload: values,
  };
}
export function changeOpennessForm(isOpen) {
  return {
    type: CHANGE_OPENNESS_FORM,
    payload: isOpen,
  };
}
