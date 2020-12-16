import React from 'react';
import styled from 'styled-components';

import FormNote from './FormNote';
import Burger from './Burger';
import Menu from './Menu';

const UserInterface: React.FC = () => 
  <UserInterfaceStyled>
    <Burger />
    <Menu />
    <FormNote />
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