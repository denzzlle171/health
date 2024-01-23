import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DataContext from '../DataContext';

const ItemBox = styled.div`
  display: flex;
  width: 157px;
  height: 80px;
  border-radius: 20.848px;
  border: 1.042px solid #e1e1e1;
  padding-left: 15px;
  justify-content: left;
  align-items: center;
  cursor: pointer;
`;

const ButtonText = styled.p`
  width: 120px;
  color: #2d3436;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2px;
  margin: 0;
  text-align: left;
`;

export const ExerciseItem = ({ item }) => {
  const { updateData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleButtonClick = (text) => {
    updateData('Exercise', item.text);
    navigate('/result');
  };

  return (
    <ItemBox onClick={() => handleButtonClick(item.text)}>
      <ButtonText> {item.text} </ButtonText>
    </ItemBox>
  );
};
