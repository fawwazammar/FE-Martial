import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { Button } from '..';

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

const HeaderRumahSakit = ({ title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [address, setAddress] = useState('');

  return (
    <Container>
      <Title>{title}</Title>
      <Button label="Tambah Data" onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        dialogClassName="modal-50w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Rumah Sakit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>Silahkan isi form berikut</p>
            <form>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group id="bio">
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
              </Form.Group>
              <SubmitButton type="submit" value="Submit" />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default HeaderRumahSakit;
