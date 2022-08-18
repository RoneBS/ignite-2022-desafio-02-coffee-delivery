import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/Typography'
import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'
import { formatMoney } from '../../../../uttils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export type Coffee = {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

type CoffeeProps = {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity((state) => state + 1)
  }

  const handleDecrease = () => {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  const handleAddToCart = () => {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <S.CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <S.Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </S.Tags>
      <S.Name>{coffee.name}</S.Name>
      <S.Description>{coffee.description}</S.Description>
      <S.CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <S.AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </S.AddCartWrapper>
      </S.CardFooter>
    </S.CoffeeCardContainer>
  )
}
