// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CSSReset } from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CSSReset/>
      <Component {...pageProps} />
    </>
  )
}
