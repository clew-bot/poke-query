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
      <Link to="/" className="pt-10">
        🏠
      </Link>
      <h1 className="text-4xl font-bold capitalize text-white py-10">
        {queries.data?.name}
      </h1>
      <PokemonImages data={data} />
      <div className="p-5  flex rounded-lg relative z-50 flex-col">
        <p className="text-center font-bold text-lg">Regular</p>
        <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
        <div className="fle capitalize">
          <p>
            Base Happiness: <span>{queries.data?.base_happiness}</span>{" "}
          </p>
          <p>
            Primary Color: <span>{queries.data?.color.name}</span>{" "}
          </p>
          <p>
            Number: <span>{queries.data?.id}</span>{" "}
          </p>
          <p>
            Habitat: <span>{queries.data?.habitat.name}</span>{" "}
          </p>
          <p>
            Legendary:{" "}
            <span>{!queries.data?.is_legendary ? "False" : "True"}</span>{" "}
          </p>
        </div>
      </div>
      <PokemonAbilityCard filteredAbilityText={filteredAbilityText} />
      <PokemonVersions filteredFlavorText={filteredFlavorText} />
    </Container>
  );
};

export default SingleMon;
