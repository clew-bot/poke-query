import { useState, useEffect } from "react";
import pokemonList from "../assets/json/pokemonList.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<any>("");
  const [filteredPokemon, setFilteredPokemon] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(searchTerm);
    if (searchTerm.length === 0) return setFilteredPokemon([]);
    const results = pokemonList
      .filter((pokemon) => {
        return pokemon.toLowerCase().includes(searchTerm);
      })
      .slice(0, 10);
    setFilteredPokemon(results);
  }, [searchTerm]);

  return (
    <>
      <div className="border-2 text-center w-fit p-2 bg-slate-200 rounded-lg m-2 relative">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          className="text-xl px-2 bg-purple-400 rounded-md text-black placeholder:text-slate-700 placeholder:italic placeholder:font-light outline-none font-bold"
          placeholder="Search for a Pokemon"
        />
        <div className="absolute border-2 top-11 w-64 rounded-md text-white font-bold z-50 opacity-100">
          {filteredPokemon.map((pokemon: string, index: number) => (
            <div key={index}>
              <div className=" w-full h-full absolute top-0 -z-10 bg-black opacity-50 rounded-md"></div>
              <motion.div
              whileHover={{ scale: 1.1, textDecoration: "underline", padding: "2px" }}
              className="z-50 cursor-pointer"
              onClick={() => navigate(`/pokemon/${pokemon.toLowerCase()}`)}
              >{pokemon}</motion.div>
            </div>
          ))}
        </div>
      </div>

      <button className="transition-all border-2 p-2 bg-white rounded-md font-bold hover:-translate-y-1">
        GO!
      </button>
    </>
  );
};

export default SearchBar;
