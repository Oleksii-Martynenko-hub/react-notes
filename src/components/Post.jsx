import React from 'react';

import styled from 'styled-components';

const Post = ({ title, descr }) => {
  const DescrWithBr = () => {
    const descrWithBr = descr.split('\n');
    if (descrWithBr.length < 2) return <p>{descr}</p>;
    return descrWithBr.map((stroke, i) => {
      const words = stroke.split(' ');
      return (
        <p key={i}>
          {words.map((word) => (
            <span>{word}</span>
          ))}
        </p>
      );
    });
  };

  return (
    <PostStyled>
      <h2>{title}</h2>
      <DescrWithBr />
    </PostStyled>
  );
};

export default Post;

const PostStyled = styled.div`
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
  & h2 {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    padding-bottom: 6px;
  }
  & p {
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    height: auto;
    color: #383737;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
`;
