import { SinglePokemonDTO } from "../types/SinglePokemonResponse";
import "./meter.css";
import SkillMeter from "./SkillMeter";
interface PokemonImagesProps {
  data: SinglePokemonDTO | undefined;
}

const PokemonImages = ({ data }: PokemonImagesProps) => {
  console.log(data);
  return (
    <div className="flex justify-center gap-2 sm:gap-0 sm:justify-between mb-2 flex-wrap items-center">
      <div className="p-5 flex rounded-lg relative z-50 flex-col">
        <p className="text-center font-bold text-lg">Regular</p>
        <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
        <div className="flex">
          <img
            width={250}
            src={data?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>
      </div>
      <div className="p-5 flex-col rounded-lg relative z-50">
        <p className="text-center font-bold text-lg">Shiny ✨</p>
        <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
        <div className="flex">
          <img
            width={250}
            src={data?.sprites.other["official-artwork"].front_shiny}
            alt=""
          />
        </div>
      </div>
      <div className="p-5 flex flex-col rounded-lg relative z-50">
        <p className="text-center font-bold text-lg">Base Stats 📊</p>
        <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
        {data?.stats.map((stat) => (
          <SkillMeter
            key={stat.stat.name}
            name={stat.stat.name}
            stat={stat.base_stat}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonImages;
