import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import residentEvil from '../../assets/images/resident.png'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <h3>Loading</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="About the game" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="More details" background="gray">
        <p>
          <b>Platform:</b> {game.details.system}
          <br />
          <b>Developer:</b> {game.details.developer}
          <br />
          <b>Publishing company:</b> {game.details.publisher}
          <br />
          <b>Languages:</b> The game supports multiple languages, including{' '}
          {game.details.languages.join(', ')}
          <br />
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
