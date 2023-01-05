import * as S from './styles'
import {
  Formik,
} from 'formik';
import { Button } from '@/components/shared/Button';

const Register = () => {
  return (
    <>
      <S.Wrapper>
        <S.FormArea>
          <S.FormContent>

            <Formik
              initialValues={{ email: '', name: '', password: '', confirmPassword: '', }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <S.Login>
                  <S.LoginField>
                    <S.Input type="name" name="name" placeholder="Name" />
                  </S.LoginField>
                  <S.LoginField>
                    <S.Input type="email" name="email" placeholder="E-mail" />
                  </S.LoginField>
                  <S.LoginField>
                    <S.Input type="password" name="password" placeholder="Password" />
                  </S.LoginField>
                  <S.LoginField>
                    <S.Input type="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                  </S.LoginField>
                  <Button variant="secondary" title="Login" fontWeight={800} fontColor={'black'} fontSize={'medium'} disabled={isSubmitting} />
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

export default Register;