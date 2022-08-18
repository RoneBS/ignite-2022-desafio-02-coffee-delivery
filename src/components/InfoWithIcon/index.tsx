import * as S from './styles'

import { ReactNode } from 'react'

type InfoWithIconProps = {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export const InfoWithIcon = ({ icon, text, iconBg }: InfoWithIconProps) => {
  return (
    <S.InfoWithIconContainer>
      <S.IconContainer iconBg={iconBg}>{icon}</S.IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </S.InfoWithIconContainer>
  )
}
