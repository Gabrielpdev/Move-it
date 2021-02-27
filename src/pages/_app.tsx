import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global';
import { ThemesProvider } from '../contexts/theme';
import { SessionProvider } from '../contexts/SessionContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemesProvider>
        <SessionProvider>
          <GlobalStyle />
          <Component {...pageProps}/>
        </SessionProvider>
      </ThemesProvider>
    </>
  )
}
