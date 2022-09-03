import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/globals'
import React from 'react'
import { Providers } from '@/providers/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <GlobalStyle />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>

  )
}

export default MyApp
