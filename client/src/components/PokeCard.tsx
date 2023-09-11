import { Link } from "react-router-dom";
import { SinglePokemonDTO } from "../types/SinglePokemonResponse";
import { motion, AnimatePresence } from "framer-motion";
interface PokeCardProps {
  pokemon: SinglePokemonDTO;
}
const capitalize = (str: string) => {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
};

const PokeCard = ({ pokemon }: PokeCardProps) => {
  if (!pokemon.name) return null;
  return (
   <Link to={`/pokemon/${pokemon.name}`}>
    <div className="border-2 p-2 rounded border-black bg-slate-100 hover:bg-slate-200 transition duration-300 ease-in-out flex flex-col justify-center items-center cursor-pointer">
      { capitalize(pokemon.name) }
      <AnimatePresence>

        <motion.img
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: {
                staggerChildren: 2
              } }}
              exit={{ opacity: 0 }}
              
          className="w-32 h-32"
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
        />
        <p
        className="font-bold"
        >{capitalize(pokemon.types.map((typeObj) => typeObj.type.name).join(" "))}</p>
      </AnimatePresence>
    </div>
    </Link>
  );
};

export default PokeCard;
