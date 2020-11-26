import { CREATE_POST, CHANGE_INPUT_VALUE_POST } from './types'

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}
export function changeInputValuePost(values) {
  return {
    type: CHANGE_INPUT_VALUE_POST,
    payload: values
  }
}