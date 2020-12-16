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

const Data = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Label = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0px 20px;
  color: #393e46;
`;

const Action = styled.div``;

const Content = () => {
  return (
    <Container>
      <Data>
        <Label>id</Label>
        <Label>Nama</Label>
      </Data>
      <Action>
        <Label>Aksi</Label>
      </Action>
    </Container>
  );
};

export default Content;
