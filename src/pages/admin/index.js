import React from 'react';
import styled from 'styled-components';

import { ActionButton, Header, Sidebar } from '../../components';

const Pages = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContent = styled.div``;

const RightContent = styled.div`
  flex: 1;
`;

const Container = styled.div`
  background-color: #f3f3f8;
  padding: 10px 60px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Label = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #393e46;
  text-align: center;
  justify-content: center;
`;

const Action = styled.div`
  display: flex;
  flex: 0.12;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

const Admin = () => {
  return (
    <Pages>
      <LeftContent>
        <Sidebar />
      </LeftContent>
      <RightContent>
        <Header title="Obat" />
        <Container>
          <Title>
            <Data>
              <Label>Nama</Label>
            </Data>
            <Action>
              <Label>Aksi</Label>
            </Action>
          </Title>
          <Title>
            <Data>
              <Label>Farhan Alfariqi</Label>
            </Data>
            <Action>
              <ActionButton label="Edit" />
              <ActionButton label="Hapus" />
            </Action>
          </Title>
          <Title>
            <Data>
              <Label>John Doe</Label>
            </Data>
            <Action>
              <ActionButton label="Edit" />
              <ActionButton label="Hapus" />
            </Action>
          </Title>
        </Container>
      </RightContent>
    </Pages>
  );
};

export default Admin;
