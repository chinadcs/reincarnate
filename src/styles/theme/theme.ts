import {DefaultTheme} from 'styled-components'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const defaultTheme: DefaultTheme = {
    font: 'Roboto' ,
    palette:{
        common:{
            main: '#2196F3',
            light: '#6ec6ff',
            dark: '#0069c0',
        },
        primary:{
            main: '#6CB7F4',
            light: '#a2e9ff',
            dark: '#3187c1',
        },
        secondary:{
            main: '#1B75BF',
            light: '#60a3f2',
            dark: '#004a8e',
        },
        tertiary:{
            main: '#104673',
            light: '#4971a2',
            dark: '#001f47',
        },
        quaternary:{
            main: '#325775',
            light: '#6084a4',
            dark: '#002e49',
        },
        info:{
            main: '#29b6f6',
            light: '#4fc3f7',
            dark: '#0288d1',
        },
        warning:{
            main: '#ffa726',
            light: '#ffb74d',
            dark: '#f57c00',
        },
        error:{
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
        },
        sucess:{
            main: '#66bb6a',
            light: '#81c784',
            dark: '#388e3c',
        },

    },
    devices:{
        mobileS: `(min-width: ${size.mobileS})`,
        mobileM: `(min-width: ${size.mobileM})`,
        mobileL: `(min-width: ${size.mobileL})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`,
        laptopL: `(min-width: ${size.laptopL})`,
        desktop: `(min-width: ${size.desktop})`,
    }
}