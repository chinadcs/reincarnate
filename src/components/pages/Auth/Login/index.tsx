import * as S from './styles'
import {
  Formik, FormikProps,
} from 'formik';
import { Button } from '@/components/shared/Button';
import { useContext, useRef } from 'react';
import { LoginUser } from './types';
import { AuthContext } from '@/services/providers/auth';

const Login = () => {
  const formRef = useRef<FormikProps<LoginUser>>(null);
  const { authUser } = useContext(AuthContext)
  const handleSubmit = async ({ email, password }: LoginUser) => {

    const payload = {
      email: email,
      password: password,
    }

    await authUser(payload);
  }

  return (
    <>
      <S.Wrapper>
        <S.FormArea>
          <S.FormContent>

            <Formik
              innerRef={formRef}
              initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit, setFieldTouched, handleChange }) => (
                <S.Login onSubmit={handleSubmit}>
                  <S.LoginField>
                    <S.Input type="text" name="email" placeholder="E-mail" onChange={e => [setFieldTouched('email'), handleChange(e)]} />
                  </S.LoginField>
                  <S.LoginField>
                    <S.Input type="password" name="password" placeholder="Password" onChange={e => [setFieldTouched('password'), handleChange(e)]} />
                  </S.LoginField>
                  <Button type='submit' variant="secondary" title="Login" fontWeight={800} fontColor={'black'} fontSize={'medium'} />
                </S.Login>
              )}
            </Formik>
          </S.FormContent>
          <S.FormBackground>
            <S.FormBackgroundShape_4></S.FormBackgroundShape_4>
            <S.FormBackgroundShape_3></S.FormBackgroundShape_3>
            <S.FormBackgroundShape_2></S.FormBackgroundShape_2>
            <S.FormBackgroundShape_1></S.FormBackgroundShape_1>
          </S.FormBackground>
        </S.FormArea>
      </S.Wrapper>
    </>
  )
}

export default Login;