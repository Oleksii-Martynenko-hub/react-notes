import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppStore } from '../store/store';
import saveLineBreakTabs from '../helpers/saveLineBreakTabs';
import { DeleteNote, INote } from '../interfaces/interfaces';
import { deleteNote } from '../store/actions';
import localStore from '../helpers/localStore';

interface NotesProps {
  notes: INote[];
  deleteNote: (key: string) => DeleteNote;
}

const Notes: React.FC<NotesProps> = ({ notes, deleteNote }) => {
  const handleDelete = (key: string) => () => {
    deleteNote(key);
    localStore.set(
      'myNotes',
      [...notes].filter((note: INote) => note.key !== key)
    );
  };

  const Content = ({
    content,
    isSaveLineBreakTabs,
  }: {
    content: string;
    isSaveLineBreakTabs: boolean;
  }): JSX.Element => <>{saveLineBreakTabs(content, isSaveLineBreakTabs)}</>;

  return (
    <>
      {!notes.length && (
        <NoteStyled>
          <h2>No notes</h2>
          <p>Your note list is empty yet</p>
        </NoteStyled>
      )}

      {notes.map(({ title, content, key, isSaveLineBreakTabs }) => (
        <NoteStyled key={key}>
          <h2>{title}</h2>
          <Content content={content} isSaveLineBreakTabs={isSaveLineBreakTabs} />
          <BtnDelNote onClick={handleDelete(key)} />
        </NoteStyled>
      ))}
    </>
  );
};

const mapStateToProps = (state: AppStore) => ({
  notes: state.notes.notes,
});
const mapDispatchToProps = {
  deleteNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);

const NoteStyled = styled.div`
  position: relative;
  top: 0;
  left: 0;
  flex: 1 1 auto;
  padding: 10px;
  border: 2px solid #adadad;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  font-family: serif;
  display: flex;
  flex-flow: wrap column;
  & h2 {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 6px;
  }
  & p {
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    height: auto;
    color: #383737;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
`;

const BtnDelNote = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  right: 0px;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    border-radius: 5px;
    background-color: #c31f1f;
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
