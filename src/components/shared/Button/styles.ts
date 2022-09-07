import { IVariants } from './types.d';
import { IProps } from '@/styles/theme/styled';
import styled, { css, DefaultTheme } from 'styled-components';
import { IButton } from './types';

const variantStyles = (theme: DefaultTheme, variant = 'primary') =>
  ({
    primary: css`
      color: ${theme.palette.common.light};
      background: ${theme.palette.common.main};
      border: 1px solid ${theme.palette.common.main};
    `,
    secondary: css`
      color: ${theme.typography.colors.black};
      background: #f2f2f2;
      border: 1px solid #f2f2f2;
    `
  }[variant]);

export const Button = styled.button<Partial<IButton>>`
  padding: 10px 25px;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
  gap: 20px;

  ${({ theme, variant }) => variantStyles(theme, variant)}

  &:active {
    transform: translateY(1.5px);
  }
`;

// export default Button;
