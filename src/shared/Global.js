import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: hsl(180, 52%, 96%);
    --color-filter-tablets: hsl(180, 31%, 95%);
    --color-dark-grayish-cyan: hsl(180, 8%, 52%);
    --color-very-dark-grayish-cyan: hsl(180, 14%, 20%);
    --dark-cyan:  hsl(180, 29%, 50%);
  }

  * {
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
