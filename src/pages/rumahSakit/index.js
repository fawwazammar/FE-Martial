import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeaderRumahSakit, Sidebar } from '../../components';

import { patientService } from '../../services';
import { IconDokter } from '../../assets';

const RumahSakit = () => {
  const [patients, setPatients] = useState([]);
  const [lengthData, setLengthData] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const getAllPatients = () => {
    patientService
      .getAllPatients()
      .then((res) => {
        console.log(res);
        setPatients(res.data);
        setLengthData(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(!isLoading);
      });
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <Pages>
      <LeftContent>
        <Sidebar />
      </LeftContent>
      <RightContent>
        <HeaderRumahSakit title="Pasien" />
        <ContentWrapper>
          <Icon src={IconDokter} alt="Icon" />
          <div>
            <Label>Jumlah Pasien :</Label>
            <Label>{lengthData}</Label>
          </div>
        </ContentWrapper>
        <Container>
          <TitleWrapper>
            <Data>
              <Title>Nama</Title>
              <Title>Jenis Kelamin</Title>
              <Title>Alamat</Title>
              <Title>Tanggal Lahir</Title>
              <Title>Status</Title>
              <Title>Riwayat</Title>
              <Title>Tahun</Title>
            </Data>
          </TitleWrapper>
          {patients.map((patient) => {
            return (
              <TitleWrapper>
                <Data>
                  <Label style={{ maxWidth: '200', width: '200' }}>
                    {patient.name}
                  </Label>
                  <Label>{patient.sex}</Label>
                  <Label>{patient.address}</Label>
                  <Label>{patient.birth_date}</Label>
                  <History>
                    {patient.disease_history.map((disease) => {
                      return (
                        <DiseaseWrapper>
                          <Label>{disease.status}</Label>
                          <Label>{disease.name}</Label>
                          <Label>{disease.detected_years}</Label>
                        </DiseaseWrapper>
                      );
                    })}
                  </History>
                </Data>
              </TitleWrapper>
            );
          })}
        </Container>
      </RightContent>
    </Pages>
  );
};

export default RumahSakit;

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
  padding: 30px 60px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #393e46;
  text-align: left;
  justify-content: center;
  margin-bottom: 0;
  width: 135px;
`;
const Label = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #34626c;
  margin-bottom: 0;
  width: 135px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
`;

const DiseaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.2;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 200px;
  align-items: center;
  background-color: #f3f3f8;
  margin: 10px 20px;
  border-radius: 20px;
  padding: 12px 12px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
