import * as S from './styles'
import { IHeading } from './types'

export const Heading: React.FC<IHeading> = ({
  children, color, fontWeight, size, ...rest
}) => {
  return <S.Heading size={size} color={color} fontWeight={fontWeight} {...rest}>
    {children}
  </S.Heading>
}