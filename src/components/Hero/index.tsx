import { useDispatch } from 'react-redux'

import { parseToBrl } from '../../utils/index'
import { Game } from '../../pages/Home'
import Tag from '../Tag'
import Button from '../Button'
import { add, open } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>From {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>for just {parseToBrl(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              title="Click here to add this game to cart"
              type="button"
              variant="primary"
              onClick={addCart}
            >
              Add to Cart
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
