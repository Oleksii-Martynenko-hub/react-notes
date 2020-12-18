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
            <TitleStyled >{title}</TitleStyled>
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
  width: 22px;
  height: 22px;
  margin: 0 0 5px 0;
  position: relative;
`;

const TitleStyled = styled.h2``;

const TodoStyled = styled.div<{ isComplete?: boolean }>`
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
  & ${TitleStyled} {
    text-decoration: ${({isComplete}) => isComplete ? 'line-through' : 'none'};
    font-size: 22px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
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
    width:22px;
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
