import "./App.css";
import { useState, useEffect } from "react";
import { useGetAllPokemon } from "./hooks/query/useGetAllPokemon";
import PokeCard from "./components/PokeCard";
import Container from "./components/Container";
import PaginatedBar from "./components/PaginatedBar";
import SearchBar from "./components/SearchBar";
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
      <h1 className="text-slate-100 text-6xl font-bold text-center m-7">
        Browse Pokemon.
      </h1>
      <div className="flex justify-center items-center">
        <SearchBar />
        <PaginatedBar
          page={page}
          setPage={setPage}
          handlePaginate={handlePaginate}
        />
      </div>

      <div className="flex flex-wrap items-start gap-2 justify-center">
        {isLoading ? (
          <>
            <div>We're Loading Hold Up Kid!!!!!</div>
          </>
        ) : (
          individualPokemon &&
          individualPokemon.map((pokemon) =>
            pokemon.data ? (
              <div key={pokemon.data.name}>
                <PokeCard pokemon={pokemon.data} />
              </div>
            ) : null
          )
        )}
        {isFetching && <div>Loading...</div>}
      </div>
    </Container>
  );
}

export default App;
