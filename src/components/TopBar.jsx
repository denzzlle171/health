import React from 'react';
import styled from 'styled-components';
import back from './../images/back.svg';
import avocado from './../images/avocado.svg';

const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 33px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const LogoBox = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  background-color: #f4f4f4;
  border-radius: 6.543px;
  margin-right:10px;
`;

const ImageLogo = styled.img`
  height: 24px;
  width: 18px;
  
`;

const ImageChevron = styled.img`
  height: 33px;
`;

const TitleText = styled.p`
  margin: 0;
  padding: 0;
  color: #374234;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: -0.45px;
`;


export const TopBar = () => {
  return (
    <TopBarContainer>
      <ImageChevron src={back} alt="chevron left" />
      <LogoBox>
        <ImageLogo src={avocado} alt="logo" />
      </LogoBox>
      <TitleText>Food Mentor</TitleText>
    </TopBarContainer>
  );
};
