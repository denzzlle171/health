import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 360px;
  margin: auto;
`;

export const Title = styled.h1`
  color: var #2d3436;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; 
  letter-spacing: 0.25px;
  margin: 0;
`;

export const Describe = styled.p`
  color: #616161;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
  margin: 0;
  margin-bottom: 15px;
`;

export const Caption = styled.p`
  color:  #2d3436;
  text-align: center;
 
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; 
  letter-spacing: 0.2px;
`;

export const ActionPanel = styled.div`
`;

export const ActionContainer = styled.div`
  width: 360px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ExerciseContainer = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
`;

export const ExerciseItembox = styled.div`
  display: flex;
  gap: 15px;
  flex-direction:column
`;

export const ImageActiv = styled.img`
  width: 173px;
  height: 363px;
`;