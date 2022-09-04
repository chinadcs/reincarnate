import { IProps } from "@/styles/theme/styled";
import styled from "styled-components";

export const Button = styled.button<IProps>`
    color: ${props => props.theme.palette.primary.main};
    height: 50px;
    width: 200px;
    background-color: ${props => props.theme.palette.primary.dark};

`;