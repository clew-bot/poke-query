import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ExactPokemon, AbilityPokemon } from "../../types/ExactPokemon";
import { SinglePokemonDTO } from "../../types/SinglePokemonResponse";

const getDetailsPokemon = async (id: string): Promise<ExactPokemon> => {
  const { data } = await axios.get<ExactPokemon>(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  return data;
};

const getAbilitiesPokemon = async (url: string): Promise<AbilityPokemon> => {
  const { data } = await axios.get<AbilityPokemon>(
    url
  );
  return data;
};

const getSinglePokemon = async (name:string) => {
  const { data } = await axios.get<SinglePokemonDTO>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return data;
};

export const useMoreInformation = (id: string) => {

  const { data } = useQuery<SinglePokemonDTO>({
    queryKey: ["getSinglePokemon", id],
    queryFn: () => getSinglePokemon(id),
  })

  const abilities = data?.abilities.map((ability) => ability.ability.url)
  const abilityQueries = useQueries({
    queries: abilities?.map((ability) => ({
      queryKey: ["getAbilitiesPokemon", ability],
      queryFn: () => getAbilitiesPokemon(ability),
    })) || [],
  });
  
  const queries = useQuery({
        queryKey: ["getDetailsPokemon", id],
        queryFn: () => getDetailsPokemon(id),
  });
  return { queries, abilityQueries, data };
};
