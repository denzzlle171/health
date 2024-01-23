import React from 'react';
// import styled from 'styled-components';
import {
  PageContainer,
  Title,
  Describe,
  Caption,
  ActionPanel,
  ExerciseContainer,
  ExerciseItembox,
  ImageActiv,
} from './StaledPages';
import { ExerciseItem } from './../components/ExerciseItem';
import { exerciseData } from './../dataContent';
import activeGirl from './../images/activeGirl.svg';

export const PhysicalExercise = () => {
  return (
    <PageContainer>
      <Title>Physical exercise</Title>
      <Describe>
        Physical exercise means a lot for a woman who wants to lose kilos and
        works at the office
      </Describe>
      <Caption>How active are you during the day?</Caption>
      <ActionPanel>
        <ExerciseContainer>
          <ImageActiv src={activeGirl} alt="girl" />
          <ExerciseItembox>
            {exerciseData.map((item) => (
              <ExerciseItem item={item} key={item.id} />
            ))}
          </ExerciseItembox>
        </ExerciseContainer>
      </ActionPanel>
    </PageContainer>
  );
};
