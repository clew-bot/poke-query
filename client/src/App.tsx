import "./App.css";
import { useState, useEffect } from "react";
import { useGetAllPokemon } from "./hooks/query/useGetAllPokemon";
import PokeCard from "./components/PokeCard";
import Container from "./components/Container";
import PaginatedBar from "./components/PaginatedBar";
import { useSearchParams } from "react-router-dom";

// Moved outside of the component to avoid re-definition

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const { individualPokemon } = useGetAllPokemon(page);

  //Grab the page from the URL
  useEffect(() => {
    const page = searchParams.get("page");
    setPage(Number(page) || 1);
  }, [searchParams]);

  const isLoading = individualPokemon?.some((pokemon) => pokemon.isLoading);
  const isFetching = individualPokemon?.some((pokemon) => pokemon.isFetching);
  // console.log(individualPokemon);

  if (!individualPokemon) return <div>No data</div>;

  const handlePaginate = (page: number): number => {
    setSearchParams({ page: page.toString() });
    setPage(page);
    return page;
  };

  return (
    <Container>
      <h1 className="text-slate-900 text-6xl font-bold">
        The List of the Original 150 Pokemon.
      </h1>
      <div className="flex flex-wrap justify-center md:justify-left items-center gap-2">
        {isLoading ? (
          <>
            <div>We're Loading Hold Up Kid!!!!!</div>
          </>
        ) : (
          individualPokemon &&
          individualPokemon.map((pokemon) =>
            pokemon.data ? (
              <div key={pokemon.data.id}>
                <PokeCard pokemon={pokemon.data} />
              </div>
            ) : null
          )
        )}
        {isFetching && <div>Loading...</div>}
      </div>
      <PaginatedBar
        page={page}
        setPage={setPage}
        handlePaginate={handlePaginate}
      />
    </Container>
  );
}

export default App;
