import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

import { ActionButton, HeaderObat, Sidebar } from '../../components';
import { drugService } from '../../services';

const Obat = () => {
  const [hospitalName, setHospitalname] = useState('');
  const [drugs, setDrugs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleEditClose = () => setEditModal(false);
  const handleEditShow = () => setEditModal(true);

  const handleDeleteClose = () => setDeleteModal(false);
  const handleDeleteShow = () => setDeleteModal(true);

  const getAllDrugs = () => {
    drugService
      .getAllDrugs()
      .then((res) => {
        console.log(res);
        setDrugs(res);
        // console.log(res[1]);
        // console.log(drugs);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(!isLoading);
      });
  };

  useEffect(() => {
    getAllDrugs();
  }, []);

  return (
    <Pages>
      <LeftContent>
        <Sidebar />
      </LeftContent>
      <RightContent>
        <HeaderObat title="Obat" />
        <Container>
          <TitleWrapper>
            <Data>
              <Title>Nama</Title>
            </Data>
            <Action>
              <Title style={{ flex: 1, textAlign: 'center' }}>Aksi</Title>
            </Action>
          </TitleWrapper>
          {drugs.map((drug) => {
            return (
              <TitleWrapper key={drug.id}>
                <Data>
                  <Label>{drug.name}</Label>
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
              <Modal.Title>Edit Obat</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p>Silahkan isi form berikut</p>
                <form>
                  <Form.Group id="hospitalName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      value={hospitalName}
                      onChange={(e) => {
                        setHospitalname(e.target.value);
                      }}
                    />
                  </Form.Group>
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
              <Modal.Title>Hapus Obat</Modal.Title>
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

export default Obat;

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
