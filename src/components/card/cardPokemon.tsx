import React, { FC, useState, useEffect } from "react";
import styled from '../../styled';
import axios from 'axios';
import { BASE_URL } from "../../services/base";
import { TypeBlock } from "./typeBlock";

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


interface pokemon {
  name: string
  types?: pokemonType[]
}

export const CardPokemon: FC<cardPokemonProps> = (props) => {
  const [pokemonInfo, setPokemonInfo] = useState<pokemon>({ name: '', types: [{ type: { name: "" } }] });


  // Debería usar useEffect?
  useEffect(() => {
    axios.get(`${BASE_URL}pokemon/butterfree/`).then((res: ServerResponse) => {
      const pokemon = res.data
      setPokemonInfo({ name: pokemon.name, types: [...pokemon.types] });
    })

  }, []);

  let tipos = pokemonInfo.types!.map(tipos => {
    return (
      <TypeBlock type={tipos.type.name} />
    )
  })

  return (
    <>
      <h2>{pokemonInfo.name}</h2>
      <p>Tipo - {tipos && tipos}</p>
    </>
  );
};