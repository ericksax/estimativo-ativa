import { createGlobalStyle } from 'styled-components'

export const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: 62.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        --webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }
    
    ul, ol {
      list-style: none;
    }

    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }

    button {
        cursor: pointer;
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }
`