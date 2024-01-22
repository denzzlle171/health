import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  display: flex;
  width: 157px;
  height: 80px;
  border-radius: 20.848px;
  border: 1.042px solid #e1e1e1;
  padding-left :15px;
  justify-content: left;
  align-items: center;
  
`;

const ButtonText = styled.p`
  width: 120px;
  color: #2d3436;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2px;
  margin:0;
  text-align:left
`;



export const ExerciseItem = ({item}) => {
  return (
    <ItemBox>
      <ButtonText> {item.text} </ButtonText>
    </ItemBox>
  );
};
