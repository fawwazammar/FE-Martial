import React from 'react';
import styled from 'styled-components';
import { MDBDataTableV5 } from 'mdbreact';
import { Sidebar } from '../../components';

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

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: #393e46;
`;

export default function Transaction() {
  const [datatable] = React.useState({
    columns: [
      {
        label: '_id',
        field: '_id',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'status',
        field: 'status',
        width: 270,
      },
      {
        label: 'patient_id',
        field: 'patient_id',
        width: 200,
      },
      {
        label: 'doctor_id',
        field: 'doctor_id',
        width: 100,
      },
      {
        label: 'chat',
        field: 'chat',
        width: 150,
      },
      {
        label: 'createdAt',
        field: 'createdAt',
        width: 100,
      },
      {
        label: 'updatedAt',
        field: 'updatedAt',
        width: 100,
      },
      {
        label: '__v',
        field: '__v',
        width: 100,
      },
    ],
    rows: [
      {
        _id: '5fdc7d7e0d479a0017355165',
        status: 'ongoing',
        patient_id: '5fda5341a0af4f0017513918',
        doctor_id: '5fda5336a0af4f0017513917',
        chat: [],
        createdAt: '2020-12-18T09:59:26.769Z',
        updatedAt: '2020-12-18T09:59:26.769Z',
        __v: 0,
      },
      {
        _id: '5fdc7e870d479a0017355166',
        status: 'complete',
        patient_id: '5fda5341a0af4f0017513918',
        doctor_id: '5fda5336a0af4f0017513917',
        chat: [],
        createdAt: '2020-12-18T10:03:51.755Z',
        updatedAt: '2020-12-18T10:05:00.284Z',
        __v: 0,
      },
      {
        _id: '5fdd615c8b7f530017212591',
        status: 'ongoing',
        patient_id: '5fdd59968b7f53001721257f',
        doctor_id: '5fdc7bb659786922a4018682',
        chat: [],
        createdAt: '2020-12-19T02:11:40.113Z',
        updatedAt: '2020-12-19T02:11:40.113Z',
        __v: 0,
      },
    ],
  });
  return (
    <Pages>
      <LeftContent>
        <Sidebar />
      </LeftContent>
      <RightContent>
        <Container>
          <Title>List Transaction</Title>
        </Container>
        <Container>
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
          />
        </Container>
      </RightContent>
    </Pages>
  );
}
