import Tag from '../Tag'
import { Description, Card, TitleH3 } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <TitleH3>Name Game</TitleH3>
    <Tag>Category</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quisquam
      doloremque excepturi est, voluptate dignissimos explicabo eligendi
      voluptates iste, rem iusto quas praesentium distinctio modi adipisci ipsum
      facilis non fugit?
    </Description>
  </Card>
)

export default Product
