/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect } from "react";
import api from "@/services/api";
import { AuthContextType, AuthDataType, AuthProviderType, AuthUserDTO } from "./types";
import { useUser } from "@/hooks/user";

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderType) => {
  // const context = useContext(UserContext)
  const { getUserData } = useUser()
  const isAuthenticated = true;
  const router = useRouter();

  useEffect(() => {
    const { ['reincarnate.jwt']: token } = parseCookies()
    getUserData(token)
  }, [])

  const authUser = async ({ email, password }: AuthDataType) => {
    const payload = {
      email: email,
      password: password
    }
    api.post<AuthUserDTO | undefined>('/auth/login', payload).then((res) => {
      setCookie(undefined, 'reincarnate.jwt', res.data!.token, {
        maxAge: 60 * 60 * 1, // 1 hour
        path: '/'
      })
      setCookie(undefined, 'reincarnate.refresh-token', res.data!.refreshToken._id, {
        maxAge: 60 * 60 * 1, // 1 hour
        path: '/'
      })

      // setUser(res.data!.user)

      router.push('../../dashboard')
    });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, authUser }}>
      {children}
    </AuthContext.Provider>
  )
}