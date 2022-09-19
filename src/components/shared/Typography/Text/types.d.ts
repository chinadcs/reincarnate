import { defaultTheme } from '@/styles/theme/theme';

export interface IText extends HTMLAttributes<HTMLParagraphElement> {
  color?: keyof typeof defaultTheme.typography.colors;
  size?: keyof typeof defaultTheme.typography.sizes;
  fontWeight?: number;
  children: React.ReactNode;
}
