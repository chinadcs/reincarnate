import { SvgIcon } from "../Icon"
import { Text } from "../Typography/Text"
import * as S from "./styles"
import { IButton } from "./types"

export const Button: React.FC<IButton> = ({ title, icon, variant, fontSize, fontWeight, fontColor, iconPos, ...rest }) => {

  return (
    <S.Button variant={variant} {...rest}>
      <Text size={fontSize} color={fontColor} fontWeight={fontWeight}>
        {title}
      </Text>
    </S.Button>
  )

}