import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createNote, changeValuesNote, changeOpennessForm } from '../redux/actions';

const FormNote = ({ values, isOpen, createNote, changeValuesNote, changeOpennessForm }) => {
  // const [title, setTitle] = useState('');
  // const [content, setDescription] = useState('');
  // const state = {
  //   title: setTitle,
  //   content: setDescription,
  // }
  // const textarea = useRef()

  const { title, content } = values;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    createNote({ title, content, key: Date.now().toString() });
    changeValuesNote({ ...values, title: '', content: '' });
    // event.target.reset();
  };

  const changeInputHandler = (event) => {
    // state[event.target.name](event.target.value);
    changeValuesNote({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const changeOpennessFormHandler  = () => {
    changeOpennessForm(!isOpen)
  }

  // const textareaValueAddBr = (e) => {
  //   if (e.code === "Enter") changeInputValuePost({ ...valueInputs, content: content })
  // }

  // useEffect(() => {
  //   window.addEventListener('keyup', textareaValueAddBr)
  //   return () => {window.removeEventListener('keyup', textareaValueAddBr)}
  // })

  return (
    <FormNoteStyled 
      onSubmit={submitHandler}
      isOpen={isOpen}
    >
      <BtnOpenForm onClick={changeOpennessFormHandler}>
        <span className="visually-hidden">Button for open form</span>
      </BtnOpenForm> 
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

const mapStateToProps = state => ({
  values: state.form.values,
  isOpen: state.form.isOpen,
})

const mapDispatchToProps = {
  createNote,
  changeValuesNote,
  changeOpennessForm,
}

export default connect( mapStateToProps, mapDispatchToProps )(FormNote);

const FormNoteStyled = styled.form`
  width: 100%;
  height: ${props => props.isOpen ? '150px': '0px'};
  padding: ${props => props.isOpen ? '20px': '5px'};
  overflow: hidden;
  background-color: #61c7b9;
  border-radius: 6px;
  margin: 0 10px ${props => props.isOpen ? '30px': '60px'} 0;
  transition: all 0.3s;
  & label,
  & input,
  & textarea {
    position: relative;
    top: 5px;
    margin-right: 15px;
    border-radius: 3px;
  }
`;

const BtnOpenForm = styled.form`
  background-color: #61c7b9;
  position: absolute;
  top: 30px;
  left: 50px;
  width: 50px;
  height: 50px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  cursor: pointer;
  &::before, 
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    width: 3px;
    height: 25px;
    background-color: #000;
  }
  &::after {
    transform: translate( -50%, -50% ) rotate(90deg);
  }
`;
