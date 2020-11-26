import React from 'react';

import styled from 'styled-components';

export default () => 
<AsyncPost>
  <h2>TITLE</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur 
    adipisicing elit.
  </p>
</AsyncPost>

const AsyncPost = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: calc(50% - 10px);
  padding: 20px 10px 0px;
  border-radius: 6px;
  & h2 {
    margin-bottom: 10px;
  }
  & p {
    border-bottom: 1px solid black;
    padding-bottom: 10px;
  }
`;