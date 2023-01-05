import { UserContext } from "@/providers/user"
import { useContext } from "react"

export const useUser = () => {
  const context = useContext(UserContext)

  const getUserData = (token: string): void => {
    context.getUserData(token);
  }

  // TODO check user data not going directly
  /*   const getUserData2 = async (token: string): Promise<void> => {
  
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
  
    } */

  return { context, getUserData };
}