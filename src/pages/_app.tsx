// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import RegisterVideo from '../components/RegisterVideo';
import ColorModeProvider, { ColorModeContext } from '../context/colorMode'
import { SearchProvider } from '../context/searchContext'
import { CSSReset } from '../styles/globals'
import { defaultTheme } from '../styles/themes/default';




interface ColorModeWrapperProps{
  children: ReactNode
}
function ColorModeWrapper({children}:ColorModeWrapperProps){
  return(
    <ColorModeProvider initialMode='dark'>
      {children}
    </ColorModeProvider>

  )
}
function MyApp({ Component, pageProps }: AppProps) {
  const {mode} = useContext(ColorModeContext)
  const modeActive = mode === 'dark' ? defaultTheme.dark : defaultTheme.light
  return (
      <ThemeProvider theme={modeActive}>
        <CSSReset/>
          <SearchProvider>
            <Component {...pageProps} />
            <RegisterVideo/>
          </SearchProvider>
      </ThemeProvider>

  )
}


export default function _App(props: AppProps) {
  return (
      <ColorModeWrapper>
          <MyApp {...props} />
      </ColorModeWrapper>
  )
};