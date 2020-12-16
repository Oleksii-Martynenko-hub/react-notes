import React from 'react';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import styled from 'styled-components';

// import { animRotateAfter, animRotateBefore } from '../helpers/animations'
import { AppStore } from '../store/store';
import localStore from '../helpers/localStore';
import { createNote, changeValuesForm, changeOpennessForm } from '../store/actions';
import { ChangeOpennessForm, ChangeValuesForm, CreateNote, IFormValues, INote } from '../interfaces/interfaces';

interface FormNoteProps {
  values: IFormValues, 
  isOpenForm: boolean,
  notes: INote[],
  changeValuesForm: (values: IFormValues) => ChangeValuesForm, 
  changeOpennessForm: (isOpenForm: boolean) => ChangeOpennessForm, 
  createNote: (note: INote) => CreateNote;
}

const FormNote: React.FC<FormNoteProps> = ({ 
  values, 
  isOpenForm,
  notes,
  changeValuesForm, 
  changeOpennessForm, 
  createNote,
}) => {
  const { title, content, isSaveLineBreakTabs } = values;
  
  const isFocusInput = false;
  const checkboxId = generate();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!title.trim()) return;
    const newNote = { title, content, isSaveLineBreakTabs, key: generate() };

    createNote(newNote);
    changeValuesForm({ ...values, title: '', content: '' });
    changeOpennessForm(!isOpenForm);

    localStore.set('myNotes', [ ...notes, newNote]);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>): void => {
    const { target: { name, value, type, checked } } = event;
    changeValuesForm({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const changeOpennessFormHandler = () => {
    changeOpennessForm(!isOpenForm);
  };

  return (
    <>
      <FormNoteStyled
        isFocusInput={isFocusInput}
        onSubmit={submitHandler}
        isOpen={isOpenForm}
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
          // type="text"
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
            onChange={changeHandler}
            id={checkboxId}
          />
          Save line breaks and tabs
        </label>
        <button type="submit">submit</button>
      </FormNoteStyled>
      <BtnOpenForm onClick={changeOpennessFormHandler} >
        <span className="visually-hidden">Button for open form</span>
      </BtnOpenForm>     
    </>
  );
};

const mapStateToProps = ( state: AppStore ) => ({
  values: state.UI.UI.form.values,
  isOpenForm: state.UI.UI.form.isOpenForm,
  notes: state.notes.notes,
});
const mapDispatchToProps = {
  changeValuesForm,
  changeOpennessForm,
  createNote
};

export default connect( mapStateToProps, mapDispatchToProps )(FormNote);



const BtnOpenForm = styled.button`
  position: fixed;
  z-index: 6;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;  
  background: #61c7b9;
  cursor: pointer;
  &:active {
    background: #49a094;
  }
  &::before, 
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    border-radius: 5px;
    height: 25px;
    background-color: #000;
    transition: all 0.3s;
  }
`;

const FormNoteStyled = styled.form<{ isOpen: boolean, isFocusInput: boolean }>`
  width: 100%;
  bottom: 60px;
  left: 0px;
  position: fixed;
  height: ${({isOpen}) => isOpen ? 'calc(100% - 60px)': '0px'};
  padding: ${({isOpen}) => isOpen ? '20px 20px': '0px 20px'};
  overflow: hidden;
  background-color: #61c7b9;
  transition: all 0.3s;
  font-size: 20px;
  font-family: serif;
  &+${BtnOpenForm} {
    border: 1px solid ${({isOpen}) => isOpen ? '#49a094'  : '#61c7b9'};
    bottom: ${({isFocusInput}) => isFocusInput ? '5px'  : '39px'};
    border-top: none;
    border-bottom-width: 2px;
    border-radius: 50%;
    &::before {
      transform: ${({isOpen, isFocusInput}) => 
        isOpen ? isFocusInput ? 'translate( -9px, -35% ) rotate(-45deg)' : 
        'translate( -50%, -50% ) rotate(-45deg)' : 'translate( -50%, -50% )'};
    }
    &::after {
      transform: ${({isOpen, isFocusInput}) => 
        isOpen ? isFocusInput ? 'translate( 6px, -35% ) rotate(45deg)' : 
        'translate( -50%, -50% ) rotate(45deg)' : 'translate( -50%, -50% ) rotate(90deg)'};
    }
  }
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
    height: ${({isFocusInput}) => isFocusInput ? 'calc(100% - 35px)': 'calc(100% - 185px)'};
    height: calc(100% - 195px);
    min-height: 200px;
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
