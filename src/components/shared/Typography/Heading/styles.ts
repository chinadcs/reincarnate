import { IHeading } from './types.d';
import styled, { css } from 'styled-components';

export const Heading = styled.h1.attrs<IHeading>(({ level }) => ({
  as: `h${level}`
}))<IHeading>`
  ${({ color = 'white', size = 'medium', fontWeight = 700 }) => css`
    font-size: ${props => props.theme.typography.sizes[size]};
    color: ${props => props.theme.typography.colors[color]};
    font-size: ${fontWeight};
  `}
`;
