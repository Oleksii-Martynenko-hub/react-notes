import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { createPost, changeInputValuePost } from '../redux/actions';

import styled from 'styled-components';

const CreatePost = ({ valueInputs, createPost, changeInputValuePost }) => {
  // const [title, setTitle] = useState('');
  // const [descr, setDescr] = useState('');
  // const state = {
  //   title: setTitle,
  //   descr: setDescr,
  // }
  // const textarea = useRef()  

  const { title, descr } = valueInputs;

  const submitHandler = (event) => {
    event.preventDefault();
    if ( !title.trim() ) return;

    createPost({ title, descr, key: Date.now().toString()});
    changeInputValuePost({ title: '', descr: '' })
    // event.target.reset();
  }

  const changeInputHandler = (event) => {
    // state[event.target.name](event.target.value);
    changeInputValuePost({ ...valueInputs, [event.target.name]: event.target.value})
  }

  // const textareaValueAddBr = (e) => {
  //   if (e.code === "Enter") changeInputValuePost({ ...valueInputs, descr: descr })
  // }
  
  // useEffect(() => {
  //   window.addEventListener('keyup', textareaValueAddBr)
  //   return () => {window.removeEventListener('keyup', textareaValueAddBr)}
  // })

  return (
    <CreatePostStyled onSubmit={submitHandler}>
      <label htmlFor="description">Description</label>
      <textarea
        // ref={textarea}
        type="text" 
        name="descr" 
        id="description"
        value={descr}
        onChange={changeInputHandler}
      />
      <label htmlFor="title">TITLE</label>
      <input 
        type="text" 
        name="title" 
        id="title"
        value={title}
        onChange={changeInputHandler}
      />
      <button type="submit">submit</button>
    </CreatePostStyled>
  )
}

export default connect(
  state => ({valueInputs: state.posts.valueInputs}), 
  { createPost, changeInputValuePost }
)(CreatePost);

const CreatePostStyled = styled.form`
position: relative;
top: 0;
left: 0;
width: 100%;
height: 0px;
padding: 5px;
overflow: hidden;
background-color: #61c7b9;
border-radius: 6px;
margin: 0 10px 20px 0;
& label,
& input,
& textarea {
  position: relative;
  top: 5px;
  margin-right: 15px;
  border-radius: 3px;
}
`;