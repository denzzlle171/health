import React from 'react';
// import styled from 'styled-components';
import {
  PageContainer,
  Title,
  Describe,
  ActionPanel,
  ActionContainer,
} from './StaledPages';
import { DestructiveItem } from './../components/DestructiveItem';
import { destructivelData } from './../dataContent';
import { Button } from './../components/Button';

export const DestructiveBehaviors = () => {
  return (
    <PageContainer>
      <Title>Destructive behaviors</Title>
      <Describe>We all have them! Which are yours?</Describe>
      <ActionPanel>
        <ActionContainer>
          {destructivelData.map((item) => (
            <DestructiveItem item={item} key={item.id} />
          ))}
        </ActionContainer>
        <Button />
      </ActionPanel>
    </PageContainer>
  );
};
