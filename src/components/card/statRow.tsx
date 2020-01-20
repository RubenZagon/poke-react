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
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="statNumber">
        <p>{stat.base_stat}</p>
      </div>
      <GraphicLine results={stat.base_stat}>
        <span></span>
      </GraphicLine>
    </Container>
  );
};


const Container = styled.div`
margin-top:2px;
display:grid;
grid-template-rows: 40px;
grid-template-columns: 40% 10% 90vw ;
/* align-content: flex-start; */
align-items:center; 

.name{
  font-weight:bold;
  color:  lightgray;
  justify-self:start;
  padding-left: 20%;
  /* padding: 0px 20px; */
}

.statNumber{
  font-weight:bold;
  justify-self:start;
}

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