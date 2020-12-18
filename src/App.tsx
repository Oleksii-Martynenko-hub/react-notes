import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import UserInterface from './components/UserInterface';
import Notes from './components/Notes';
import ToDoList from './components/ToDoList';


const App: React.FC = () => { 

  return (
    <BrowserRouter>      
      <AppStyled >
        <UserInterface />
        
        <SwitchStyled>
          {/* <Switch> */}
            <Route component={Notes} path='/' exact />           
            <Route component={ToDoList} path='/todo' />           
          {/* </Switch> */}
        </SwitchStyled>
      </AppStyled>          
    </BrowserRouter>
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

const SwitchStyled = styled(Switch)`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: stretch;
`;

