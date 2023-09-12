import Container from "../components/Container";
import { useLocation } from "react-router-dom";
import { useMoreInformation } from "../hooks/query/useGetExactPokemon";
import { Link } from "react-router-dom";
import PokemonImages from "../components/PokemonImages";
import PokemonVersions from "../components/PokemonVersions";
import PokemonAbilityCard from "../components/PokemonAbility";
const SingleMon = () => {
  const location = useLocation();
  // Get the id from the url
  const id = location.pathname.split("/")[2];
  const { abilityQueries, queries, data } = useMoreInformation(id);
  console.log(queries);

  const filteredFlavorText = queries.data?.flavor_text_entries.filter(
    (entry) => entry.language.name === "en"
  );

  const filteredAbilityText  = abilityQueries.map((ability) => {
    const englishDescriptions = ability.data?.effect_entries.filter(
      (entry) => entry.language.name === "en"
    );

    return {
      name: ability.data?.name,
      description: englishDescriptions,
    }
  }
  );
  return (
    <Container>
      <Link to="/" className="pt-10">
        🏠
      </Link>
      <h1 className="text-4xl font-bold capitalize text-white py-10">
        {queries.data?.name}
      </h1>
      <PokemonImages data={data} />
      <PokemonAbilityCard filteredAbilityText={filteredAbilityText} />
      <PokemonVersions filteredFlavorText={filteredFlavorText} />
    </Container>
  );
};

export default SingleMon;
