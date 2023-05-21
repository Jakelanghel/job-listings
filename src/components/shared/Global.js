import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: hsl(180, 52%, 96%);
    --color-filter-tablets: hsl(180, 31%, 95%);
    --color-dark-grayish-cyan: hsl(180, 8%, 52%);
    --color-very-dark-grayish-cyan: hsl(180, 14%, 20%);
    --dark-cyan:  hsl(180, 29%, 50%);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "League Spartan", sans-serif;
  }

  html,
  body {
    font-family: 'League Spartan', sans-serif;
    font-size: 1rem;
  }


  .container-listings {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
  }
`;

export default GlobalStyles;
