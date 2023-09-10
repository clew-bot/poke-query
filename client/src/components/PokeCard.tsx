
interface PokeCardProps {
    pokemon: any;
    children: React.ReactNode;
}
const PokeCard = ({ pokemon, children }: PokeCardProps) => {
  return (
    <div
    className="border-2 p-2 rounded border-black bg-slate-100 hover:bg-slate-200 transition duration-300 ease-in-out"
    >
        {children}
    </div>
  )
}

export default PokeCard