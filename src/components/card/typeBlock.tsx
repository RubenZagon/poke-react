import React, { FC } from "react";
import styled from '../../styled';

interface TypeBlockProps {
  type: string
}

export const TypeBlock: FC<TypeBlockProps> = ({ type }) => {
  return (
    <Container>
      <p>{type}</p>
    </Container>
  );
};

const Container = styled.div`
background: blue;
color:white;
`