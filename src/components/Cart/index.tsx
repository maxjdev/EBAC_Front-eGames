import Button from '../Button'
import {
  Quantity,
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem
} from './styles'
import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={starWars} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 250,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starWars} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 250,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>3 Jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>Em até 6x s/ juros </span>
      </Prices>
      <Button
        variant="primary"
        title="clique aqui para continuar com a compra"
        type="button"
      >
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
