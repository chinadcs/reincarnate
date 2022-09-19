import { DefaultTheme } from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const defaultTheme: DefaultTheme = {
  typography: {
    font: 'Roboto',
    colors: {
      white: '#eee',
      black: '#111',
      gray: '#333',
      lightGray: '#CCC',
      common: '#2196F3',
      primary: '#6CB7F4'
    },
    sizes: {
      xsmall: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.25rem',
      xxlarge: '1.5rem'
    }
  },
  palette: {
    common: {
      main: '#2196F3',
      light: '#6ec6ff',
      dark: '#0069c0'
    },
    primary: {
      main: '#6CB7F4',
      light: '#a2e9ff',
      dark: '#3187c1'
    },
    secondary: {
      main: '#1B75BF',
      light: '#60a3f2',
      dark: '#004a8e'
    },
    tertiary: {
      main: '#104673',
      light: '#4971a2',
      dark: '#001f47'
    },
    quaternary: {
      main: '#325775',
      light: '#6084a4',
      dark: '#002e49'
    },
    info: {
      main: '#29b6f6',
      light: '#4fc3f7',
      dark: '#0288d1'
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00'
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f'
    },
    sucess: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c'
    }
  },
  devices: {
    mobileS: `max-width: ${size.mobileS}`,
    mobileM: `max-width: ${size.mobileM}`,
    mobileL: `max-width: ${size.mobileL}`,
    tablet: `max-width: ${size.tablet}`,
    laptop: `max-width: ${size.laptop}`,
    laptopL: `max-width: ${size.laptopL}`,
    desktop: `max-width: ${size.desktop}`
  }
};
