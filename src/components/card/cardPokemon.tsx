import React, { FC, useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from '../../styled';
import axios from 'axios';
import { BASE_URL } from "../../services/base";
import { TypeBlock } from "./typeBlock";
import { StatRow } from "./statRow";
import { capitalize } from "../../tools/capitalize";

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


  useEffect(() => {
    let randomID = Math.round(Math.random() * 150)

    axios.get(`${BASE_URL}pokemon/${randomID}/`).then((res: ServerResponse) => {
      const pokemon = res.data
      setPokemonInfo({
        name: capitalize(pokemon.name),
        types: [...pokemon.types],
        sprites: pokemon.sprites,
        stats: [...pokemon.stats]
      });
    })
  }, [])

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

  return (
    <>
      {pokemonInfo ? <h2>{pokemonInfo.name}</h2> : <h1>Cargando...</h1>}
      <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} height="200px" />
      <TyposContainer>
        {typesRender}
      </TyposContainer>
      <StatsContainer>
        {statsRender.reverse()}
      </StatsContainer>
    </>
  );
}

const TyposContainer = styled.div`
            display: flex;
            justify-content:center;
            align-items:center;
            `

const StatsContainer = styled.div`
            display:grid;
            background: white;
            border-radius: 20px 20px 0px 0px;
`