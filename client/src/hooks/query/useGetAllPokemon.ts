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

interface SinglePokemonResponse {
    abilities: any[];
    base_experience: number;
    forms: any[];
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
    sprites: any[];
    stats: any[];
    types: any[];
    weight: number;
}


const getAllPokemon = async (): Promise<PokemonResponse> => {
    const { data } = await axios.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon?limit=20");
    return data;
}

const getSinglePokemon = async (url: string): Promise<SinglePokemonResponse> => {
    const { data } = await axios.get<SinglePokemonResponse>(url);
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

    return { isLoading, isError, data, error, isSuccess, individualPokemon };
}
