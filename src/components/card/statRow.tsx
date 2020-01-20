import React, { FC } from "react";
import styled from '../../styled';
import { capitalize } from "../../tools/capitalize";

interface StatRowProps {
  stat: {
    base_stat: number,
    stat: {
      name: string
    }
  }
}

export const StatRow: FC<StatRowProps> = ({ stat }) => {
  let name: string

  switch (stat.stat.name) {
    case 'special-attack':
      name = 'Sp. Attack'
      break;
    case "special-defense":
      name = 'Sp. Defense'
      break;
    default:
      name = capitalize(stat.stat.name)
      break;
  }


  return (
    <Container>
      <p>{name} </p>
      <p>{stat.base_stat}</p>
      <GraphicLine results={stat.base_stat}>
        <span></span>
      </GraphicLine>
    </Container>
  );
};


const Container = styled.div`
margin-top:5px;
display:flex;
flex-direction: row;
justify-content: space-around;
align-items:center;
`

const GraphicLine = styled.div`
  background: lightgrey;
  width: 40%;
  height:7px;
  border-radius:5px;
  display:flex;
  overflow:hidden;

  span  {
    background: ${props => props.results! >= 50 ? 'lightgreen' : 'red'};
    width:${props => props.results!}%;
    height:100%;
  }
`