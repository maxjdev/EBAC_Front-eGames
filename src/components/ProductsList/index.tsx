import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Action"
          description="Test"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Naruto Shippuden Storm Ninja 4"
        />
        <Product
          category="Action"
          description="Test"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Naruto Shippuden Storm Ninja 4"
        />
        <Product
          category="Action"
          description="Test"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Naruto Shippuden Storm Ninja 4"
        />
        <Product
          category="Action"
          description="Test"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Naruto Shippuden Storm Ninja 4"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
