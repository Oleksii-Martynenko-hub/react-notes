import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppStore } from '../store/store';
import { ChangeActiveBurger } from '../interfaces/interfaces';
import { changeActiveBurger } from '../store/actions';


interface BurgerProps {
  isActiveBurger: boolean;
  changeActiveBurger: (isActiveBurger: boolean) => ChangeActiveBurger;
}

const Burger: React.FC<BurgerProps> = ({ isActiveBurger, changeActiveBurger}) => {

  const clickHandler = () => {
    changeActiveBurger(!isActiveBurger);
  };
  
  return (
    <BurgerMenuStyled isActive={isActiveBurger} onClick={clickHandler}>
      <SpanStyled key={0} />
      <SpanStyled key={1} />
      <SpanStyled key={2} />
    </BurgerMenuStyled>
  );
};

const mapStateToProps = ( state: AppStore ) => ({
  isActiveBurger: state.UI.UI.isActiveBurger
});
const mapDispatchToProps = {
  changeActiveBurger
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);


const SpanStyled = styled.span`
  position: relative;
  height: 5px;
  background: rgba(25, 25, 25, 0.9);
  color: transparent;
  cursor: pointer;
  display: block; 
  margin-bottom: 10px;
  border-radius: 5px;
`;

const BurgerMenuStyled = styled.div<{isActive: boolean}>`
  position: absolute;
  z-index: 6;
  top: ${({isActive}) => isActive ? '65px'  : '0px'};
  right: 0;
  width: 65px;
  height: 65px;
  padding: 15px;
  font-family: serif;
  background: transparent;
  /* border: 1px solid #61c7b9; */
  transform-origin: 100% 0;
  transform: ${({isActive}) => isActive ?
  'translate(0px, 0px) rotate(90deg)'  : 'translate(0px, 0px) rotate(0deg)'};
  transition: ${({isActive}) => isActive ?
  'transform 0.2s 0.0s, top 0.2s 0.2s'  : 'transform 0.2s 0.2s, top 0.2s 0.0s'};
  ${ SpanStyled } {
    &:nth-child(1),
    &:nth-child(3) {
      width: ${({isActive}) => isActive ? '22px'  : '34px'};
      left: ${({isActive}) => isActive ? '12px'  : '0px'};
      top: ${({isActive}) => isActive ? '15px'  : '0px'};
      transform: ${({isActive}) => isActive ? 'rotate(45deg)'  : 'rotate(0deg)'};
      transform-origin: 100% 100%;
      transition: ${({isActive}) => isActive ?
  'transform 0.2s 0.2s, top 0.2s 0.0s'  : 'transform 0.2s 0.0s, top 0.2s 0.2s'};
    }
    &:nth-child(3) {
      top: ${({isActive}) => isActive ? '-15px'  : '0px'};
      transform: ${({isActive}) => isActive ? 'rotate(-45deg)'  : 'rotate(0deg)'};
      transform-origin: 100% 0%;

    }
  }
`;
