import React from 'react';
import styled from 'styled-components';

const MainButton = styled.button`
  width: 360px;
  height: 50px;
  color: #fff;
  background-color: #5fcb39;
  border-radius: 12px;
  border: none;
  opacity: 0.3;
  cursor: pointer;
  margin-top: 115px;

  transition: opacity 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

export const Button = () => {
  return <MainButton>Continue</MainButton>;
};
