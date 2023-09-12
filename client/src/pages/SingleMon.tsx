import Container from "../components/Container"
import { useLocation } from "react-router-dom"
import { useMoreInformation } from "../hooks/query/useGetExactPokemon"
import { Link } from "react-router-dom"
import PokemonImages from "../components/PokemonImages"
const SingleMon = () => {

  const location = useLocation()
  // Get the id from the url
  const id = location.pathname.split("/")[2]
  const { abilityQueries, queries, data } = useMoreInformation(id)
  console.log(queries)
  return (
    <Container>
      <Link to="/" className="pt-10">🏠</Link>
      <h1 className="text-4xl font-bold capitalize text-white py-10">{queries.data?.name}</h1>
      <PokemonImages data={data} />
    </Container>

  )
}

export default SingleMon