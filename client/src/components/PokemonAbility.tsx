import { VerboseEffect } from "../types/ExactPokemon";

interface Ability {
  name: string | undefined;
  description: VerboseEffect[] | undefined;
}

interface PokemonAbilityCardProps {
    filteredAbilityText: Ability[];
}

const PokemonAbilityCard = ({ filteredAbilityText }: PokemonAbilityCardProps) => {
return (    <div>
    {filteredAbilityText.map((ability:Ability, index:number) => (
      <div
      key={index}
      >
        <h1 className="text-2xl font-bold capitalize text-white py-10">
          {ability.name}
        </h1>
        {ability.description && ability.description.map((description, index) => (
          <p 
          key={index}
          className="text-white">{description.effect}</p>
        ))}
        </div>
    ))}
      </div>
  )
}

export default PokemonAbilityCard;