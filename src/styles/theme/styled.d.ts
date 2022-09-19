import 'styled-components';
interface IPalette {
  main: string;
  light: string;
  dark: string;
}

interface IDevice {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}

export type VARIANT =
  | 'commom'
  | 'primary'
  | 'secondary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'info'
  | 'warning'
  | 'error'
  | 'sucess';

export interface IProps {
  variant?: VARIANT;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      font: string;
      colors: {
        white: string;
        black: string;
        gray: string;
        lightGray: string;
        common: string;
        primary: string;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
    };
    palette: {
      common: IPalette;
      primary: IPalette;
      secondary: IPalette;
      tertiary: IPalette;
      quaternary: IPalette;
      info: IPalette;
      warning: IPalette;
      error: IPalette;
      sucess: IPalette;
    };
    devices: IDevice;
  }
}
