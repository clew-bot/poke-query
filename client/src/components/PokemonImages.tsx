import { SinglePokemonDTO } from "../types/SinglePokemonResponse";
interface PokemonImagesProps {
    data: SinglePokemonDTO | undefined;
}

const PokemonImages = ({ data  }: PokemonImagesProps) => {
  return (
    <div className="flex gap-2">
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
      <img src={data?.sprites.front_shiny ?? data?.sprites.front_default} alt="" />
    <img src={data?.sprites.back_shiny ?? data?.sprites.back_default} alt="" />
      </div>
 
    </div>



  </div>
  )
}

export default PokemonImages