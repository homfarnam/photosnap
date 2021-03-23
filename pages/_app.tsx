import React from "react"
import { AppProps } from "next/app"
import { CookiesProvider } from "react-cookie"
import "../styles/index.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

export default MyApp
