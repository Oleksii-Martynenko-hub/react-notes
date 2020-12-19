import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import UserInterface from './components/UserInterface';
import Notes from './components/Notes';
import ToDoList from './components/ToDoList';
import About from './components/About';


const App: React.FC = () => { 

  return (
    <BrowserRouter>      
      <AppStyled >
        <UserInterface />
        
        <SwitchStyled>
            <Route component={Notes} path='/' exact />           
            <Route component={ToDoList} path='/todo' />           
            <Route component={About} path='/about' />           
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
  padding: 14px 10px 78px 20px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: flex-start;
  
`;

const SwitchStyled = styled(Switch)`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  align-items: flex-start;
`;

