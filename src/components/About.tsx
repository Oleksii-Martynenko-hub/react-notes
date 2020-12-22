import React from 'react';

import styled from 'styled-components';

const About: React.FC = () => (
  <AboutStyled>
    <InfoStyled> Information about this App! </InfoStyled>
    <InfoStyled> Information about this App? </InfoStyled>
    <InfoStyled> Information about this App$ </InfoStyled>
  </AboutStyled>
);

export default About;

const InfoStyled = styled.p`
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.9);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 6px;
`;

const AboutStyled = styled.div`
  padding: 20px 0;
`;
