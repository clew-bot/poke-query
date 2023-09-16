import { FlavorText } from "../types/ExactPokemon";

interface PokemonVersionsProps {
  filteredFlavorText: FlavorText[] | undefined;
}

const PokemonVersions = ({ filteredFlavorText }: PokemonVersionsProps) => {
  return (
    <div>
      <div className="py-8">
      <div className="p-5  flex rounded-lg relative z-50 flex-col">
    <p className="text-center font-bold text-xl pb-3">Pokedex Entries</p>
    <div className="bg-neutral-300 h-full w-full absolute top-0 right-0 opacity-80 -z-10 rounded-xl blur-xs shadow-lg"></div>
          <table className="min-w-full">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Version Name
                </th>
                <th className="w-2/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Description
                </th>
              </tr>
            </thead>
            {filteredFlavorText?.map((entry) => (
              <tbody key={entry.version.name} className="text-gray-700">
                <tr className="border-b-[.3px] border-gray-500">
                  <td className="w-1/3 text-left py-3 px-4 capitalize text-black">
                    {entry.version.name}
                  </td>
                  <td className="w-2/3 text-left py-3 px-4 text-black">
                    {entry.flavor_text}
                  </td>
                </tr>
                {/* You can add more rows here as needed */}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
export default PokemonVersions;
