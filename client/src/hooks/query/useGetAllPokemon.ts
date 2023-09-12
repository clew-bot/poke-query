import { useQuery, useQueries } from "@tanstack/react-query";
import { SinglePokemonDTO } from "../../types/SinglePokemonResponse";
import axios from "axios";
import { PokemonResponse } from "../../types/GeneralResponse";
// import { useSearchParams } from "react-router-dom";

// const [searchParams, setSearchParams] = useSearchParams();

const getAllPokemon = async (offset: any): Promise<PokemonResponse> => {
  const { data } = await axios.get<PokemonResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  );
  return data;
};

const getSinglePokemon = async (url: string) => {
  const { data } = await axios.get<SinglePokemonDTO>(url);
  return data;
};

export const useGetAllPokemon = (page: number) => {
  const offset = (page - 1) * 20;
  const { data } = useQuery<PokemonResponse, Error>({
    queryKey: ["getAllPokemon", { offset }],
    queryFn: () => getAllPokemon(offset),
    keepPreviousData: true,
  });
  const individualPokemon = useQueries({
    queries:
      data?.results.map((pokemon) => ({
        queryKey: ["getSinglePokemon", pokemon.url],
        queryFn: () => getSinglePokemon(pokemon.url),
      })) || [],
  });

  // console.log(individualPokemon);

  return {
    individualPokemon,
  };
};
