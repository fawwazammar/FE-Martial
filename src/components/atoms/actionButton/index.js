import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;
  color: #fff;
  background-color: #f5b461;
  padding: 8px 12px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const ActionButton = ({ label }) => {
  return <PrimaryButton>{label}</PrimaryButton>;
};

export default ActionButton;
