import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string;
  previous: string;

  results: Pokemon[];
}

export interface SinglePokemonResponse {
  abilities: any[];
  base_experience: number | null;
  forms: any[] | null;
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any[];
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  stats: any[];
  types: any[];
  weight: number;
}

const getAllPokemon = async (offset: any): Promise<PokemonResponse> => {
  const { data } = await axios.get<PokemonResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  );
  return data;
};

const getSinglePokemon = async (url: string) => {
  const { data } = await axios.get<SinglePokemonResponse>(url);
  return data;
};

export const useGetAllPokemon = (page: number) => {
  const offset = (page - 1) * 20;
  const { isLoading, isError, data, error, isSuccess, isFetching } = useQuery<
    PokemonResponse,
    Error
  >({ queryKey: ["getAllPokemon", { offset }], queryFn: () => getAllPokemon(offset), keepPreviousData : true });
  console.log(isFetching)
  const individualPokemon =
    useQueries({
      queries:
        data?.results.map((pokemon) => ({
          queryKey: ["getSinglePokemon", pokemon.url],
          queryFn: () => getSinglePokemon(pokemon.url),
        })) || [],
    });

  return {
    isLoading,
    isError,
    data,
    error,
    isSuccess,
    individualPokemon,
    isFetching,
  };
};
