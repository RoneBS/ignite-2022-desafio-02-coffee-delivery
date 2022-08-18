import { ReactNode } from 'react'
import { RegularText } from '../../../../components/Typography'

import * as S from './styles'

type SectionTitleProps = {
  title: string
  subtitle: string
  icon: ReactNode
}

export const SectionTitle = ({ title, subtitle, icon }: SectionTitleProps) => {
  return (
    <S.SectionTitleConatiner>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </S.SectionTitleConatiner>
  )
}
