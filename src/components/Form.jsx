import React from 'react';
import styled from 'styled-components';
import { Button } from './../components/Button';

// const FormMeasure = styled.form``;

const HeadForm = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  border: 1px solid #5fcb39;
  border-radius: 10px;
  color: #5fcb39;
  overflow: hidden
`;

const ImperialTitle = styled.div`
  line-height: 32px;
  background-color: #5fcb3933;
  width: 100%;
 
`;

const MetricTitle = styled.div`
  line-height: 32px;
    width: 100%;
`;



/* const ImputMetric = styled.input`
  background-color: #fff;
 
  height: 24px;
  padding: 20px 15px;
  padding-left: 50px;
  border-radius: 10px;
  border: 1px solid #e1e1e1;
`; */

const InputBox = styled.div`
  display: flex;
  padding: 20px 15px;
  border-radius: 10px;
  width: 330px;

  border: 1px solid #e1e1e1;
  justify-content: space-between;
  margin-top: 10px;
`;


const NumberInput = styled.input`
  border: none;
  outline: none;
  border-radius: 0;

  width: 60px;
  font-size: 16px;
  text-align: center;
  /* -moz-appearance: textfield; */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;


export const Form = () => {
  return (
    <form>
      <HeadForm>
        <ImperialTitle> Imperial </ImperialTitle>
        <MetricTitle> Metric </MetricTitle>
      </HeadForm>

      <InputBox>
        <label htmlFor="height" className="form-label">
          Height(ft)
        </label>
        <NumberInput type="number" id="height" name="height" />
      </InputBox>

      <InputBox>
        <label htmlFor="weight" className="form-label">
          Current Weight(ft)
        </label>
        <NumberInput type="number" id="weight" name="weight" />
      </InputBox>

      <Button />
    </form>
  );
};

