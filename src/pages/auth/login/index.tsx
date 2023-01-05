import LoginPage from '@/components/pages/Auth/Login'
import { TokenDecoded } from '@/providers/auth/types';
import { decode } from 'jsonwebtoken';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['reincarnate.jwt']: token } = parseCookies(ctx);
  if (token) {

    const { isAuthenticated } = decode(token) as TokenDecoded;
    if (isAuthenticated) {
      return {
        redirect: {
          destination: '../dashboard',
          permanent: false
        }
      }
    }
  }
  return {
    props: {}
  }
}

const Login = () => {
  return (
    <>
      <title>Login</title>
      <meta property='og:title' content='Login' key='title' />
      <LoginPage />
    </>
  )
}

export default Login