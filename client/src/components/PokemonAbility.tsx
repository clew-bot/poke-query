import { VerboseEffect } from "../types/ExactPokemon";

interface Ability {
  name: string | undefined;
  description: VerboseEffect[] | undefined;
}

interface PokemonAbilityCardProps {
  filteredAbilityText: Ability[];
}

const PokemonAbilityCard = ({
  filteredAbilityText,
}: PokemonAbilityCardProps) => {
  return (
    <div className="p-5 mb-5 flex rounded-lg relative z-50 flex-col">
    <p className="text-center font-bold text-3xl py-2">Abilities 🪄</p>
    <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
      {filteredAbilityText.map((ability: Ability, index: number) => (
        <div key={index} className="rounded-xl bg-neutral-500 m-1 shadow-lg hover:translate-x-2 transition-all">
          <h1 className="text-2xl font-bold capitalize text-indigo-100 p-2 decoration-indigo-400 underline">
            {ability.name}
          </h1>
          {ability.description &&
            ability.description.map((description, index) => (
              <p key={index} className="text-indigo-200 p-2">
                {description.effect}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
};

export default PokemonAbilityCard;
