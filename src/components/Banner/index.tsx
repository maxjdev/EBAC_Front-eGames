import { Image, Title, Prices } from './styles'
import BannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="container">
      <Tag size="big">Highlight of the day</Tag>
      <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
      <Prices>
        From <span>R$ 250,00</span> <br />
        for just R$ 99,90
      </Prices>
    </div>
  </Image>
)

export default Banner
