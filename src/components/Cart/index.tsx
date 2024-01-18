import { useSelector, useDispatch } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { formatPrice } from '../ProductsList'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  Quantity,
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer onClick={closeCart} className={isOpen ? 'is-open' : ''}>
      <Overlay />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} Jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice())}{' '}
          <span>Em até 6x s/ juros </span>
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
}

export default Cart
