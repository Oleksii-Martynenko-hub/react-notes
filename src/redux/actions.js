import { CREATE_NOTE, CHANGE_INPUT_VALUE_NOTE } from './types';

export function createNote(post) {
  return {
    type: CREATE_NOTE,
    payload: post,
  };
}
export function changeInputValueNote(values) {
  return {
    type: CHANGE_INPUT_VALUE_NOTE,
    payload: values,
  };
}
