import React from 'react';
import { Form } from './../components/Form';
// import styled from 'styled-components';
import {
  PageContainer,
  Title,
  Describe,
} from './StaledPages';

export const MeasureYourself = () => {
  return (
    <PageContainer>
      <Title>Measure Yourself </Title>
      <Describe>What are your height and body weight?</Describe>
      <Form />
    </PageContainer>
  );
};

