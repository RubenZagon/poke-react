import React, { FC, useState, useEffect } from "react";
import styled from '../../styled';
import axios from 'axios';
import { BASE_URL } from "../../services/base";

interface cardPokemonProps {

}

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  name: string
}

export const CardPokemon: FC<cardPokemonProps> = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState<any>({ pokemon: [] });

  useEffect(() => {
    axios.get<ServerData>(`${BASE_URL}pokemon/butterfree/`).then((res: ServerResponse) => {
      const pokemon = res.data
      setPokemonInfo({ pokemon });
    })

  }, []);

  let types = pokemonInfo.pokemon.map((res) => {
    return (
      <div key={res.types.type.slot}>
        <h3>{res.type.name}</h3>
      </div>
    )
  })

  return (
    <>
      <h1>Soy una carta</h1>
      <h2>Soy el Pokemon {pokemonInfo.pokemon.name}</h2>
      <p>{types}</p>


    </>
  );
};