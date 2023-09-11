import { Link } from "react-router-dom";
import { SinglePokemonDTO } from "../types/SinglePokemonResponse";
import { motion, AnimatePresence } from "framer-motion";
import { pokemonTypeColors } from "../types/pokemonTypeColors";
interface PokeCardProps {
  pokemon: SinglePokemonDTO;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
  if (!pokemon.name) return null;
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <div className="border-2 p-2 rounded border-black bg-slate-100 hover:bg-slate-200 transition duration-300 ease-in-out flex flex-col justify-center items-center cursor-pointer">
        <h2 className="font-bold capitalize text-2xl">{pokemon.name}</h2>
        <AnimatePresence>
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
          {/* <p className="font-bold">
            {pokemon.types.map((typeObj, index) => (
              <span
              className="capitalize"
              key={pokemon.id}
                style={{
                  color: `#${pokemonTypeColors[typeObj.type.name]}`,
                  border: `solid 2px #${pokemonTypeColors[typeObj.type.name]}`,
                  borderRadius: "5px",
                  padding: "2px",
                  margin: "2px",
                  backgroundColor: "white",
                }}
              >
                {typeObj.type.name.charAt(0).toUpperCase() + typeObj.type.name.slice(1)}
              </span>
            ))}
          </p> */}
        </AnimatePresence>
      </div>
    </Link>
  );
};

export default PokeCard;
