// import React from 'react'
import DashboardPage from '@/components/pages/Dashboard'
import { TokenDecoded } from '@/providers/auth/types';
import { decode } from 'jsonwebtoken';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['reincarnate.jwt']: token } = parseCookies(ctx);
  if (token) {

    const { isAuthenticated } = decode(token) as TokenDecoded;
    if (!isAuthenticated) {
      return {
        redirect: {
          destination: '../auth/login',
          permanent: false
        }
      }
    }
  }
  return {
    props: {}
  }
}

const Dashboard = () => {
  return (
    <DashboardPage />
  )
}

export default Dashboard