import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import FormNote from './FormNote';
import FormToDo from './FormToDo';
import Burger from './Burger';
import Menu from './Nav';

const UserInterface: React.FC = () => 
  <UserInterfaceStyled>
    <Burger />
    <Menu />
    <Switch>
      <Route component={FormNote} path='/' exact/>
      <Route component={FormToDo} path='/todo' />
    </Switch>
  </UserInterfaceStyled>;

export default UserInterface;

const UserInterfaceStyled = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 65px;
  background-color: #61c7b9;
  z-index: 2;
`;