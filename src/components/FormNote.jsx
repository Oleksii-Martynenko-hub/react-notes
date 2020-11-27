import React from 'react';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import styled from 'styled-components';

// import { animRotateAfter, animRotateBefore } from '../helpers/animations'
import { createNote, changeValuesNote, changeOpennessForm } from '../redux/actions';

const FormNote = ({ values, isOpen, createNote, changeValuesNote, changeOpennessForm }) => {
  const { title, content, isSaveLineBreakTabs } = values;
  
  const checkboxId = generate()

  const submitHandler = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    createNote({ title, content, isSaveLineBreakTabs, key: generate() });
    changeValuesNote({ ...values, title: '', content: '' });
  };

  const changeHandler = ({ target: { name, value, type, checked } }) => {
    
    changeValuesNote({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const changeOpennessFormHandler  = () => {
    changeOpennessForm(!isOpen)
  }
  
  return (
    <>    
      <BtnOpenForm onClick={changeOpennessFormHandler} isOpen={isOpen}>
        <span className="visually-hidden">Button for open form</span>
      </BtnOpenForm>
      <FormNoteStyled
        onSubmit={submitHandler}
        isOpen={isOpen}
      >
        <h2>Create new note</h2>
        <input 
          placeholder="Title"
          type="text" 
          name="title" 
          value={title} 
          onChange={changeHandler}
        />
        <textarea
          placeholder="Content"
          type="text"
          name="content"
          value={content}
          onChange={changeHandler}
        />
        <label htmlFor={checkboxId} className="labelSaveLineBreakTabs">
          <input 
            className="checkSaveLineBreakTabs" 
            type="checkbox" 
            name="isSaveLineBreakTabs" 
            checked={isSaveLineBreakTabs}
            id={checkboxId} 
            onChange={changeHandler}
          />
          Save line breaks and tabs
        </label>
        <button type="submit">submit</button>
      </FormNoteStyled>      
    </>
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
  height: calc(100% - 60px);
  top: 30px;
  right: -10px;
  z-index: 5;
  position: fixed;
  width: ${props => props.isOpen ? '350px': '0px'};
  padding: ${props => props.isOpen ? '20px': '5px'};
  overflow: hidden;
  background-color: #61c7b9;
  border-radius: 6px;
  transition: all 0.3s;
  font-size: 20px;
  font-family: serif;
  & input,
  & textarea,
  & button {
    border-radius: 3px;
    width: calc(100% - 10px);
    padding: 10px;
  }
  & input {
    height: 40px;
    margin-bottom: 15px;
  }
  & textarea {
    height: calc(100% - 173px);
    margin-bottom: 12px;
  }
  & button {

  }
  & h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
  }
  & .checkSaveLineBreakTabs {
    width: 22px;
    height: 22px;
    margin: 0 15px 14px 0;
    position: relative;
    top: 4px;
  }
  & .labelSaveLineBreakTabs {
    font-size: 20px;
    position: relative;
    top: -4px;
  }
`;

const BtnOpenForm = styled.button`
  background-color: #61c7b9;
  position: fixed;
  z-index: 6;
  top: 30px;
  right: -5px;
  width: 50px;
  height: 50px;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  cursor: pointer;
  &::before, 
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${props => props.isOpen ? 'translate( -50%, -50% ) rotate(-45deg)'  : 'translate( -50%, -50% )'};
    width: 3px;
    height: 25px;
    background-color: #000;
    transition: all 0.3s;
  }
  &::after {
    transform: ${props => props.isOpen ? 'translate( -50%, -50% ) rotate(45deg)'  : 'translate( -50%, -50% ) rotate(90deg)'};
  }
`;
