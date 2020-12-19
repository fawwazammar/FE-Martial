import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { ActionButton, HeaderRumahSakit, Sidebar } from '../../components';

import { patientService } from '../../services';
import { IconDokter } from '../../assets';

const RumahSakit = () => {
  const [patientName, setPatientName] = useState('');
  const [patients, setPatients] = useState([]);
  const [lengthData, setLengthData] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleEditClose = () => setEditModal(false);
  const handleEditShow = () => setEditModal(true);

  const handleDeleteClose = () => setDeleteModal(false);
  const handleDeleteShow = () => setDeleteModal(true);

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
            </Data>
            <Action>
              <Title style={{ flex: 1, textAlign: 'center' }}>Aksi</Title>
            </Action>
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
                </Data>
                <Action>
                  <ActionButton label="Edit" onClick={handleEditShow} />
                  <ActionButton label="Hapus" onClick={handleDeleteShow} />
                </Action>
              </TitleWrapper>
            );
          })}

          <Modal
            show={editModal}
            onHide={handleEditClose}
            backdrop="static"
            dialogClassName="modal-50w"
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Pasien</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p>Silahkan isi form berikut</p>
                <form>
                  <Form.Group id="patientName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                      }}
                    />
                  </Form.Group>
                  {/* <Form.Group id="bio">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={bio}
                      onChange={(e) => {
                        setBio(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group id="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group id="speciality">
                    <Form.Label>Speciality</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={speciality}
                      onChange={(e) => {
                        setSpeciality(e.target.value);
                      }}
                    />
                  </Form.Group> */}
                  <SubmitButton type="submit" value="Submit" />
                </form>
              </div>
            </Modal.Body>
          </Modal>
          <Modal
            show={deleteModal}
            onHide={handleDeleteClose}
            backdrop="static"
            dialogClassName="modal-50w"
          >
            <Modal.Header closeButton>
              <Modal.Title>Hapus Pasien</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p>Apakah kamu yakin?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleDeleteClose}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-danger">
                  Yes
                </button>
              </div>
            </Modal.Body>
          </Modal>
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
  justify-content: space-around;
`;

const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #393e46;
  text-align: center;
  justify-content: center;
  margin-bottom: 0;
`;
const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #34626c;
  margin-bottom: 0;
`;

const Action = styled.div`
  display: flex;
  flex: 0.12;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

const SubmitButton = styled.input`
  text-decoration: none;
  border: none;
  margin-top: 20px;
  background-color: #00adb5;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border-radius: 10px;
  color: #fff;
  &:hover {
    background-color: #75b8b6;
  }
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
