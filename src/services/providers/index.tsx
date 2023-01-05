import { defaultTheme } from "@/styles/theme/theme";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./auth";
import { UserProvider } from "./user";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <UserProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </UserProvider>
        </ThemeProvider>
    )
}