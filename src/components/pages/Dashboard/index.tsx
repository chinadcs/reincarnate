import { Navbar } from "@/components/structures/Navbar";
import { useUser } from "@/hooks/user";
import { UserContext } from "@/providers/user";
import { useContext } from "react";
import * as S from './styles'

const Dashboard = () => {
  const context = useContext(UserContext)
  const { context: { user } } = useUser();
  // setUser({ email: 'teste', name: 'teste' })
  return (
    <>
      <S.SideBar>

      </S.SideBar>
      <section>
        Primeiro Mundo
      </section>
      <section>
        <ul>
          <li>Characters</li>
          <li>Campaings</li>
          <li>Locations</li>
          <li>Maps</li>
          <li>Organizations</li>
        </ul>
      </section>
      <Navbar />
      <div>
        {user?.name}
        {user?.email}
        {"\n"}
        {"AAA"}
        {"\n"}
        {context.user?.email}
        {context.user?.email}
      </div>
    </>
  )
}

export default Dashboard;