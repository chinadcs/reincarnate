import { defaultTheme } from '@/styles/theme/theme';

export interface IHeading {
  color: keyof typeof defaultTheme.typography.colors;
  size: keyof typeof defaultTheme.typography.sizes;
  fontWeight?: number;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}
