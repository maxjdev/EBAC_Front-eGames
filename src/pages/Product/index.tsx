import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'

import { useGetGameQuery } from '../../services/api'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <Loader />
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
