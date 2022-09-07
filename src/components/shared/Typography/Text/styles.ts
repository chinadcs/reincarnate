import styled, { css } from 'styled-components';
import { IText } from './types';

export const Text = styled.p<IText>`
  ${({ color = 'white', size = 'medium', fontWeight = 400 }) => css`
    font-size: ${props => props.theme.typography.sizes[size]};
    color: ${props => props.theme.typography.colors[color]};
    font-weight: ${fontWeight};
  `}
`;
