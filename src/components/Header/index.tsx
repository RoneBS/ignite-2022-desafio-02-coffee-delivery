import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'

import * as S from './styles'

export const Header = () => {
  const { cartQuantity } = useCart()
  return (
    <S.HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <S.HeaderButtonsContainer>
          <S.HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Várzea Alegre, CE
          </S.HeaderButton>
          <NavLink to="/completeOrder">
            <S.HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </S.HeaderButton>
          </NavLink>
        </S.HeaderButtonsContainer>
      </div>
    </S.HeaderContainer>
  )
}
