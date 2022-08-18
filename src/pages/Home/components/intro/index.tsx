import * as S from './styles'
import * as T from '../../../../components/Typography'
import coffeeIntro from '../../../../assets/image.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { useTheme } from 'styled-components'

export const Intro = () => {
  const { colors } = useTheme()
  return (
    <S.IntroContainer>
      <S.IntroContent className="container">
        <div>
          <section>
            <S.IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </S.IntroTitle>
            <T.RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </T.RegularText>
          </section>
          <S.BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors['brand-yellow-dark']}
              text="Compra simples e segura"
            ></InfoWithIcon>
            <InfoWithIcon
              icon={<Package weight="fill" />}
              iconBg={colors['base-text']}
              text="Embalagem mantém o café intacto"
            ></InfoWithIcon>
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              iconBg={colors['brand-yellow']}
              text="Entrega rápida e rastreada"
            ></InfoWithIcon>
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              iconBg={colors['brand-purple']}
              text="O café chega fresquinho até você"
            ></InfoWithIcon>
          </S.BenefitsContainer>
        </div>
        <img src={coffeeIntro} alt="" />
      </S.IntroContent>
    </S.IntroContainer>
  )
}
