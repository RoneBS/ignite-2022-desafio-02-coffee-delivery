import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <S.PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <S.ContentContainer>
          {icon}
          {label}
        </S.ContentContainer>
      </label>
    </S.PaymentMethodContainer>
  )
})

PaymentMethodInput.displayName = 'PaymentMethodInput'
