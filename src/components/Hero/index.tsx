import bannerHog from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerHog})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>From R$ 250.00</span>
          For R$ 190.00
        </p>
        <Button
          title="Click here to add this game to cart"
          type="button"
          variant="primary"
        >
          Add to Cart
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
