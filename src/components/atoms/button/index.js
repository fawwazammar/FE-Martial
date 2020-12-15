import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
  border: none;
  color: #fff;
  background-color: #00adb5;
  padding: 12px 36px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  &:hover {
    background-color: #75b8b6;
    cursor: pointer;
  }
`;

const Button = ({ label }) => {
  return <PrimaryButton>{label}</PrimaryButton>;
};

export default Button;
