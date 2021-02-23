import { GlobalStyle } from '../styles/global';
import { ThemesProvider } from '../hooks';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemesProvider>
        <GlobalStyle />
        <Component {...pageProps}/>
      </ThemesProvider>
    </>
  )
}
