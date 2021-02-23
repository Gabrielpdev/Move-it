import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87.5%
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Inter', sans-serif;
  }

  body, input, textarea, button{
    font: 400 1rem "Inter", sans-serif;
  }

  button{
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`