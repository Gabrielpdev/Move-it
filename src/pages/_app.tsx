import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global';
import { ThemesProvider } from '../contexts/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemesProvider>
        <GlobalStyle />
        <Component {...pageProps}/>
      </ThemesProvider>
    </>
  )
}
