import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './themes/default'

export const GlobalStyle = createGlobalStyle<{ theme: typeof defaultTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-color: ${(props) => props.theme['brand-purple']}
  }
  
  p, a, button {
    font-family: 'Roboto', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
  }
  
  body {
    background: ${(props) => props.theme['base-background']};
    height: 100vh;
    
    ::-webkit-scrollbar {
    width: 14px;
  }
  
  ::-webkit-scrollbar-track {
    background:  ${(props) => props.theme['base-background']};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['brand-purple']};
    border-radius: 10px;
    border-right: 3px transparent solid;
    background-clip: padding-box;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['brand-purple']};
    border-radius: 10px;
    border-right: 3px transparent solid;
    background-clip: padding-box;
  }
  }
  
`
