import { useState, useEffect, useRef } from "react";
import pokemonList from "../assets/json/pokemonList.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<any>("");
  const [filteredPokemon, setFilteredPokemon] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchTerm.length === 0) return setFilteredPokemon([]);
    const results = pokemonList
      .filter((pokemon) => {
        return pokemon.toLowerCase().includes(searchTerm);
      })
      .slice(0, 10);
    setFilteredPokemon(results);
  }, [searchTerm]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "ArrowDown" && selectedIndex < filteredPokemon.length - 1) {
        // Arrow Down
        setSelectedIndex(selectedIndex + 1);
      } else if (e.code === "ArrowUp" && selectedIndex > -1) {
        // Arrow Up
        setSelectedIndex(selectedIndex - 1);
      } else if (e.code === "Enter" && selectedIndex >= 0) {
        // Enter key
        navigate(`/pokemon/${filteredPokemon[selectedIndex].toLowerCase()}`);
      } else if (e.code === "Escape") {
        // Escape key
        setSelectedIndex(-1);
        setSearchTerm("");
      } else if (e.code === "Enter" && selectedIndex === -1) {
        // Enter key
        navigate(`/pokemon/${searchTerm.toLowerCase()}`);
      }
    };
    if (searchRef.current) {
      searchRef.current.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (searchRef.current) {
        searchRef.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [selectedIndex, filteredPokemon]);

  return (
    <>
      <div className="border-2 text-center w-fit p-2 bg-slate-200 rounded-lg m-2 relative">
        <input
          ref={searchRef}
          type="text"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          className="text-xl px-2 bg-purple-400 rounded-md text-black placeholder:text-slate-700 placeholder:italic placeholder:font-light outline-none font-bold"
          placeholder="Search for a Pokemon"
        />
        <div className="absolute border-2 top-11 w-64 rounded-md text-white font-bold z-50 opacity-100">
          {filteredPokemon.map((pokemon: string, index: number) => (
            <div key={index}>
              <div className="w-full h-full absolute top-0 -z-10 bg-black opacity-50 rounded-md"></div>
              <motion.div
                whileHover={{ scale: 1.1, textDecoration: "underline", padding: "2px" }}
                className={`z-50 cursor-pointer ${index === selectedIndex ? 'bg-blue-400' : ''}`}
                onClick={() => navigate(`/pokemon/${pokemon.toLowerCase()}`)}
              >
                {pokemon}
              </motion.div>
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
