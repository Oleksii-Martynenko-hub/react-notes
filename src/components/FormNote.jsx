import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { createNote, changeInputValueNote } from '../redux/actions';

const FormNote = ({ valueInputs, createNote, changeInputValueNote }) => {
  // const [title, setTitle] = useState('');
  // const [content, setDescription] = useState('');
  // const state = {
  //   title: setTitle,
  //   content: setDescription,
  // }
  // const textarea = useRef()

  const { title, content } = valueInputs;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    createNote({ title, content, key: Date.now().toString() });
    changeInputValueNote({ title: '', content: '' });
    // event.target.reset();
  };

  const changeInputHandler = (event) => {
    // state[event.target.name](event.target.value);
    changeInputValueNote({
      ...valueInputs,
      [event.target.name]: event.target.value,
    });
  };

  // const textareaValueAddBr = (e) => {
  //   if (e.code === "Enter") changeInputValuePost({ ...valueInputs, content: content })
  // }

  // useEffect(() => {
  //   window.addEventListener('keyup', textareaValueAddBr)
  //   return () => {window.removeEventListener('keyup', textareaValueAddBr)}
  // })

  return (
    <FormNoteStyled onSubmit={submitHandler}>
      <label htmlFor="content">
        Description
        <textarea
          // ref={textarea}
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={changeInputHandler}
        />
      </label>
      <label htmlFor="title">
        TITLE
        <input type="text" name="title" id="title" value={title} onChange={changeInputHandler} />
      </label>
      <button type="submit">submit</button>
    </FormNoteStyled>
  );
};

// CreatePost.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default connect((state) => ({ valueInputs: state.form.valueInputs }), {
  createNote,
  changeInputValueNote,
})(FormNote);

const FormNoteStyled = styled.form`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 0px;
  padding: 5px;
  overflow: hidden;
  background-color: #61c7b9;
  border-radius: 6px;
  margin: 0 10px 50px 0;
  & label,
  & input,
  & textarea {
    position: relative;
    top: 5px;
    margin-right: 15px;
    border-radius: 3px;
  }
`;
