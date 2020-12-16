import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
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
  font-weight: bold;
  color: #393e46;
`;
const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #34626c;
`;

const InputField = styled.input`
  border: none;
  border-bottom: 2px solid #839b97;
  padding: 10px;
  width: 100%;
  font-size: 21px;
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

const Header = ({ title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Modal.Title>Tambah Obat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>Silahkan isi form berikut</p>
            <form>
              <label htmlFor="name">
                <Label>Nama :</Label>
                <InputField type="text" />
              </label>
              <SubmitButton type="submit" value="Submit" />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Header;
