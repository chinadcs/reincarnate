import 'styled-components';
interface IPalette {
    main: string
    light: string
    dark: string
}

interface IDevice {
    mobileS: string
    mobileM: string
    mobileL: string
    tablet: string
    laptop: string
    laptopL: string
    desktop: string
}

enum VARIANT {
    commom,
    primary,
    secondary,
    secondary,
    tertiary,
    quaternary,
    info,
    warning,
    error,
    sucess
}

export interface IProps {
    variant?: VARIANT
}


declare module 'styled-components' {
    export interface DefaultTheme {
        font: string,
        palette: {
            common: IPalette
            primary: IPalette
            secondary: IPalette
            tertiary: IPalette
            quaternary: IPalette
            info: IPalette
            warning: IPalette
            error: IPalette
            sucess: IPalette
        },
        devices: IDevice

    }
}