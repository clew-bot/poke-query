import { stagger, useAnimate, motion } from "framer-motion";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useGetAllPokemon } from "./hooks/query/useGetAllPokemon";
import { Link } from "react-router-dom";
import PokeCard from "./components/PokeCard";
import Container from "./components/Container";
import PaginatedBar from "./components/PaginatedBar";

// Moved outside of the component to avoid re-definition

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, isSuccess, isFetching, individualPokemon } =
    useGetAllPokemon(page);
  console.log(individualPokemon);
  const [scope, animate] = useAnimate();
  const staggerNames = stagger(0.1);

  // useEffect(() => {
  //   if (!isSuccess) return;

  //   void animate(
  //     ".poke",
  //     {
  //       opacity: [0, 1],
  //       y: [-100, 0],
  //     },
  //     {
  //       delay: staggerNames,
  //     }
  //   );
  // }, [animate, isSuccess]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.log(error);
    return <div>Error!!!!!</div>;
  }
  if (!individualPokemon) return <div>No data</div>;

  const handlePaginate = (page: number): number => {
    setPage(page);
    return page;
  }

  return (
    <Container>
      <h1 className="text-slate-900 text-6xl font-bold">
        The List of the Original 150 Pokemon.
      </h1>
      <div
        ref={scope}
        className="flex flex-wrap justify-center md:justify-left items-center gap-2"
      >
        {!isFetching && individualPokemon &&
          individualPokemon.map((pokemon) =>
            pokemon.data ? (
              <div key={pokemon.data.id}>
                <PokeCard pokemon={pokemon.data} />
              </div>
            ) : null
          )}
      {
        isFetching && <div>Loading...</div>
      }
          <PaginatedBar 
          page={page}
          setPage={setPage}
          handlePaginate={handlePaginate}/>
      </div>
    </Container>
  );
}

export default App;
