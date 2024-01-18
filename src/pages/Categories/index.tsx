import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFigthGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: figthGames, isLoading: isLoadingFigth } =
    useGetFigthGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Action"
        background={'black'}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Sports"
        background={'gray'}
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={figthGames}
        title="Fight"
        background={'black'}
        id="fight"
        isLoading={isLoadingFigth}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background={'gray'}
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={simulationGames}
        title="Simulation"
        background={'black'}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
