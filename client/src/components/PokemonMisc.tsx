// import { AbilityPokemon } from "../types/ExactPokemon";
import { ExactPokemon } from "../types/ExactPokemon";

interface PokemonMiscProps {
    queries: {
        data: ExactPokemon | undefined;
    };
}

const PokemonMisc = ({ queries }: PokemonMiscProps) => {
  return (
    <div className="p-5  flex rounded-lg relative z-50 flex-col">
    <p className="text-center font-bold text-xl">Misc.</p>
    <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
    <div className="fle capitalize">
      <p className="font-bold text-purple-800">
        Base Happiness: <span className="text-purple-700 text-lg">{queries.data?.base_happiness}</span>{" "}
      </p>
      <p className="font-bold text-purple-800">
        Primary Color: <span className="text-purple-700 text-lg">{queries.data?.color?.name}</span>{" "}
      </p>
      <p className="font-bold text-purple-800">
        Number: <span className="text-purple-700 text-lg">{queries.data?.id}</span>{" "}
      </p>
      <p className="font-bold text-purple-800">
        Habitat: <span className="text-purple-700 text-lg">{queries.data?.habitat?.name || "Unknown"}</span>{" "}
      </p>
      <p className="font-bold text-purple-800">
        Legendary:{" "}
        <span className="text-purple-700 text-lg">{!queries.data?.is_legendary ? "False" : "True ✨"}</span>{" "}
      </p>
    </div>
  </div>
  )
}

export default PokemonMisc