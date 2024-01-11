import { Game } from '../../pages/Home'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>From {formatPrice(game.prices.old)}</span>
          )}
          {game.prices.current && (
            <>for just {formatPrice(game.prices.current)}</>
          )}
        </p>
        {game.prices.current && (
          <Button
            title="Click here to add this game to cart"
            type="button"
            variant="primary"
          >
            Add to Cart
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
