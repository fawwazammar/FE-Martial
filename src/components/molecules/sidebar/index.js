import React from 'react';
import styled from 'styled-components';
import {
  IconDokter,
  IconObat,
  IconRumahSakit,
  IconSignOut,
} from '../../../assets';

const Container = styled.div`
  background-color: #f3f3f8;
  width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const TopContent = styled.div`
  margin-top: 20px;
`;

const BottomContent = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: center;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const Sidebar = () => {
  return (
    <Container>
      <TopContent>
        <Title>Administrator</Title>
        <ContentWrapper>
          <Icon src={IconDokter} alt="Icon" />
          <p>Dokter</p>
        </ContentWrapper>
        <ContentWrapper>
          <Icon src={IconRumahSakit} alt="Icon" />
          <p>Rumah Sakit</p>
        </ContentWrapper>
        <ContentWrapper>
          <Icon src={IconObat} alt="Icon" />
          <p>Obat</p>
        </ContentWrapper>
      </TopContent>
      <BottomContent>
        <ContentWrapper>
          <Icon src={IconSignOut} alt="Icon" />
          <p>Sign Out</p>
        </ContentWrapper>
      </BottomContent>
    </Container>
  );
};

export default Sidebar;
