import ProductsList from '../../components/ProductsList'
import { Game } from '../../pages/Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSports(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulation(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))
  })

  return (
    <>
      <ProductsList games={gamesAction} title="Action" background={'black'} />
      <ProductsList games={gamesSports} title="Sports" background={'gray'} />
      <ProductsList games={gamesFight} title="Fight" background={'black'} />
      <ProductsList games={gamesRpg} title="RPG" background={'gray'} />
      <ProductsList
        games={gamesSimulation}
        title="Simulation"
        background={'black'}
      />
    </>
  )
}

export default Categories
