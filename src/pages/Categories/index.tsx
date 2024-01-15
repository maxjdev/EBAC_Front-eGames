import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFigthGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: figthGames } = useGetFigthGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && figthGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Action" background={'black'} />
        <ProductsList games={sportGames} title="Sports" background={'gray'} />
        <ProductsList games={figthGames} title="Fight" background={'black'} />
        <ProductsList games={rpgGames} title="RPG" background={'gray'} />
        <ProductsList
          games={simulationGames}
          title="Simulation"
          background={'black'}
        />
      </>
    )
  }

  return <h4>Loading...</h4>
}

export default Categories
