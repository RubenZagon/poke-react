import React, { FC, useState, useEffect } from "react";
import styled from '../../styled';
import axios from 'axios';
import { BASE_URL } from "../../services/base";

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

  // let types = pokemonInfo.pokemon.map((res) => {
  //   return (
  //     <div key={res.types.type.slot}>
  //       <h3>{res.type.name}</h3>
  //     </div>
  //   )
  // })

  return (
    <>
      <h1>Soy una carta</h1>
      <h2>Soy el Pokemon {pokemonInfo.name}</h2>
      <p>Tipo - {pokemonInfo.types ? pokemonInfo.types[0].type.name : "no encuentro"}</p>


    </>
  );
};