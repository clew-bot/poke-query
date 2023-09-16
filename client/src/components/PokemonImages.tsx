import { SinglePokemonDTO } from "../types/SinglePokemonResponse";
import "./meter.css";
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
        <div className="flex capitalize flex-col">
          <p>
            {data?.stats[0].stat.name} <span>{data?.stats[0].base_stat} </span>
            <meter
              min={0}
              max={255}
              low={45}
              high={130}
              optimum={130}
              value={data?.stats[0].base_stat}
            ></meter>
          </p>
          <p>
            {data?.stats[1].stat.name} <span>{data?.stats[1].base_stat} </span>
            <meter
              min={0}
              max={255}
              low={45}
              high={130}
              optimum={130}
              value={data?.stats[1].base_stat}
            ></meter>
          </p>
          <p>
            {data?.stats[2].stat.name} <span>{data?.stats[2].base_stat} </span>
            <meter
              min={0}
              max={255}
              low={45}
              high={130}
              optimum={130}
              value={50}
              // value={data?.stats[2].base_stat}
            ></meter>
            {/* <meter id="fuel" min="0" max="100" low={33} high={66} optimum={80} value="19">at 50/100</meter> */}
          </p>
          <p>
            {data?.stats[3].stat.name} <span>{data?.stats[3].base_stat} </span>
            <meter
              min={0}
              max={255}
              low={45}
              high={130}
              optimum={130}
              value={data?.stats[3].base_stat}
            ></meter>
          </p>
          <p>
            {data?.stats[4].stat.name} <span>{data?.stats[4].base_stat} </span>
            <meter
              min={0}
              max={255}
              low={45}
              high={130}
              optimum={130}
              value={data?.stats[4].base_stat}
            ></meter>
          </p>
          <p>
            {data?.stats[5].stat.name} <span>{data?.stats[5].base_stat} </span>
            <meter
              min={0}
              max={255}
              low={45}
              high={130}
              optimum={130}
              value={data?.stats[5].base_stat}
            ></meter>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonImages;
