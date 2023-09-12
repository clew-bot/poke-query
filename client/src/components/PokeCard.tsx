import { Link } from "react-router-dom";
import { SinglePokemonDTO } from "../types/SinglePokemonResponse";
import { motion } from "framer-motion";
import { pokemonTypeColors } from "../types/pokemonTypeColors";
interface PokeCardProps {
  pokemon: SinglePokemonDTO;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  if (!pokemon.name) return null;
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="border-2 p-2 rounded border-black bg-slate-100 hover:bg-slate-200 transition duration-300 ease-in-out flex flex-col justify-center items-center cursor-pointer w-44 ">
        <h2 
        title={pokemon.name}
        className="font-bold capitalize text-xl text-ellipsis w-32 whitespace-nowrap overflow-hidden text-center">{pokemon.name}</h2>
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 2,
            },
          }}
          exit={{ opacity: 0 }}
          className="w-32 h-32"
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
        />
        <p className="font-bold">
          <span
            className="capitalize"
            style={{
              color: `#${pokemonTypeColors[pokemon.types[0].type.name]}`,
              border: `solid 2px #${
                pokemonTypeColors[pokemon.types[0].type.name]
              }`,
              borderRadius: "5px",
              padding: "2px",
              margin: "2px",
              backgroundColor: "white",
            }}
          >
            {pokemon.types[0].type.name.charAt(0).toUpperCase() +
              pokemon.types[0].type.name.slice(1)}
          </span>

          {pokemon.types[1]
            ? pokemon.types[1] && (
                <span
                  className="capitalize"
                  style={{
                    color: `#${pokemonTypeColors[pokemon.types[1].type.name]}`,
                    border: `solid 2px #${
                      pokemonTypeColors[pokemon.types[1].type.name]
                    }`,
                    borderRadius: "5px",
                    padding: "2px",
                    margin: "2px",
                    backgroundColor: "white",
                  }}
                >
                  {pokemon.types[1].type.name.charAt(0).toUpperCase() +
                    pokemon.types[1].type.name.slice(1)}
                </span>
              )
            : null}
        </p>
      </div>
    </Link>
  );
};

export default PokeCard;
