import Section from '../Section'
import { Item, Items } from './styles'
import zelda from '../../assets/images/zelda.png'
import witch from '../../assets/images/gallery.jpg'

const Gallery = () => (
  <Section title="Gallery" background="black">
    <Items>
      <Item>
        <img src={witch} alt="" />
      </Item>
      <Item>
        <img src={witch} alt="" />
      </Item>
      <Item>
        <img src={witch} alt="" />
      </Item>
      <Item>
        <img src={witch} alt="" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
