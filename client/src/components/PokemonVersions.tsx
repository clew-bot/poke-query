import { FlavorText } from "../types/ExactPokemon";

interface PokemonVersionsProps {
  filteredFlavorText: FlavorText[] | undefined;
}

const PokemonVersions = ({ filteredFlavorText }: PokemonVersionsProps) => {
  return (
    <div>
      <div className="py-8 px-8">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
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
                <tr>
                  <td className="w-1/3 text-left py-3 px-4 capitalize">
                    {entry.version.name}
                  </td>
                  <td className="w-2/3 text-left py-3 px-4">
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
