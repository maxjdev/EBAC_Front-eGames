import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, CartButton } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categories</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">News</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promotions</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        0 - Product(s)
        <img src={cart} alt="Cart" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
