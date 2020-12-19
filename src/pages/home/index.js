import React from 'react';
import styled from 'styled-components';
import {
  Doctor,
  Patient,
  Admin,
  Header,
  SidebarPatient,
  SidebarAdmin,
  SidebarDoctor,
} from '../../components';
import { getCookie } from '../../utils/cookie';

const Home = () => {
  const user = JSON.parse(getCookie('data')).role;
  const roleUser = user;

  if (roleUser === 'doctor') {
    return (
      <Pages>
        <LeftContent>
          <SidebarDoctor />
        </LeftContent>
        <RightContent>
          <Header title={user} />
          <Doctor />
        </RightContent>
      </Pages>
    );
  }

  if (roleUser === 'patient') {
    return (
      <Pages>
        <LeftContent>
          <SidebarPatient />
        </LeftContent>
        <RightContent>
          <Header title={user} />
          <Patient />
        </RightContent>
      </Pages>
    );
  }

  if (roleUser === 'admin') {
    return (
      <Pages>
        <LeftContent>
          <SidebarAdmin />
        </LeftContent>
        <RightContent>
          <Header title={user} />
          <Admin />
        </RightContent>
      </Pages>
    );
  }

  return <p>Home</p>;
};

export default Home;

const Pages = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContent = styled.div``;

const RightContent = styled.div`
  flex: 1;
`;
