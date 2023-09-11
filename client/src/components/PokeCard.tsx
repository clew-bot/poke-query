import { SinglePokemonResponse } from "../hooks/query/useGetAllPokemon";


interface PokeCardProps {
  pokemon: SinglePokemonResponse;
}
const capitalize = (str: string) => {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
};

const PokeCard = ({ pokemon }: PokeCardProps) => {
  if (!pokemon.name) return null;
  return (
    <div className="border-2 p-2 rounded border-black bg-slate-100 hover:bg-slate-200 transition duration-300 ease-in-out">
      { capitalize(pokemon.name) }
      <div>
        <img
          className="w-32 h-32"
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
        />
      </div>
    </div>
  );
};

export default PokeCard;
