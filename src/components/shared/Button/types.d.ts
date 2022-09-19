import { IconNames } from './../Icon/index.type';
import { ButtonHTMLAttributes } from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { defaultTheme } from '@/styles/theme/theme';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: IconNames;
  iconPos?: 'left' | 'right';
  variant: string;
  fontWeight?: number;
  fontSize?: keyof typeof defaultTheme.typography.sizes;
  fontColor?: keyof typeof defaultTheme.typography.colors;
  // size: string
}

export interface IVariants {
  sizes: {
    [key: string]: FlattenSimpleInterpolation;
  };
  colors: {
    [key: string]: FlattenSimpleInterpolation;
  };
}
