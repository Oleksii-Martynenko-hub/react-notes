import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppStore } from '../store/store';
import { ChangeActiveBurger } from '../interfaces/interfaces';
import { changeActiveBurger } from '../store/actions';

interface MenuProps {
  isActiveBurger: boolean;
  changeActiveBurger: (isActiveBurger: boolean) => ChangeActiveBurger;
}

const Menu: React.FC<MenuProps> = ({ isActiveBurger, changeActiveBurger }) => {
  
  const menu = [
    {item: 'My ToDos', key: 0},
    {item: 'Notes', key: 1},
    {item: 'About', key: 2},
  ];

  const handleClick = (): void => {
    changeActiveBurger(!isActiveBurger);
  };

  return (
    <MenuStyled isActive={isActiveBurger}>
      {
        menu.map(({ item, key }) => (
          <MenuItem onClick={handleClick} key={key} > { item } </MenuItem>
        ))
      }
    </MenuStyled>
  );
};

const mapStateToProps = ( state: AppStore ) => ({
  isActiveBurger: state.UI.UI.isActiveBurger
});

export default connect(mapStateToProps, {changeActiveBurger})(Menu);


const MenuItem = styled.li`
  width: 240px;
  height: 60px;
  position: relative;  
  text-align: center;
  font-weight: 600;
  margin: 0 auto;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 30px;
    left: 0px;
    border-radius: 5px;
    background-color: #000;
  }
  &::after {
    left: calc(100% - 18px);
  }
  &:hover {
    &::before,
    &::after {      
      background-color: rgb(238, 238, 238);
    }
  }
  &:active {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const MenuStyled = styled.ul<{ isActive: boolean }>`
  width: 100%;
  bottom: 60px;
  left: 0px;
  position: fixed;
  z-index: 5;
  height: ${({isActive}) => isActive ? 'calc(100% - 60px)': '0px'};
  padding: ${({isActive}) => isActive ? '150px 20px': '0px 20px'};
  overflow: hidden;
  background-color: #61c7b9;
  transition: ${({isActive}) => isActive ?
  'all 0.2s 0.1s'  : 'all 0.2s 0.0s'};
  font-size: 20px;
  font-family: serif;

  &>${MenuItem} {
    transform: ${({isActive}) => isActive ? 'rotate(0deg)': 'rotate(80deg)'};
    margin-bottom: ${({isActive}) => isActive ? '40px': '0px'};
    right: ${({isActive}) => isActive ? '0px': 'calc(-100% + 160px)'};
    font-size: ${({isActive}) => isActive ? '32px': '5px'};
    width: ${({isActive}) => isActive ? '240px': '18px'};
    height: ${({isActive}) => isActive ? '60px': '5px'};
    line-height: ${({isActive}) => isActive ? '60px': '5px'};
    transition: ${({isActive}) => isActive ? 'all 0.2s 0.1s'  : 'all 0.2s 0.0s'};
    &::before,
    &::after {
      top: ${({isActive}) => isActive ? '30px': '2px'};
      transition: ${({isActive}) => isActive ? 'all 0.2s 0.1s'  : 'all 0.2s 0.0s'};
    }
  }  
`;
