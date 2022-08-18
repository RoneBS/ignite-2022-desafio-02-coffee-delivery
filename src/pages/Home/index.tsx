import { OurCoffees } from '../OurCoffees'
import { Intro } from './components/intro'
import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <Intro />
      <OurCoffees />
    </S.HomeContainer>
  )
}
