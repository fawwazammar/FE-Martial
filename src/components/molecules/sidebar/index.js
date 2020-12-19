import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

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
  margin-top: 40px;
`;

const BottomContent = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #393e46;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px 8px;
  &:hover {
    background-color: #e0e1e6;
    border-radius: 15px;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const Label = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #34626c;
  margin-bottom: 0;
`;

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <TopContent>
        <Title>Administrator</Title>
        <ContentWrapper>
          <Icon src={IconDokter} alt="Icon" />
          <Label>Dokter</Label>
        </ContentWrapper>
        <Link to="/rumahsakit">
          <ContentWrapper>
            <Icon src={IconRumahSakit} alt="Icon" />
            <Label>Pasien</Label>
          </ContentWrapper>
        </Link>
        <Link to="/obat">
          <ContentWrapper>
            <Icon src={IconObat} alt="Icon" />
            <Label>Obat</Label>
          </ContentWrapper>
        </Link>
      </TopContent>
      <BottomContent>
        <ContentWrapper onClick={handleShow}>
          <Icon src={IconSignOut} alt="Icon" />
          <Label>Sign Out</Label>
        </ContentWrapper>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          dialogClassName="modal-50w"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Out</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>Apakah kamu yakin?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button type="button" className="btn btn-danger">
                Yes
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </BottomContent>
    </Container>
  );
};

export default Sidebar;
