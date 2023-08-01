import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-brand-1: #55c5d0;
    --color-brand-2: #3e96a9;
    --color-brand-3: #326d7a;
    --color-brand-4: #276573;

    --color-grey-800: #27272a;
    --color-grey-600: #52525b;
    --color-grey-500: #71717a;
    --color-grey-400: #C0C0C0;
    --color-grey-300: #d4d4d8;
    --color-grey-200: #e4e4e7;
    --color-grey-100: #f4f4f5;

    --color-grey-50:  #fafafa;
    --color-warning: #e61919;
    
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    background-color: var(--color-grey-100);
    --webkit-font-smoothing: antialiased;
    
    .no-scroll {
      overflow: hidden;
      position: fixed;
    }
  }

  .wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 98rem;
    padding: 2rem;
    overflow: auto;
  }

`;
