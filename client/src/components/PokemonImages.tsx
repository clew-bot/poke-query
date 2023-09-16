import { SinglePokemonDTO } from "../types/SinglePokemonResponse";
interface PokemonImagesProps {
  data: SinglePokemonDTO | undefined;
}

const PokemonImages = ({ data }: PokemonImagesProps) => {
  return (
    <div className="flex justify-between mb-5">
      <div className="p-5  flex rounded-lg relative z-50 flex-col">
        <p className="text-center font-bold text-lg">Regular</p>
        <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
        <div className="flex">
          <img src={data?.sprites.front_default} alt="" />
          <img src={data?.sprites.back_default} alt="" />
        </div>
      </div>
      <div className="p-5 flex flex-col rounded-lg relative z-50">
        <p className="text-center font-bold text-lg">Shiny ✨</p>
        <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
        <div className="flex">
          <img
            src={data?.sprites.front_shiny ?? data?.sprites.front_default}
            alt=""
          />
          <img
            src={data?.sprites.back_shiny ?? data?.sprites.back_default}
            alt=""
          />
        </div>
      </div>
      <div className="p-5 flex flex-col rounded-lg relative z-50">
        <p className="text-center font-bold text-lg">Base Stats 📊</p>
        <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
        <div className="flex capitalize flex-col">
          <p>
            {data?.stats[0].stat.name}{" "}
            <span>{data?.stats[0].base_stat} </span><meter optimum={130} min="0" value={data?.stats[0].base_stat} max="255"></meter>
          </p>
          <p>
            {data?.stats[1].stat.name}{" "}
            <span>{data?.stats[1].base_stat} </span><meter optimum={130}  min="0" value={data?.stats[1].base_stat} max="255"></meter>
          </p>
          <p>
            {data?.stats[2].stat.name}{" "}
            <span>{data?.stats[2].base_stat} </span><meter optimum={130} min="0" value={data?.stats[2].base_stat} max="255"></meter>
          </p>
          <p>
            {data?.stats[3].stat.name}{" "}
            <span>{data?.stats[3].base_stat} </span><meter optimum={130} min="0" value={data?.stats[3].base_stat} max="255"></meter>
          </p>
          <p>
            {data?.stats[4].stat.name}{" "}
            <span>{data?.stats[4].base_stat} </span><meter optimum={130} min="0" value={data?.stats[4].base_stat} max="255"></meter>
          </p>
          <p>
            {data?.stats[5].stat.name}{" "}
            <span>{data?.stats[5].base_stat} </span><meter optimum={130} min="0" value={data?.stats[5].base_stat} max="255"></meter>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonImages;
