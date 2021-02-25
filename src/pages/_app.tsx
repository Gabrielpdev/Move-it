import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global';
import { ThemesProvider } from '../contexts/theme';
import { ChallengesProvider } from '../contexts/ChallengesContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemesProvider>
          <ChallengesProvider>
            <GlobalStyle />
            <Component {...pageProps}/>
          </ChallengesProvider>
      </ThemesProvider>
    </>
  )
}
