import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppStore } from '../store/store';
import { ChangeActiveBurger } from '../interfaces/interfaces';
import { changeActiveBurger } from '../store/actions';

interface NavProps {
  isActiveBurger: boolean;
  changeActiveBurger: (isActiveBurger: boolean) => ChangeActiveBurger;
}

const Nav: React.FC<NavProps> = ({ isActiveBurger, changeActiveBurger }) => {
  const navPages = [
    { item: 'Notes', path: '/', key: 1 },
    { item: 'My ToDos', path: '/todo', key: 0 },
    { item: 'About', path: '/about', key: 2 },
  ];

  const handleClick = (): void => {
    changeActiveBurger(!isActiveBurger);
  };

  return (
    <NavStyled isActive={isActiveBurger}>
      {navPages.map(({ item, path, key }) => (
        <NavItem onClick={handleClick} key={key}>
          <NavLink to={path}>{item}</NavLink>
        </NavItem>
      ))}
    </NavStyled>
  );
};

const mapStateToProps = (state: AppStore) => ({
  isActiveBurger: state.UI.UI.isActiveBurger,
});

export default connect(mapStateToProps, { changeActiveBurger })(Nav);

const NavItem = styled.li`
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

const NavStyled = styled.ul<{ isActive: boolean }>`
  width: 100%;
  bottom: 60px;
  left: 0px;
  position: fixed;
  z-index: 5;
  height: ${({ isActive }) => (isActive ? 'calc(100% - 60px)' : '0px')};
  padding: ${({ isActive }) => (isActive ? '150px 20px' : '0px 20px')};
  overflow: hidden;
  background-color: #61c7b9;
  transition: ${({ isActive }) => (isActive ? 'all 0.2s 0.1s' : 'all 0.2s 0.0s')};
  font-size: 20px;
  font-family: serif;

  & > ${NavItem} {
    transform: ${({ isActive }) => (isActive ? 'rotate(0deg)' : 'rotate(80deg)')};
    margin-bottom: ${({ isActive }) => (isActive ? '40px' : '0px')};
    right: ${({ isActive }) => (isActive ? '0px' : 'calc(-100% + 160px)')};
    font-size: ${({ isActive }) => (isActive ? '32px' : '5px')};
    width: ${({ isActive }) => (isActive ? '240px' : '18px')};
    height: ${({ isActive }) => (isActive ? '60px' : '5px')};
    line-height: ${({ isActive }) => (isActive ? '60px' : '5px')};
    transition: ${({ isActive }) => (isActive ? 'all 0.2s 0.1s' : 'all 0.2s 0.0s')};
    &::before,
    &::after {
      top: ${({ isActive }) => (isActive ? '30px' : '2px')};
      transition: ${({ isActive }) => (isActive ? 'all 0.2s 0.1s' : 'all 0.2s 0.0s')};
    }
  }
`;
