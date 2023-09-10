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

const getAllPokemon = async (): Promise<PokemonResponse> => {
    const { data } = await axios.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon?limit=20");
    return data;
}

const getSinglePokemon = async (url: string): Promise<Pokemon> => {
    const { data } = await axios.get<Pokemon>(url);
    return data;
}

export const useGetAllPokemon = () => {
    const { isLoading, isError, data, error, isSuccess } = useQuery<PokemonResponse, Error>({queryKey: ["getAllPokemon"],  queryFn: getAllPokemon});

    const individualPokemon = useQueries({
        queries: data?.results.map((pokemon) => ({
            queryKey: ["getSinglePokemon", pokemon.url],
            queryFn: () => getSinglePokemon(pokemon.url)
        })) || []
    })



    // const pokemonQueries = useQueries({
    //     queries: [
    //         {
    //             queryKey: ["getSinglePokemon", data?.results[0].url],
    //             queryFn: () => getSinglePokemon(data.results[0].url)
    //         }
    //     ]
    // });

    return { isLoading, isError, data, error, isSuccess, individualPokemon };
}
