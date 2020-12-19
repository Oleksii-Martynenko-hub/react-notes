import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppStore } from '../store/store';
import { DeleteTodo, CompleteTodo, ITodo } from '../interfaces/interfaces';
import { deleteTodo, completeTodo } from '../store/actions';
import localStore from '../helpers/localStore';


interface NotesProps {
  todos: ITodo[];
  deleteTodo: (key: string) => DeleteTodo;
  completeTodo: (key: string) => CompleteTodo;
}

const ToDoList: React.FC<NotesProps> = ({ todos, deleteTodo, completeTodo }) => {

  const changeHandler = (key: string) => () => {
    completeTodo(key);
    localStore.set('myTodos', [...todos].map((todo: ITodo) => todo.key === key ? { ...todo, isComplete: !todo.isComplete } : todo));
  };

  const handleDelete = (key: string) => () => {
    deleteTodo(key);
    localStore.set('myTodos', [...todos].filter((todo: ITodo) => todo.key !== key));
  };

  return (
    <>
      {!todos.length && (
        <TodoStyled>
          <h2>No todos</h2>
          <p>Your todo list is empty yet</p>
        </TodoStyled>
      )}

      {todos.map(
        ({ 
          title, 
          key,
          isComplete
        }) => 
          <TodoStyled isComplete={isComplete} key={key} >
            <CompleteCheckbox 
              type='checkbox' 
              name="isComplete" 
              checked={isComplete}
              onChange={changeHandler(key)} 
            />
            <TitleStyled> {title} </TitleStyled>
            <BtnDelNote onClick={handleDelete(key)}/>
          </TodoStyled>
      )}
    </>
  );
};

const mapStateToProps = ( state: AppStore ) => ({
  todos: state.todos.todos
});
const mapDispatchToProps = {
  deleteTodo,
  completeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

const CompleteCheckbox = styled.input`
  width: 35px;
  height: 35px;
  top: 2px;
  left: -10px;
  position: relative;
`;

const TitleStyled = styled.h2``;

const TodoStyled = styled.div<{ isComplete?: boolean }>`
  position: relative;
  width: calc(100% - 12px);
  display: flex;
  top: 0;
  left: 0;
  margin-bottom: 10px;
  font-family: serif;
  border-bottom: 1px solid rgb(185, 185, 185);
  & ${TitleStyled} {
    text-decoration: ${({isComplete}) => isComplete ? 'line-through' : 'none'};
    font-size: 18px;
    font-weight: 500;
    height: 32px;
    line-height: 38px;
    width: calc(100% - 77px);
    color: ${({isComplete}) => isComplete ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.9)'};
    overflow: auto hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const BtnDelNote = styled.button`
  width: 35px;
  height: 35px;
  border: 1px solid rgb(185, 185, 185);
  border-radius: 3px;
  position: absolute;
  top: 1px;
  right: -2px;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width:26px;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% ) rotate(-45deg);
    border-radius: 5px;
    background-color: #c31f1f;
  }
  &::after {
    transform: translate( -50%, -50% ) rotate(45deg);
  }
`;
