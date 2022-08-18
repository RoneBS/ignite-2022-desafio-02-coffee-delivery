import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { AdressForm } from './AdressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import * as S from './styles'

export const CompleteOrderForm = () => {
  const { colors } = useTheme()
  return (
    <S.CompleteOrderFormConetainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <S.FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />
        <AdressForm />
      </S.FormSectionContainer>
      <S.FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />
        <PaymentMethodOptions />
      </S.FormSectionContainer>
    </S.CompleteOrderFormConetainer>
  )
}
