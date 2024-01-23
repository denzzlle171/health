import React from 'react';
import {
  PageContainer,
  Title,
  Describe,
  Caption,
  ActionPanel,
  ActionContainer,
} from './StaledPages';
import { GoalItem } from './../components/GoalItem';
import { goalData } from './../dataContent';

export const Goal = () => {
  return (
    <PageContainer>
      <Title>The Goal</Title>
      <Describe>
        Focus on the health benefits you need.
        <br />
        Balanced nutrition will let you achieve them{' '}
      </Describe>
      <Caption>What are your goals?</Caption>
      <ActionPanel>
        <ActionContainer>
          {goalData.map((item) => (
            <GoalItem item={item} key={item.id} />
          ))}
        </ActionContainer>
      </ActionPanel>
    </PageContainer>
  );
};
