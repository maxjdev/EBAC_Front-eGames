import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { getTotalPrice, parseToBrl } from '../../utils/index'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <S.CartContainer onClick={closeCart} className={isOpen ? 'is-open' : ''}>
      <S.Overlay />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} Jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice(items))}{' '}
          <span>Em até 6x s/ juros </span>
        </S.Prices>
        <Button
          variant="primary"
          title="clique aqui para continuar com a compra"
          type="button"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
