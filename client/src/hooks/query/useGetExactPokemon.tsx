import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ExactPokemon, AbilityPokemon } from "../../types/ExactPokemon";
import { useEffect } from "react";
import { SinglePokemonDTO } from "../../types/SinglePokemonResponse";
import { useNavigate } from "react-router-dom";
const getDetailsPokemon = async (id: string): Promise<ExactPokemon> => {
  try {
    const { data } = await axios.get<ExactPokemon>(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch Pokémon details 2:", error);
    throw new Error("Failed to fetch Pokémon details 2");
  }
};

const getAbilitiesPokemon = async (url: string): Promise<AbilityPokemon> => {
  const { data } = await axios.get<AbilityPokemon>(url);
  return data;
};

const getSinglePokemon = async (name: string) => {
  try {
    const { data } = await axios.get<SinglePokemonDTO>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch Pokémon details 1:", error);
    throw new Error("Failed to fetch Pokémon details 1");
  }
};

export const useMoreInformation = (id: string) => {

 
  const navigate = useNavigate();
  const { data, isError } = useQuery<SinglePokemonDTO>({
    queryKey: ["getSinglePokemon", id],
    queryFn: () => getSinglePokemon(id),
    retry: false,
  });

  const abilities = data?.abilities.map((ability) => ability.ability.url);
  const abilityQueries = useQueries({
    queries:
      abilities?.map((ability) => ({
        queryKey: ["getAbilitiesPokemon", ability],
        queryFn: () => getAbilitiesPokemon(ability),
      })) || [],
  });

  const queries = useQuery({
    queryKey: ["getDetailsPokemon", id],
    queryFn: () => getDetailsPokemon(id),
    retry: false,
  });
  return { queries, abilityQueries, data, isError };

};
