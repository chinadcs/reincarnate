import { Button } from "@/components/shared/Button";
import { SvgIcon } from "@/components/shared/Icon";
import Link from "next/link";
import { useState } from "react";
import * as S from './styles'
export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Nav>
      <Link href='/'>
        <S.Logo>
          <SvgIcon name="Logo" dimension="66" />
        </S.Logo>
      </Link>
      <S.Hamburguer onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </S.Hamburguer>
      <S.Menu isOpen={isOpen}>
        <S.LoginWrapper>

          <Link href='/'>
            <Button variant="secondary" title="SignIn" fontWeight={800} fontColor={'black'} fontSize={'medium'}></Button>
          </Link>
          <Link href='/'>
            <Button variant="primary" title="SignUp" fontWeight={800} fontColor={'white'} fontSize={'medium'}></Button>
          </Link>
        </S.LoginWrapper>

      </S.Menu>
    </S.Nav>
  )
}
