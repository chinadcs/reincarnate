import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import React from 'react'
import GlobalStyle from '@/styles/globals'
import { Providers } from '@/providers/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <GlobalStyle />
      <Providers>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Providers>
    </>

  )
}

export default MyApp
