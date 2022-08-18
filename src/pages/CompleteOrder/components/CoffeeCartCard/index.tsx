import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import { Trash } from 'phosphor-react'
import { formatMoney } from '../../../../uttils/formatMoney'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'

import * as S from './styles'

type CoffeeCartCardProps = {
  coffee: CartItem
}

export const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formatePrice = formatMoney(coffeeTotal)

  const handleIncrease = () => {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  const handleDecrease = () => {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  const handleRemove = () => {
    removeCartItem(coffee.id)
  }

  return (
    <S.CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <S.ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <S.RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </S.RemoveButton>
          </S.ActionsContainer>
        </div>
      </div>

      <p>R${formatePrice}</p>
    </S.CoffeeCartCardContainer>
  )
}
