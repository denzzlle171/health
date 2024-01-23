import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../DataContext';
import {
  PageContainer,
  Title,
  Describe,
  ActionPanel,
  ActionContainer,
  MainButton,
} from './StaledPages';
import { DestructiveItem } from './../components/DestructiveItem';
import { destructivelData } from './../dataContent';

export const DestructiveBehaviors = () => {
  const [behaviors, setBehaviors] = useState('');
  const [selectedKey, setSelectedKey] = useState(null);
  const navigate = useNavigate();

  const { updateData } = useContext(DataContext);

  const handleButtonClick = () => {
    updateData('Behaviors', behaviors);
    navigate('/physical-exercise');
  };

  return (
    <PageContainer>
      <Title>Destructive behaviors</Title>
      <Describe>We all have them! Which are yours?</Describe>
      <ActionPanel>
        <ActionContainer>
          {destructivelData.map((item) => (
            <DestructiveItem
              item={item}
              key={item.id}
              selectedKey={selectedKey}
              setSelectedKey={setSelectedKey}
              setBehaviors={setBehaviors}
            />
          ))}
        </ActionContainer>
        <MainButton type="button" onClick={handleButtonClick}>
          Continue
        </MainButton>
      </ActionPanel>
    </PageContainer>
  );
};
