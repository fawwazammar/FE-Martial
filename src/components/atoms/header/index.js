import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f3f3f8;
  padding: 10px 60px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 32px;
  margin-bottom: 0;
  font-weight: bold;
  color: #393e46;
`;

const Header = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
