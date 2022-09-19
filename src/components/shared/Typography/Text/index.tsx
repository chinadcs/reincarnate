import * as S from './styles'
import { IText } from './types'

export const Text: React.FC<IText> = ({
  children, color, fontWeight, size, ...rest
}) => {
  return <S.Text size={size} color={color} fontWeight={fontWeight} {...rest}>
    {children}
  </S.Text>
}