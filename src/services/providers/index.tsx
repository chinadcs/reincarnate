import { defaultTheme } from "@/styles/theme/theme";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
    return (<ThemeProvider theme={defaultTheme}>
        {children}
    </ThemeProvider>)
}