import React from 'react';
import { List } from '../components/List';
import { PageContainer, Title, Describe, ActionPanel } from './StaledPages';

export const Result = () => {
  return (
    <PageContainer>
      <Title>Result</Title>
      <Describe>all the data you entered earlier</Describe>
      <List />
      <ActionPanel></ActionPanel>
    </PageContainer>
  );
};
