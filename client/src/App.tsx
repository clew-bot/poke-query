import "./App.css";
import { useState, useEffect } from "react";
import { useGetAllPokemon } from "./hooks/query/useGetAllPokemon";
import PokeCard from "./components/PokeCard";
import Container from "./components/Container";
import PaginatedBar from "./components/PaginatedBar";
import SearchBar from "./components/SearchBar";
import { useSearchParams } from "react-router-dom";
import Footer from "./components/Footer";
import RegionDropDown from "./components/RegionDropDown";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import loading from "./assets/lottie/loading.json"


function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const { individualPokemon } = useGetAllPokemon(page);

  useEffect(() => {
    const page = searchParams.get("page");
    setPage(Number(page) || 1);
  }, [searchParams]);

  const isLoading = individualPokemon?.some((pokemon) => pokemon.isLoading);


  if (!individualPokemon) return <div>No data</div>;

  const handlePaginate = (page: number): number => {
    setSearchParams({ page: page.toString() });
    setPage(page);
    return page;
  };



  return (
    <>
    <Container>
      <Link to="/">
      <h1 className="text-slate-100 text-6xl font-bold text-center m-7">
        Browse Pokemon..
      </h1>
      </Link>
     
      <div className="flex justify-center items-center">
        <SearchBar />
        <PaginatedBar
          page={page}
          setPage={setPage}
          handlePaginate={handlePaginate}
        />
        <RegionDropDown setPage={setPage} setSearchParams={setSearchParams}/>
      </div>

      <div className="flex flex-wrap items-start gap-2 justify-center">
        {isLoading ? (
          <>
            <div className="h-screen">
              <Player
              autoplay
              src={loading}
              style={{ height: '50px', width: '50px' }}
              />
            </div>
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
      </div>
    </Container>
    <Footer />
    </>
  );
}

export default App;
