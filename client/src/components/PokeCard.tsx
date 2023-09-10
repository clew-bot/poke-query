
interface PokeCardProps {
    pokemon: any;
}
const PokeCard = ({ pokemon }: PokeCardProps) => {
    console.log(pokemon)
  return (
    <div
    className="border-2 p-2 rounded border-black bg-slate-100 hover:bg-slate-200 transition duration-300 ease-in-out"
    >
        Hi
    </div>
  )
}

export default PokeCard