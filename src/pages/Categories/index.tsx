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
        <ProductsList
          games={actionGames}
          title="Action"
          background={'black'}
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Sports"
          background={'gray'}
          id="sports"
        />
        <ProductsList
          games={figthGames}
          title="Fight"
          background={'black'}
          id="fight"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background={'gray'}
          id="rpg"
        />
        <ProductsList
          games={simulationGames}
          title="Simulation"
          background={'black'}
          id="simulation"
        />
      </>
    )
  }

  return <h4>Loading...</h4>
}

export default Categories
