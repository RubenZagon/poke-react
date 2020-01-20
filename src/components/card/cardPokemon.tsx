import React, { FC, useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '../../styled';
import axios from 'axios';
import { BASE_URL } from "../../services/base";
import { TypeBlock, colorSelector } from "./typeBlock";
import { StatRow } from "./statRow";
import { capitalize } from "../../tools/capitalize";
import { ButtonBottom } from "../button/buttonBottom";

interface cardPokemonProps {

}

interface ServerResponse {
  data: pokemon
}

interface pokemonProps {
  name: string
}

interface pokemonType {
  type: pokemonProps
}

interface pokemonStat {
  stat: {
    name: string
  },
  base_stat: number
}

interface pokemon {
  name: string
  types?: pokemonType[]
  sprites: { front_default: string }
  stats: pokemonStat[]
}

export const CardPokemon: FC<cardPokemonProps> = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState<pokemon>(
    {
      name: '',
      types: [{ type: { name: "" } }],
      sprites: { front_default: '' },
      stats: [{ stat: { name: "" }, base_stat: 0 }]
    });

  const getNumberRandom = Math.round(Math.random() * 150);
  const [randomID, setRandomID] = useState<number>(getNumberRandom)

  useEffect(() => {

    axios.get(`${BASE_URL}pokemon/${randomID}/`).then((res: ServerResponse) => {
      const pokemon = res.data
      setPokemonInfo({
        name: capitalize(pokemon.name),
        types: [...pokemon.types],
        sprites: pokemon.sprites,
        stats: [...pokemon.stats]
      });
    })
  }, [randomID])

  let statsRender = pokemonInfo.stats!.map(e => {
    return (
      <StatRow stat={e} />
    )
  });

  let typesRender = pokemonInfo.types!.map(e => {
    return (
      <TypeBlock type={e.type.name} />
    )
  })

  const handleRandomID = () => {
    setRandomID(getNumberRandom);
  }

  return (
    <Container color={pokemonInfo.stats[0].stat.name}>
      {pokemonInfo ? <h2>{pokemonInfo.name}</h2> : <h1>Cargando...</h1>}
      <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} height="200px" />
      <TyposContainer>
        {typesRender}
      </TyposContainer>
      <StatsContainer>
        {statsRender.reverse()}
      </StatsContainer>
      <ButtonBottom onClick={handleRandomID} />
    </Container>
  );
}

const Container = styled.div`
height:100vh;
background: ${props => colorSelector(props.color!)};
`

const TyposContainer = styled.div`
            display: flex;
            justify-content:center;
            align-items:center;
            `

const StatsContainer = styled.div`
            display:grid;
            background: white;
            border-radius: 20px 20px 0px 0px;
            padding-top:10%;
            height: 50vh;
`