import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { parseToBrl } from '../../utils/index'
import { useGetFeaturedGameQuery } from '../../services/api'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Highlight of the day</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            From <span>{parseToBrl(game.prices.old)}</span> <br />
            for just {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click here to take advantage of the offer"
        >
          To enjoy
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
