import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  display: flex;
  background: linear-gradient(214deg, #f1f1f1 12.33%, #fff 69.93%);
  width: 172px;
  height: 172px;
  border-radius: 20.848px;
  border: 1.042px solid #e1e1e1;
  margin-bottom: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const ButtonText = styled.p`
  display:flex;
  color: #2d3436;
  font-family: Inter;
  font-size: 16.679px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.208px;
  align-items:center;
  text-align: left;
  width :50%;
  padding-left: 11px;
`;

export const GoalItem = ({item}) => {
  return (
    <ItemBox>
      <ButtonText> {item.text} </ButtonText>
      <img src={item.image} alt="icon girl" />
    </ItemBox>
  );
};
