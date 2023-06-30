import { createGlobalStyle } from 'styled-components'

export const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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