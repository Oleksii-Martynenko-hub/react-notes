import React from 'react';

import styled from 'styled-components';

import CreatePost from './components/CreatePost';
import Posts from './components/Posts';

const App = () => (
  <AppStyled>
    <CreatePost />
    <PostWrap>
      <Posts />
    </PostWrap>
  </AppStyled>
);

export default App;

const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 50px 40px 50px 50px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: flex-start;
`;
const PostWrap = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: stretch;
`;
