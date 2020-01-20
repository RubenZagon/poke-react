import React, { FC } from "react";
import styled from '../../styled';

interface ButtonBottomProps {
  onClick: () => void;
}

export const ButtonBottom: FC<ButtonBottomProps> = ({ onClick }) => {


  return (
    <>
      <Button onClick={onClick}>Mirar otro Pokemon</Button>
    </>
  );
};

const Button = styled.button`
height: 50px;
width: 100%;

`