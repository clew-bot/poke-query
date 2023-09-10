import { SinglePokemonResponse } from "../hooks/query/useGetAllPokemon";

interface PokeCardProps {
  pokemon: SinglePokemonResponse;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  console.log(pokemon.name);
  return (
    <div className="border-2 p-2 rounded border-black bg-slate-100 hover:bg-slate-200 transition duration-300 ease-in-out">
      { pokemon.name }
    </div>
  );
};

export default PokeCard;
