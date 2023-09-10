import { stagger, useAnimate, motion } from "framer-motion";
import "./App.css";
import { useEffect, useRef } from "react";
import { useGetAllPokemon } from "./hooks/query/useGetAllPokemon";
import { Link } from "react-router-dom";
import PokeCard from "./components/PokeCard";

// Moved outside of the component to avoid re-definition
const capitalize = (str: string) => {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
};

function App() {
  const { data, isLoading, isError, error, isSuccess } = useGetAllPokemon();
  const [scope, animate] = useAnimate();
  const staggerNames = stagger(0.1);

  useEffect(() => {
    if (!isSuccess) return;

    void animate(
      ".poke",
      {
        opacity: [0, 1],
        y: [-100, 0],
      },
      {
        delay: staggerNames,
      }
    );
  }, [animate, isSuccess]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.log(error);
    return <div>Error!!!!!</div>;
  }
  if (!data) return <div>No data</div>;

  return (
    <>
      <h1 className="text-slate-900 text-6xl font-bold">
        The List of the Original 150 Pokemon.
      </h1>
      <div
        ref={scope}
        className="flex flex-wrap justify-left items-center gap-2"
      >
        {isSuccess &&
          data?.results.map((pokemon) => (
            <PokeCard key={pokemon.name} pokemon={pokemon}>
            <Link
              to={`/pokemon/${pokemon.name}`}
              className="poke font-light text-lg"
              key={pokemon.name}
            >
              {capitalize(pokemon.name)}
            </Link>
            </PokeCard>
          ))}
      </div>
    </>
  );
}

export default App;
