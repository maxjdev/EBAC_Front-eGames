import { Image, Title, Prices } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Loading</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Highlight of the day</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            From <span>{formatPrice(game.prices.old)}</span> <br />
            for just {formatPrice(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click here to take advantage of the offer"
        >
          To enjoy
        </Button>
      </div>
    </Image>
  )
}

export default Banner
