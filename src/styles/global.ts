import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './themes/default'

export const GlobalStyle = createGlobalStyle<{ theme: typeof defaultTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  
  p, a, button {
    font-family: 'Roboto', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
  }
  
  body {
    background: ${(props) => props.theme['base-100']};
    
    margin:0 10rem;
    height: 100vh;
    
    @media (max-width: 768px) {
      margin: 0 2.75rem;
    }
    ::-webkit-scrollbar {
    width: 14px;
  }
  
  ::-webkit-scrollbar-track {
    background:  ${(props) => props.theme['base-100']};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['purple-200']};
    border-radius: 10px;
    border-right: 3px transparent solid;
    background-clip: padding-box;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['purple-200']};
    border-radius: 10px;
    border-right: 3px transparent solid;
    background-clip: padding-box;
  }
  }
  
`
