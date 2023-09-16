import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useMoreInformation } from "../hooks/query/useGetExactPokemon";
import { Link } from "react-router-dom";
import PokemonImages from "../components/PokemonImages";
import PokemonVersions from "../components/PokemonVersions";
import PokemonAbilityCard from "../components/PokemonAbility";
import PokemonMisc from "../components/PokemonMisc";
const SingleMon = () => {
  const location = useLocation();
  // Get the id from the url
  const id = location.pathname.split("/")[2];
  const { abilityQueries, queries, data, isError } = useMoreInformation(id);
  const navigate = useNavigate();
  if(isError === true) {
   return navigate("/error");
  }
  const filteredFlavorText = queries.data?.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  );

  const filteredAbilityText = abilityQueries.map((ability) => {
    const englishDescriptions = ability.data?.effect_entries.filter(
      (entry) => entry.language.name === "en"
    );

    return {
      name: ability.data?.name,
      description: englishDescriptions,
    };
  });
  return (
    <Container>
      <div className="mt-2 transition-all text-slate-100 hover:underline hover:underline-offset-8 ">
        <Link to="/" className="pt-10 text-3xl">
          Home
        </Link>
      </div>

      <h1 className="text-7xl underline underline-offset-4 decoration-slate-200 text-slate-50 text-center font-bold capitalize py-10">
        {queries.data?.name}
      </h1>
      <PokemonImages data={data} />

      <PokemonAbilityCard filteredAbilityText={filteredAbilityText} />
      <PokemonMisc queries={queries} />
      <PokemonVersions filteredFlavorText={filteredFlavorText} />
    </Container>
  );
};

export default SingleMon;
