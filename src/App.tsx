import React from 'react';

import styled from 'styled-components';

import UserInterface from './components/UserInterface';
import Notes from './components/Notes';


const App: React.FC = () => { 

  return (
    <AppStyled >
      <UserInterface />
      
      <NoteWrap>
        <Notes />
      </NoteWrap>
    </AppStyled>
  );
};

export default App;

const AppStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 20px 10px 75px 20px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: flex-start;
  
`;

const NoteWrap = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: stretch;
`;

