import React from 'react';
import styled from 'styled-components';

const ItemElement = styled.div`
  display: flex;
  width: 133px;
  height: 60px;
  border-radius: 15px;
  border: 1px solid #e1e1e1;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 24px;
  margin-bottom: 15px;
  cursor: pointer;

  &.selected {
    border: 1px solid #5fcb39;
  }
`;

const ButtonText = styled.p`
  height: 54px;
  width: 93px;
  display: flex;
  align-items: center;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.3px;
  margin: 0;
  text-align: left;
`;

const ButtonImg = styled.img`
  height: 30px;
  width: 30px;
`;

export const DestructiveItem = ({
  item,
  selectedKey,
  setBehaviors,
  setSelectedKey,
}) => {
  const isSelected = selectedKey === item.id;

  const handleItemClick = () => {
    setBehaviors(item.text);
    setSelectedKey(item.id);
  };

  return (
    <ItemElement
      className={isSelected ? 'selected' : ''}
      onClick={handleItemClick}
    >
      <ButtonImg src={item.image} alt="icon" />
      <ButtonText>{item.text} </ButtonText>
    </ItemElement>
  );
};
