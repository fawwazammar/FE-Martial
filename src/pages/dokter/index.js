import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { HeaderObat, Sidebar } from '../../components';
import { doctorService } from '../../services';

const Dokter = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllDoctors = () => {
    doctorService
      .getAllDoctors()
      .then((res) => {
        console.log(res);
        setDoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(!isLoading);
      });
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <Pages>
      <LeftContent>
        <Sidebar />
      </LeftContent>
      <RightContent>
        <HeaderObat title="Dokter" />
        <Container>
          <TitleWrapper>
            <Data>
              <Title>Nama</Title>
              <Title>Bio</Title>
              <Title>Experience</Title>
              <Title>Expertise</Title>
            </Data>
          </TitleWrapper>

          {doctors.map((doctor) => {
            return (
              <TitleWrapper key={doctor.id}>
                <Data>
                  <Label>{doctor.name}</Label>
                  <Label>{doctor.bio}</Label>
                  <Label>{doctor.medical_experience}</Label>
                  <ExpertiseWrapper>
                    {doctor.expertise.map((exp) => {
                      return <Label>{exp}</Label>;
                    })}
                  </ExpertiseWrapper>
                </Data>
              </TitleWrapper>
            );
          })}
        </Container>
      </RightContent>
    </Pages>
  );
};

export default Dokter;

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
  align-items: center;
`;

const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #393e46;
  text-align: center;
  justify-content: center;
  margin-bottom: 0;
  width: 225px;
`;
const Label = styled.p`
  font-size: 15px;
  color: #34626c;
  margin-bottom: 0;
  width: 225px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

const ExpertiseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
