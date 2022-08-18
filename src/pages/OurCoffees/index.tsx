import { TitleText } from '../../components/Typography'
import { coffees } from '../../data/coffees'
import { CoffeeCard } from '../Home/components/CoffeeCard'
import * as S from './styles'

export const OurCoffees = () => {
  return (
    <S.OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <S.CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </S.CoffeeList>
    </S.OurCoffeesContainer>
  )
}
