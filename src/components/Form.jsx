import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { Button } from './../components/Button';
import { MainButton } from '../pages/StaledPages';
import DataContext from '../DataContext';

const HeadForm = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  border: 1px solid #5fcb39;
  border-radius: 10px;
  color: #5fcb39;
  overflow: hidden;
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
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Form = () => {
  const { updateData } = useContext(DataContext);

  const [formData, setFormData] = useState({
    height: 0,
    weight: 0,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData('Measure', formData);
    navigate('/destructive-behaviors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HeadForm>
        <ImperialTitle> Imperial </ImperialTitle>
        <MetricTitle> Metric </MetricTitle>
      </HeadForm>

      <InputBox>
        <label htmlFor="height" className="form-label">
          Height(ft)
        </label>
        <NumberInput
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
        />
      </InputBox>

      <InputBox>
        <label htmlFor="weight" className="form-label">
          Current Weight(ft)
        </label>
        <NumberInput
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
        />
      </InputBox>

      <MainButton type="submit">Continue</MainButton>
    </form>
  );
};
