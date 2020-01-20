import React, { FC } from "react";
import styled from '../../styled';

interface TypeBlockProps {
  type: string
}

export const TypeBlock: FC<TypeBlockProps> = ({ type }) => {
  return (
    <Container color={type}>
      <p>{type}</p>
    </Container>
  );
};

const Container = styled.div`
background: ${props => colorSelector(props.color!)};
color:white;
padding:0px;
margin:0px;
height:30px;
width: 70px;
margin-right: 5px;
border-radius:5px;

display:flex;
justify-content:center;
align-items:center;
`

export function colorSelector(type: string): string {

  switch (type) {
    case 'normal':
      return '#a8a878'
    case 'fire':
      return 'red'
    case 'water':
      return '#6890f0'
    case 'grass':
      return '#78c850'
    case 'electric':
      return '#f8d030'
    case 'ice':
      return '#98d8d8'
    case 'fighting':
      return '#c03028'
    case 'poison':
      return '#a040a0'
    case 'ground':
      return '#e0c068'
    case 'psychic':
      return '#f85888'
    case 'rock':
      return '#b8a038'
    case 'ghost':
      return '#705898'
    case 'dark':
      return '#705848'
    case 'dragon':
      return '#705898'
    case 'steel':
      return '#b8b8d0'
    case 'fairy':
      return '#f0b6bc'
    case 'bug':
      return 'green'
    case 'flying':
      return '#a890f0'
    default:
      return 'white'
  }

}