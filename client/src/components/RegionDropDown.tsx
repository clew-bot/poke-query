interface RegionDropDownProps {
    setPage: React.Dispatch<React.SetStateAction<number>>
    setSearchParams: React.Dispatch<React.SetStateAction<any>>
}

const RegionDropDown = ({ setPage, setSearchParams }: RegionDropDownProps) => {
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
        case 'Kanto':
            setPage(1)
            setSearchParams({ page: '1' })
            break;
        case 'Johto':
            setPage(8)
            setSearchParams({ page: '8' })
            break;
        case 'Hoenn':
            setPage(13)
            setSearchParams({ page: '13' })
            break;
        case 'Sinnoh':
            setPage(20)
            setSearchParams({ page: '20' })
            break;
        case 'Unova':
            setPage(25)
            setSearchParams({ page: '25' })
            break;
        case 'Kalos':
            setPage(33)
            setSearchParams({ page: '33' })
            break;
        case 'Alola':
            setPage(37)
            setSearchParams({ page: '37' })
            break;
        case 'Galar':
            setPage(41)
            setSearchParams({ page: '41' })
            break;
        default:
            setPage(1)
            setSearchParams({ page: '1' })
            break;
    }
    }


  return (
    <select
    className=" min-w-[120px] p-2 rounded-md bg-slate-100 text-slate-900 font-bold"
        onChange={handleRegionChange}
    name="" id="">
        <option value="Kanto">Kanto</option>
        <option value="Johto">Johto</option>
        <option value="Hoenn">Hoenn</option>
        <option value="Sinnoh">Sinnoh</option>
        <option value="Unova">Unova</option>
        <option value="Kalos">Kalos</option>
        <option value="Alola">Alola</option>
        <option value="Galar">Galar</option>
    </select>
  )
}

export default RegionDropDown