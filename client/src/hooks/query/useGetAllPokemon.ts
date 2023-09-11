import { useQuery, useQueries } from "@tanstack/react-query";
import { SinglePokemonDTO } from "../../types/SinglePokemonResponse";
import axios from "axios";
import { PokemonResponse } from "../../types/GeneralResponse";




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
  const { isLoading, isError, data, error, isSuccess, isFetching } = useQuery<
    PokemonResponse,
    Error
  >({
    queryKey: ["getAllPokemon", { offset }],
    queryFn: () => getAllPokemon(offset),
    keepPreviousData: true,
  });
  console.log("is Fetch: ", isFetching);
  const individualPokemon = useQueries({
    queries:
      data?.results.map((pokemon) => ({
        queryKey: ["getSinglePokemon", pokemon.url],
        queryFn: () => getSinglePokemon(pokemon.url),
      })) || [],
  });

  console.log(individualPokemon);

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
