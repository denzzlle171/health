import React, { useContext } from 'react';
import styled from 'styled-components';
import DataContext from '../DataContext';

const ListSt = styled.ul`
  list-style-type: none; 
  padding: 0; 
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #e1e1e1;
  justify-content: center;
  align-items: center;
  background-color: #5fcb3933;
  margin-bottom: 10px;
`;

export const List = () => {
  const { data } = useContext(DataContext);
 
  return (
    <ListSt>
      <ListItem>{data.Goal}</ListItem>
      <ListItem>{`height: ${data.Measure.height}`}</ListItem>
      <ListItem>{`weight: ${data.Measure.weight}`}</ListItem>
      <ListItem>{data.Behaviors}</ListItem>
      <ListItem>{data.Exercise}</ListItem>
    </ListSt>
  );
};
