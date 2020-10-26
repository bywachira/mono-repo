import { DefaultTheme } from "styled-components"

export const defaultTheme: DefaultTheme = {
    borderRadius: '6px',
    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        primary: {
            main: "#000",
            contrastText: "#fff"
        },
        secondary: {
            main: "#f4f6ff",
            contrastText: "#000"
        }
    }
}

export const darkTheme: DefaultTheme = {
    ...defaultTheme,
    palette: {
        ...defaultTheme.palette,
        primary: {
            main: "#f4f6ff",
            contrastText: "#000"
        },
        secondary: {
            main: "#000",
            contrastText: "#f4f6ff"
        }
    }
}