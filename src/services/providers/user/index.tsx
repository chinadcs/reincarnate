import api from "@/services/api";
import jwt from "jsonwebtoken";
import { createContext, useContext, useState } from "react";
import { TokenDecoded } from "../auth/types";
import { UserContextType, UserProviderType, UserType } from "./types";

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState({} as UserType);

  const getUserData = async (token: string): Promise<void> => {

    if (token) {
      // TODO type this JWT
      const jwtToken = jwt.decode(token) as TokenDecoded;
      console.log(jwtToken)
      api.get<UserType>(`/user/${jwtToken!.id}`).then((res) => {
        const users: UserType = res.data;
        console.log(users)
        setUser({ name: users.name, email: users.email, id: users.id })
      })
    }

  }

  return (
    <UserContext.Provider value={{ user, setUser, getUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}